import React from 'react';
import {
  Mail,
  MapPin,
  Users,
  Briefcase,
  Building2,
  Globe,
  CheckCircle2,
} from 'lucide-react';

const About = () => {
  const specialities = [
    'Web Design & Development',
    'Mobile App Development',
    'Communication API Solutions (Voice, SMS, Video)',
    'Social Media Marketing',
    'SEO Optimization',
    'Web Analytics',
  ];

  return (
    <section
      id="about"
      className="
        py-6 relative overflow-hidden
        bg-white dark:bg-slate-950
        transition-colors
      "
    >
      {/* Background decoration */}
      <div
        className="
          absolute top-0 right-0 w-1/3 h-full
          bg-slate-100 dark:bg-slate-900
          skew-x-12 translate-x-20
          opacity-50 dark:opacity-40
          z-0
        "
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE — IMAGE + INFO */}
          <div className="flex flex-col gap-10">
            {/* Image */}
            <div
              className="
                rounded-2xl overflow-hidden shadow-2xl
                border-8 border-white dark:border-slate-900
                w-full max-w-md mx-auto
              "
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team Collaboration"
                className="w-full object-cover max-h-[420px]"
              />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-6 max-w-md mx-auto">
              <InfoItem icon={<Briefcase size={21} />} title="Industry" value="IT Services & Consulting" />
              <InfoItem icon={<Users size={21} />} title="Company Size" value="15–30 Employees" />
              <InfoItem icon={<MapPin size={21} />} title="Headquarters" value="Pune, Maharashtra" />
              <InfoItem icon={<Building2 size={21} />} title="Type" value="Private Limited" />
              <InfoItem icon={<Mail size={21} />} title="Email" value="sculptortechpvtltd@gmail.com" />
              <InfoItem icon={<Globe size={21} />} title="Freelance" value="Available for Hire" />
            </div>
          </div>

          {/* RIGHT SIDE — TEXT */}
          <div>
            {/* Badge */}
            <div
              className="
                inline-block px-4 py-2 mb-4 rounded-full text-sm font-bold
                bg-cyan-700
                text-white
              "
            >
              Who We Are
            </div>

            <h2
              className="
                text-4xl md:text-5xl font-bold mb-4 leading-tight
                text-slate-900 dark:text-white
              "
            >
              Empowering SMEs with{' '}
              <span className="text-cyan-700">
                Smart Tech
              </span>{' '}
              Solutions.
            </h2>

            {/* Divider */}
            <div className="w-20 h-1 bg-cyan-60 rounded mb-6" />

            <p className="text-lg mb-8 leading-relaxed text-slate-700 dark:text-slate-400">
              SculptorTech Pvt Ltd helps Small and Medium Enterprises achieve
              their revenue goals by providing cutting-edge technology and
              business solutions. We don&apos;t just build software; we build
              the engine for your growth.
            </p>

            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-400 dark:text-slate-500">
              Our Specialities
            </h3>

            <div className="flex flex-wrap gap-3">
              {specialities.map((item, index) => (
                <span
                  key={index}
                  className="
                    flex items-center px-4 py-2 rounded-lg text-sm font-medium
                    bg-white border border-slate-200 text-slate-700
                    shadow-sm
                    hover:border-cyan-700
                    dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300
                    transition-colors
                  "
                >
                  <CheckCircle2 size={16} className="text-cyan-700 mr-2" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, value }) => (
  <div className="flex items-start">
    <div
      className="
        p-3 rounded-lg mr-4
        bg-cyan-700
        text-white
      "
    >
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
        {value}
      </p>
    </div>
  </div>
);

export default About;