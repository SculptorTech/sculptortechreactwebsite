import React, { useState } from 'react';
import {
  Monitor,
  Globe,
  Smartphone,
  CheckCircle,
  BarChart,
  ChevronRight,
  Phone,
} from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // 🔹 ADDED ONLY
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Website Design',
      description:
        "Designing unique and visually appealing websites tailored to the client's brand identity, target audience, and business goals. We ensure seamless user experiences across all devices.",
      icon: <Monitor size={22} />,
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Web Application Development',
      description:
        'Designing and developing websites using modern technologies and frameworks to create responsive, user-friendly, and visually appealing interfaces.',
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description:
        'Building native or cross-platform mobile applications for iOS, Android, or both, catering to various industries and specific business use cases.',
      icon: <Smartphone size={22} />,
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Software Testing',
      description:
        'Proficiency in testing methodologies, including unit testing, integration testing, and end-to-end testing, along with familiarity with frameworks like JUnit and Selenium.',
      icon: <CheckCircle size={22} />,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Business Analytics',
      description:
        'Developing data-driven solutions, dashboards, and analytics tools to help businesses gain valuable insights from their data and make data-driven decisions.',
      icon: <BarChart size={22} />,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Communication Interface',
      description:
        'Complete Voice, SMS, WhatsApp, OTP, IVR, call tracking, and real-time video communication API integration using platforms like Twilio, Exotel, Xclusive, and ZEGOCLOUD. Scalable, secure, and production-ready for startups, enterprises, and customer-centric applications.',
      icon: <Phone size={22} />,
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section
      id="services"
      className="
        py-1
        bg-slate-50 dark:bg-slate-950
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="
                  relative z-10 h-full p-6 rounded-2xl
                  bg-slate-700 text-white
                  dark:bg-white dark:text-slate-900
                  border border-transparent hover:border-cyan-700 
                  hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] 
                  transition-all duration-500
                  flex flex-col justify-between
                "
              >
                <div
                  className={`
                    absolute inset-0 rounded-2xl overflow-hidden
                    transition-opacity duration-700
                    ${hoveredCard === service.id ? 'opacity-40' : 'opacity-0'}
                  `}
                >
                  <div
                    className={`
                      absolute inset-0 bg-cover bg-center
                      transition-transform duration-1000
                      ${
                        hoveredCard === service.id
                          ? 'translate-x-0 scale-105'
                          : '-translate-x-full'
                      }
                    `}
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 dark:from-white/80 dark:to-white/60" />
                </div>

                <div className="relative z-20">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`
                        p-3 rounded-lg
                        transition-colors duration-300
                        ${
                          hoveredCard === service.id
                            ? 'bg-white text-green-400'
                            : 'bg-gradient-to-br from-cyan-600 to-green-100 text-white'
                        }
                      `}
                    >
                      {service.icon}
                    </div>

                    <h3
                      className={`
                        text-2xl font-bold transition-colors
                        ${
                          hoveredCard === service.id
                            ? 'text-blue-400 dark:text-blue-600'
                            : ''
                        }
                      `}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p
                    className={`
                      mb-4 leading-relaxed transition-colors
                      ${
                        hoveredCard === service.id
                          ? 'text-slate-200 dark:text-slate-700'
                          : 'text-slate-300 dark:text-slate-600'
                      }
                    `}
                  >
                    {service.description}
                  </p>

                  {/* 🔹 ADDED ONLY — Read More */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Read More <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div
                className="
                  absolute -inset-0.5 rounded-2xl blur
                  bg-gradient-to-r from-blue-600 to-purple-600
                  opacity-0 group-hover:opacity-40
                  transition
                  block dark:hidden
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 ADDED ONLY — Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-2xl text-slate-400 hover:text-red-500"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {selectedService.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
