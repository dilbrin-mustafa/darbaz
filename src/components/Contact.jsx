import React, { useState } from 'react';
import { Phone, Mail, Send, Github, Linkedin, Facebook, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/darbazrasul", color: "hover:bg-gray-800" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/darbaz-rasull-19375a252/", color: "hover:bg-blue-600" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/186GjKNPqr/?mibextid=wwXIfr", color: "hover:bg-blue-800" }
  ];

  return (
    <section className="py-20 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-[#E6F1FF] mb-4">Contact Me</h2>
              <p className="text-xl text-[#8892B0]">
                Let's discuss your project or just say hello!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#8892B0] group">
                <div className="p-3 bg-[#112240] rounded-xl group-hover:text-[#64FFDA] transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[#64FFDA] font-mono text-sm">Phone</p>
                  <p className="text-[#E6F1FF]">+9647517664743</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#8892B0] group">
                <div className="p-3 bg-[#112240] rounded-xl group-hover:text-[#64FFDA] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[#64FFDA] font-mono text-sm">Email</p>
                  <p className="text-[#E6F1FF]">darbazrasul721@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-[#8892B0] mb-4">Follow me on social media:</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-[#112240] rounded-xl text-[#8892B0] transition-all duration-300 
                              hover:text-white hover:transform hover:scale-110 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1">
            <div className="bg-[#112240] p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-[#64FFDA] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0A192F] rounded-lg border border-[#233554] 
                             text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-[#64FFDA] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#0A192F] rounded-lg border border-[#233554] 
                             text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-[#64FFDA] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0A192F] rounded-lg border border-[#233554] 
                             text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition-colors"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-transparent border border-[#64FFDA] text-[#64FFDA] 
                           rounded-lg font-mono hover:bg-[#64FFDA]/10 transition-colors duration-300 
                           flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="text-center mt-20 text-[#8892B0] font-mono text-sm">
          <p>
            Made with{' '}
            <span className="text-red-500 animate-pulse">❤</span>
            {' '}by Darbaz
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;