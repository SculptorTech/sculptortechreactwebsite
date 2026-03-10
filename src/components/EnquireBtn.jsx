import React from 'react';
import { MessageSquareText } from 'lucide-react';

const EnquireBtn = () => {
  return (
    <a
      href="#contact" // Scrolls down to your Contact section
      className="fixed top-1/2 right-0 z-50 -translate-y-1/2 group"
      aria-label="Enquire Now"
    >
      {/* The Button Container - styled to look like the purple glow reference */}
      <div className="
        flex flex-col items-center justify-center
        bg-gradient-to-br from-cyan-700 to-cyan-700
        text-white
        py-5 px-2
        rounded-l-[20px] /* Rounded only on the left side */
        shadow-[0_0_12px_rgba(6,182,212,0.45)]
hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]

 /* Intense glow on hover */
        hover:pr-4 /* Subtle nudge out on hover */
        transition-all duration-300 ease-in-out
        cursor-pointer
      ">
        {/* Icon */}
        <MessageSquareText size={17} className="mb-2 text-cyan-100 group-hover:text-white transition-colors" />

        {/* Vertical Text */}
        {/* writing-vertical-rl + rotate-180 makes text read bottom-to-top */}
        <span className="writing-vertical-rl rotate-180 font-bold tracking-widest text-xs uppercase whitespace-nowrap">
          Enquire Now
        </span>
      </div>
    </a>
  );
};

// We need a tiny bit of custom CSS for the vertical text support if it's not in your Tailwind config.
// You can add this to your index.css, or I can wrap it in a style tag here.
// Let's add it via an inline style tag for simplicity right now.
const GeneratedStyles = () => (
  <style>{`
    .writing-vertical-rl {
      writing-mode: vertical-rl;
    }
  `}</style>
);

// Exporting the button with the styles included
const EnquireBtnWithStyles = () => (
  <>
    <GeneratedStyles />
    <EnquireBtn />
  </>
);

export default EnquireBtnWithStyles;