import React from 'react';
import angularLogo from '../assets/angular-material.png';
import bbc_logo from '../assets/bbc_logo2.jpg';
import Military from '../assets/logo.gif';
import saptadhanya from '../assets/saptadhanya.png';
import guideapp from '../assets/guideapp.png';


const Clients = () => {
  const clients = [
    {
      name: 'MG CAPITAL MAINTENANCE',
      logo: angularLogo,
      testimonial:
        'Exceptional service and innovative solutions that transformed our financial operations.',
      rating: 5,
    },
    {
      name: 'Bhadra Breeding Centre',
      logo: bbc_logo,
      testimonial:
        'Revolutionized our breeding processes with cutting-edge technology and expert guidance.',
      rating: 4,
    },
    {
      name: 'SaptaDhanya Food Product',
      logo: saptadhanya,
      testimonial:
        'Their expertise helped us expand to new markets with remarkable success.',
      rating: 5,
    },
    {
      name: 'Guide App',
      logo: guideapp,
      testimonial:
        'Guide App helps travelers discover verified tourist spots and connect securely with local guides for real-time help in Hindi or English.',
      rating: 4,
    },
    {
      name: 'Dr. B.B. Chavan Military School',
      logo: Military,
      testimonial:
        'Transformed our administrative systems, making operations seamless and efficient.',
      rating: 4,
    },
  ];

  const renderStars = (rating) => (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400' : 'text-slate-500 dark:text-slate-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      id="clients"
      className="
        py-6 overflow-hidden
        bg-slate-50 dark:bg-slate-950
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Esteemed Clients
          </h2>
           <div className="w-24 h-1 bg-cyan-500 mx-auto rounded" />
          <p className="text-slate-600 dark:text-slate-400  mt-2 max-w-2xl mx-auto">
            Trusted by reputed organizations across multiple domains
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee gap-7">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <div
                  className="
                    w-80 h-80 rounded-2xl p-6
                    flex flex-col
                    bg-slate-700 text-white
                    dark:bg-white dark:text-slate-900
                    border border-slate-800 dark:border-slate-200
                    shadow-xl dark:shadow-lg
                    transition-colors
                  "
                >
                  {/* Logo */}
                  <div
                    className="
                      h-20 w-full rounded-xl mb-6
                      bg-white dark:bg-slate-100
                      flex items-center justify-center p-3
                    "
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-center mb-3">
                    {client.name}
                  </h3>

                  <p
                    className="
                      text-sm text-center italic mb-4 line-clamp-4
                      text-slate-300 dark:text-slate-600
                    "
                  >
                    “{client.testimonial}”
                  </p>

                  {renderStars(client.rating)}

                  <div className="mt-auto text-xs text-center text-slate-400 dark:text-slate-500">
                    Verified Client
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
