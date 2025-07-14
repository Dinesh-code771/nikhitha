import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Mobile",
      value: "9392167051",
      href: "tel:9392167051",
      color: "blue",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nikhitha.koradala@gmail.com",
      href: "mailto:nikhitha.koradala@gmail.com",
      color: "amber",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-800 text-white"
      style={{
        background:
          "linear-gradient(135deg, rgb(51, 65, 85), rgb(59, 136, 252))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-blue-300">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Ready to bring your vision to life? Let's discuss your next project
            and create something beautiful together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-300">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 ${
                        item.color === "blue"
                          ? ""
                          : item.color === "amber"
                          ? "bg-amber-500"
                          : "bg-pink-500"
                      }`}
                      style={
                        item.color === "blue"
                          ? { backgroundColor: "rgb(59, 136, 252)" }
                          : {}
                      }
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-300">{item.label}</p>
                      <p className="text-white group-hover:text-blue-300 transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-blue-300 mr-2" />
                <span className="font-medium text-blue-300">Based in</span>
              </div>
              <p className="text-white">Nehru Nagar, Suryapet</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Ready to Start?
            </h3>

            <div className="text-center mb-8">
              <p className="text-slate-300 mb-6">
                Whether you're planning a new project or looking to collaborate,
                I'd love to hear from you. Let's create spaces that inspire and
                endure.
              </p>
            </div>

            {/* Services */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-blue-300 mb-2">
                  Interior Design
                </h4>
                <p className="text-sm text-slate-300">Luxury villa interiors</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-amber-400 mb-2">
                  Space Planning
                </h4>
                <p className="text-sm text-slate-300">Optimized layouts</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-rose-400 mb-2">
                  3D Visualization
                </h4>
                <p className="text-sm text-slate-300">Realistic renderings</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">
                  Consultation
                </h4>
                <p className="text-sm text-slate-300">Design guidance</p>
              </div>
            </div>

            <div className="text-center">
              <button
                className="inline-flex items-center px-8 py-4 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ backgroundColor: "rgb(59, 136, 252)" }}
              >
                <Send className="w-5 h-5 mr-2" />
                <span className="font-medium">Start a Conversation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-slate-400">
            © 2024 Nikhitha Koradala. Designing thoughtful spaces with passion
            and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
