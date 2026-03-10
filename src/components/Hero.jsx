import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative pt-16 pb-8 overflow-hidden
        bg-white dark:bg-slate-600
        transition-colors
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
          alt="Modern Office"
          className="
            w-full h-full object-cover
            opacity-90 dark:opacity-30
          "
        />

        {/* Enhanced Overlay for Better Text Readability */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white/90 via-white/70 to-white/30
            dark:from-black/70 dark:via-black/50 dark:to-black/30
          "
        />
        
        {/* Additional gradient for light theme text contrast */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/20 via-transparent to-transparent
            dark:hidden
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[90vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1
            className="
              text-5xl md:text-6xl font-bold mb-6 leading-tight
              text-black dark:text-white
              drop-shadow-sm
            "
          >
            Sculpting Your{' '}
            <span className="text-cyan-700 dark:text-cyan-700">
              Digital Future
            </span>
          </h1>

          <p
            className="
              text-xl mb-8 leading-relaxed
              text-gray-800 dark:text-gray-300
              drop-shadow-sm
            "
          >
            We transform complex business challenges into elegant digital
            solutions. From web development to business analytics, we build the
            infrastructure for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="
                px-6 py-2 rounded-lg font-semibold text-lg
                bg-cyan-700 hover:bg-cyan-700
                text-white transition-all duration-300
                flex items-center justify-center
                shadow-lg hover:shadow-xl
                transform hover:-translate-y-0.5
              "
            >
              Get Started
              <ArrowRight className="ml-2" size={15} />
            </a>

            <a
              href="#services"
              className="
                px-6 py-2 rounded-lg font-semibold text-lg text-center
                bg-white/90 hover:bg-white
                text-gray-800 border border-gray-200
                dark:bg-slate-800/90 dark:hover:bg-slate-700
                dark:text-white dark:border-slate-700
                transition-all duration-300
                shadow-lg hover:shadow-xl
                transform hover:-translate-y-0.5
                backdrop-blur-sm
              "
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;