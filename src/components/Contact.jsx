import React, { useRef } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const glowClass =
    'transition-all duration-300 border border-transparent hover:border-cyan-700 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] transition-all';

  // Use ref for form to access form data
  const formRef = useRef(null);

  // Form handler
const handleSubmit = (e) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
.sendForm(
        'service_7mcwl93',     // EmailJS Service ID
        'template_yiyb6ke',    // EmailJS Template ID
        formRef.current,
        'oqSqL_LjWr_Yk5vR9'      // EmailJS Public Key
      )
    .then(
      () => {
        alert('Message sent successfully');
        formRef.current.reset();
      },
      (error) => {
        console.error(error);
        alert('Failed to send message');
      }
    );
};


  return (
    <section
      id="contact"
      className="
        py-5
        bg-slate-50 dark:bg-slate-950
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch
            </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded" />
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help your
            business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid gap-4">
              {/* Location */}
              <div
                className={`
                  flex items-start p-5 rounded-xl
                  bg-slate-700 text-white
                  dark:bg-white dark:text-slate-900
                  shadow-xl dark:shadow-lg
                  ${glowClass}
                `}
              >
                <div className="p-3 bg-cyan-600/20 text-cyan-400 dark:bg-cyan-100 dark:text-cyan-600 rounded-lg mr-4">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Our Location</h3>
                  <p className="text-xs text-slate-300 dark:text-slate-600 leading-relaxed">
                    C-1006, Green City, Satav Nagar, Handewadi Road,
                    <br />
                    Hadapsar, Pune-411028
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className={`
                  flex items-start p-5 rounded-xl
                  bg-slate-700 text-white
                  dark:bg-white dark:text-slate-900
                  shadow-xl dark:shadow-lg
                  ${glowClass}
                `}
              >
                <div className="p-3 bg-cyan-600/20 text-cyan-400 dark:bg-cyan-100 dark:text-cyan-600 rounded-lg mr-4">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Email Us</h3>
                  <p className="text-xs text-slate-300 dark:text-slate-600">
                    contact@sculptortechpvtltd.com | sculptortechpvtltd@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className={`
                  flex items-start p-5 rounded-xl
                  bg-slate-700 text-white
                  dark:bg-white dark:text-slate-900
                  shadow-xl dark:shadow-lg
                  ${glowClass}
                `}
              >
                <div className="p-3 bg-cyan-600/20 text-cyan-400 dark:bg-cyan-100 dark:text-cyan-600 rounded-lg mr-4">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Call Us</h3>
                  <p className="text-xs text-slate-300 dark:text-slate-600">
                    +91 8623034275 | +91 8668584275
                  </p>
                </div>
              </div>
            </div>

            {/* MAP – FIXED (INVERTED LIKE OTHER BOXES) */}
            <div
              className={`
                h-60 w-full rounded-xl overflow-hidden
                bg-slate-700 dark:bg-white
                border border-slate-800 dark:border-slate-200
                shadow-xl dark:shadow-lg
                ${glowClass}
              `}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.068994770335!2d73.93172637503714!3d18.471694982613143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea7c7a7a7a7b%3A0x7a7a7a7a7a7a7a7a!2sGreen%20City%2C%20Handewadi%20Rd%2C%20Satav%20Nagar%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1703698765432!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* RIGHT COLUMN – FORM */}
          <div
            className={`
              rounded-2xl p-6 lg:p-8
              bg-slate-700 text-white
              dark:bg-white dark:text-slate-900
              shadow-xl dark:shadow-lg
              ${glowClass}
              flex flex-col
            `}
          >
            <h3 className="text-xl font-bold mb-4">Send us a Message</h3>

            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-4 flex-1 flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Your Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="
                      w-full px-3 py-2 rounded-lg text-sm
                      bg-slate-800 text-white
                      dark:bg-slate-100 dark:text-slate-900
                      border border-slate-700 dark:border-slate-300
                      focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
                      outline-none transition-all
                    "
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="
                      w-full px-3 py-2 rounded-lg text-sm
                      bg-slate-800 text-white
                      dark:bg-slate-100 dark:text-slate-900
                      border border-slate-700 dark:border-slate-300
                      focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
                      outline-none transition-all
                    "
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="
                    w-full px-3 py-2 rounded-lg text-sm
                    bg-slate-800 text-white
                    dark:bg-slate-100 dark:text-slate-900
                    border border-slate-700 dark:border-slate-300
                    focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
                    outline-none transition-all
                  "
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="
                    w-full px-3 py-2 rounded-lg text-sm
                    bg-slate-800 text-white
                    dark:bg-slate-100 dark:text-slate-900
                    border border-slate-700 dark:border-slate-300
                    focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
                    outline-none transition-all
                  "
                />
              </div>

              <div className="space-y-1 flex-1 flex flex-col">
                <label className="text-xs font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  className="
                    w-full px-3 py-2 rounded-lg text-sm resize-none flex-1
                    bg-slate-800 text-white
                    dark:bg-slate-100 dark:text-slate-900
                    border border-slate-700 dark:border-slate-300
                    focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
                    outline-none transition-all
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full py-3 rounded-lg font-bold text-sm
                  bg-cyan-700 hover:bg-cyan-700
                  text-white transition-all
                  flex items-center justify-center gap-2
                  shadow-lg hover:shadow-cyan-500/30
                  mt-auto
                "
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;