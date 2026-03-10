import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

// --- Hooks (Same as before) ---
const useMedia = (queries, values, defaultValue) => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    const index = queries.findIndex(q => window.matchMedia(q).matches);
    return index > -1 ? values[index] : defaultValue;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    
    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));
    return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

// --- Main Component ---
const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  // New props for height-based sizing
  baseHeight = 300, // Base height for scaling
  heightScaleFactor = 1, // Scale factor for heights
  maintainAspectRatio = true // Whether to maintain original aspect ratio
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    if(items && items.length > 0) {
        // Preload images and get their natural dimensions
        Promise.all(
          items.map(async (item) => {
            const img = new Image();
            img.src = item.img;
            await new Promise(resolve => {
              img.onload = () => {
                setImageDimensions(prev => ({
                  ...prev,
                  [item.id]: {
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                    aspectRatio: img.naturalWidth / img.naturalHeight
                  }
                }));
                resolve();
              };
              img.onerror = () => resolve();
            });
          })
        ).then(() => setImagesReady(true));
    }
  }, [items]);

  const getInitialPosition = item => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case 'top': return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      case 'left': return { x: -200, y: item.y };
      case 'right': return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default: return { x: item.x, y: item.y + 100 };
    }
  };

  // --- MODIFIED LOGIC HERE ---
  // Calculate grid items based on image heights
  const { gridItems, containerHeight } = useMemo(() => {
    if (!width || !items) return { gridItems: [], containerHeight: 0 };
    
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    // Find min and max heights for normalization
    const heights = items.map(item => item.height || baseHeight);
    const minHeight = Math.min(...heights);
    const maxHeightItem = Math.max(...heights);
    const heightRange = maxHeightItem - minHeight || 1;

    const mappedItems = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      
      // Calculate height based on image dimensions
      let height;
      
      if (maintainAspectRatio && imageDimensions[child.id]) {
        // Use aspect ratio to determine height based on column width
        const aspectRatio = imageDimensions[child.id].aspectRatio;
        height = columnWidth / aspectRatio;
      } else {
        // Use provided height with normalization
        // Normalize height between 0.7 and 1.5 of baseHeight
        const normalizedFactor = 0.7 + ((child.height - minHeight) / heightRange) * 0.8;
        height = baseHeight * normalizedFactor * heightScaleFactor;
      }
      
      // Optional: Add some randomness or variation
      // height = height * (0.9 + Math.random() * 0.2);
      
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { 
        ...child, 
        x, 
        y, 
        w: columnWidth, 
        h: height,
        // Store original dimensions for reference
        originalHeight: child.height,
        originalWidth: child.width,
        aspectRatio: imageDimensions[child.id]?.aspectRatio
      };
    });

    // Calculate the MAX height required for the container
    const containerMaxHeight = Math.max(...colHeights);

    return { gridItems: mappedItems, containerHeight: containerMaxHeight };
  }, [columns, items, width, imageDimensions, baseHeight, heightScaleFactor, maintainAspectRatio]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    gridItems.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [gridItems, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, { scale: hoverScale, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full transition-all duration-500 ease-in-out"
      style={{ height: containerHeight > 0 ? containerHeight : '600px' }} 
    >
      {gridItems.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ 
            willChange: 'transform, width, height, opacity',
            // Optional: Add different border radius based on aspect ratio
            borderRadius: item.aspectRatio && item.aspectRatio > 1 ? '8px' : '12px'
          }}
          onClick={() => item.onClick && item.onClick()}
          onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-2xl uppercase text-[10px] leading-[10px] border border-slate-700 hover:border-purple-500 transition-colors overflow-hidden"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {/* Optional: Add gradient overlay based on height */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70`} />
            
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-[10px]">

            </div>

            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-purple-500/50 to-blue-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;