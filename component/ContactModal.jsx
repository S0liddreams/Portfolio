import React from "react";

const ContactModal = ({ isOpen, onClose, handleSubmit, formMsg }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-gray-800 shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-[#f59211] transition-colors"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>

        <div className="flex flex-wrap md:flex-nowrap">
          {/* Left Side: Direct Contact Info */}
          <div className="basis-full md:basis-[40%] bg-black/20 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">
              Let’s Start a <span className="text-[#f59211]">Project</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Ready to upgrade your digital presence? Tell me a bit about your
              business goals.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:soliddreamsdev@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center group-hover:bg-[#f59211] group-hover:text-black transition-all">
                  <i className="fas fa-paper-plane text-sm"></i>
                </div>
                <span className="text-gray-300 text-sm">
                  soliddreamsdev@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/2349017648449"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center group-hover:bg-[#f59211] group-hover:text-black transition-all">
                  <i className="fas fa-phone text-sm"></i>
                </div>
                <span className="text-gray-300 text-sm">+234 901 764 8449</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-5 mt-12">
              {[
                { name: "github", link: "https://github.com/S0liddreams" },
                {
                  name: "linkedin",
                  link: "https://www.linkedin.com/in/uche-daniel-ck/",
                },
                { name: "whatsapp", link: "https://wa.me/2349017648449" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-500 hover:text-[#f59211] transition-all"
                >
                  <i className={`fab fa-${social.name}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="basis-full md:basis-[60%] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs text-white uppercase tracking-widest text-gray-500 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full bg-[#262626] text-white border border-gray-700 focus:border-[#f59211] p-4 outline-none rounded-xl transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase text-white tracking-widest text-gray-500 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    className="w-full bg-[#262626] text-white border border-gray-700 focus:border-[#f59211] p-4 outline-none rounded-xl transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-white uppercase tracking-widest text-gray-500 font-bold">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your business or the solution you need..."
                  className="w-full bg-[#262626] text-white border border-gray-700 focus:border-[#f59211] p-4 outline-none rounded-xl transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f59211] hover:bg-orange-500 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Send Consultation Request
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </form>
            {formMsg && (
              <span className="text-[#f59211] mt-4 block text-center font-medium">
                {formMsg}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
