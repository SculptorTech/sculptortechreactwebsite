import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoS from '../assets/logo (3) (1).png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
    { name: 'Gallery', href: '#gallery' },
  ];

  /* -------------------- CLICK HANDLER -------------------- */
  const handleLinkClick = (e, href, name) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveLink(name);

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  /* -------------------- SCROLL SPY -------------------- */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            const active = navLinks.find(
              (link) => link.href === `#${id}`
            );

            if (active) {
              setActiveLink(active.name);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
        fixed w-full z-50 h-20
        bg-white/90 dark:bg-slate-950/90
        backdrop-blur-md
        border-b border-slate-200 dark:border-slate-800
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => handleLinkClick(e, '#home', 'Home')}
        >
          <img src={logoS} alt="S" className="h-10 w-auto" />
          <span className="ml-1 text-3xl font-bold relative top-1 text-slate-900 dark:text-white">
  culptor
  <span
    className="text-cyan-700"
    style={{ textShadow: '0 1px 1px rgba(12, 34, 35, 0.89)' }}
  >
    Tech
  </span>
</span>

         

</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.name)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeLink === link.name
                    ? 'text-cyan-700 bg-cyan-50 dark:bg-cyan-950'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }
              `}
            >
              {link.name}
            </a>
          ))}

          {/* Desktop Theme Toggle - Enhanced */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="
              ml-2 p-2 rounded-lg
              text-slate-700 dark:text-slate-300
              hover:bg-slate-100 dark:hover:bg-slate-800
              hover:shadow-lg
              transition-all duration-300
              group
              relative
              overflow-hidden
            "
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {/* Background Animation */}
            <div className="
              absolute inset-0 
              bg-gradient-to-r from-cyan-100 to-green-100 
              dark:from-cyan-900/20 dark:to-green-900/20
              opacity-0 
              group-hover:opacity-100
              transition-opacity duration-300
            " />
            
            {/* Icons with Animation */}
            <div className="relative flex items-center justify-center">
              <Sun 
                size={18} 
                className={`
                  transition-all duration-500
                  ${theme === 'dark' 
                    ? 'rotate-0 scale-100 opacity-100 text-cyan-400' 
                    : 'rotate-90 scale-0 opacity-0'
                  }
                `} 
              />
              <Moon 
                size={18} 
                className={`
                  absolute transition-all duration-500
                  ${theme === 'dark' 
                    ? '-rotate-90 scale-0 opacity-0' 
                    : 'rotate-0 scale-100 opacity-100 text-cyan-700'
                  }
                `} 
              />
            </div>
            
            {/* Tooltip */}
            <div className="
              absolute -bottom-8 left-1/2 transform -translate-x-1/2
              px-2 py-1 bg-slate-900 dark:bg-slate-700 
              text-white text-xs rounded
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              whitespace-nowrap
              pointer-events-none
            ">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </div>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle - Enhanced */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="
              p-2 rounded-lg
              text-cyan-700 dark:text-cyan-300
              hover:bg-slate-100 dark:hover:bg-slate-800
              hover:shadow-lg
              transition-all duration-300
              group
              relative
              overflow-hidden
            "
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {/* Background Animation */}
            <div className="
              absolute inset-0 
              bg-gradient-to-r from-cyan-100 to-green-100 
              dark:from-cyan-900/20 dark:to-green-900/20
              opacity-0 
              group-hover:opacity-100
              transition-opacity duration-300
            " />
            
            {/* Icons with Animation */}
            <div className="relative flex items-center justify-center">
              <Sun 
                size={18} 
                className={`
                  transition-all duration-500
                  ${theme === 'dark' 
                    ? 'rotate-0 scale-100 opacity-100 text-cyan-400' 
                    : 'rotate-90 scale-0 opacity-0'
                  }
                `} 
              />
              <Moon 
                size={18} 
                className={`
                  absolute transition-all duration-500
                  ${theme === 'dark' 
                    ? '-rotate-90 scale-0 opacity-0' 
                    : 'rotate-0 scale-100 opacity-100 text-cyan-700'
                  }
                `} 
              />
            </div>
            
            {/* Tooltip for mobile */}
            <div className="
              absolute -bottom-8 left-1/2 transform -translate-x-1/2
              px-2 py-1 bg-slate-900 dark:bg-slate-700 
              text-white text-xs rounded
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              whitespace-nowrap
              pointer-events-none
              hidden sm:block
            ">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </div>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.name)}
              className={`
                block px-6 py-3 text-sm transition-colors
                ${
                  activeLink === link.name
                    ? 'text-cyan-700 bg-cyan-50 dark:bg-cyan-950'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;