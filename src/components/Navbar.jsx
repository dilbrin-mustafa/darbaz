// Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, Download, Code } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = element.offsetTop - 64; // Subtract navbar height
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Skills', href: '#skills' },
    { name: 'Work Experiences', href: '#experiences' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Talks', href: '#talks' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact Me', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A192F]/90 backdrop-blur shadow-lg' : 'bg-[#0A192F]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#112240] border border-[#233554] group-hover:border-[#64FFDA] transition-colors">
                <Code className="w-5 h-5 text-[#64FFDA]" />
              </div>
              <span className="text-[#E6F1FF] font-mono text-lg">Darbaz.dev</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#8892B0] hover:text-[#64FFDA] px-2 py-2 text-sm font-mono transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="flex items-center gap-2 px-4 py-2 text-[#64FFDA] border border-[#64FFDA] rounded 
                               hover:bg-[#64FFDA]/10 transition-colors font-mono text-sm ml-4">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#64FFDA] hover:bg-[#112240] rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="absolute inset-0 bg-[#0A192F] opacity-95">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#8892B0] hover:text-[#64FFDA] text-lg font-mono transition-colors 
                           px-4 py-2 rounded-lg hover:bg-[#112240]/50"
                >
                  {item.name}
                </a>
              ))}
              <button className="mt-4 flex items-center gap-2 px-6 py-3 text-[#64FFDA] border border-[#64FFDA] 
                               rounded-lg hover:bg-[#64FFDA]/10 transition-colors font-mono">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;

































// import React from 'react';
// import { Code, Terminal, Github, Trophy, BookOpen, MessageSquare, FileText, Phone, Download } from 'lucide-react';

// const PortfolioPage = () => {
//   const navItems = [
//     { number: '01', name: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
//     { number: '02', name: 'Work Experiences', href: '#experiences', icon: <Terminal className="w-4 h-4" /> },
//     { number: '03', name: 'Open Source', href: '#opensource', icon: <Github className="w-4 h-4" /> },
//     { number: '04', name: 'Achievements', href: '#achievements', icon: <Trophy className="w-4 h-4" /> },
//     { number: '05', name: 'Blogs', href: '#blogs', icon: <BookOpen className="w-4 h-4" /> },
//     { number: '06', name: 'Talks', href: '#talks', icon: <MessageSquare className="w-4 h-4" /> },
//     { number: '07', name: 'Resume', href: '#resume', icon: <FileText className="w-4 h-4" /> },
//     { number: '08', name: 'Contact Me', href: '#contact', icon: <Phone className="w-4 h-4" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0A192F] text-[#8892B0]">
//       {/* Navigation Bar */}
//       <nav className="fixed w-full bg-[#0A192F] border-b border-[#233554] z-50">
//         <div className="flex items-center justify-between px-8 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-4">
//             <div className="bg-[#112240] px-3 py-2 border border-[#64FFDA] rounded-lg">
//               <span className="text-[#64FFDA] font-mono">&lt;/&gt;</span>
//             </div>
//             <div>
//               <div className="text-[#64FFDA] font-mono">Darbaz.dev</div>
//               <div className="text-[#8892B0] font-mono text-xs">v1.0.0</div>
//             </div>
//           </div>

//           {/* Navigation Items */}
//           <div className="flex items-center gap-6">
//             {navItems.map((item) => (
//               <a
//                 key={item.number}
//                 href={item.href}
//                 className="flex items-center gap-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors"
//               >
//                 <span className="text-[#64FFDA] font-mono text-sm opacity-70">{item.number}.</span>
//                 {item.icon}
//                 <span className="font-mono">{item.name}</span>
//               </a>
//             ))}
//             <button className="ml-4 px-4 py-2 border border-[#64FFDA] text-[#64FFDA] rounded font-mono 
//                            hover:bg-[#64FFDA]/10 transition-all duration-300 flex items-center gap-2">
//               <Download className="w-4 h-4" />
//               Resume.pdf
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-20">
//         {/* Terminal Window */}
//         <div className="max-w-6xl mx-auto p-8">
//           <div className="bg-[#112240] rounded-lg border border-[#233554] overflow-hidden">
//             {/* Terminal Header */}
//             <div className="bg-[#0A192F] px-4 py-2 border-b border-[#233554] flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               <span className="ml-4 font-mono text-sm text-[#8892B0]">portfolio.tsx</span>
//             </div>

//             {/* Terminal Content */}
//             <div className="p-6 font-mono">
//               <div className="text-[#64FFDA]">const Portfolio = () = {'{'}</div>
//               <div className="pl-4">
//                 <div className="text-[#E6F1FF]">return (</div>
//                 <div className="pl-4">
//                   <div className="text-[#8892B0]">{'//'} Your dream developer</div>
//                   <div className="text-[#E6F1FF]">&lt;Developer</div>
//                   <div className="pl-4">
//                     <div>name=<span className="text-[#64FFDA]">"Darbaz"</span></div>
//                     <div>role=<span className="text-[#64FFDA]">"Full Stack Engineer"</span></div>
//                     <div>passion=<span className="text-[#64FFDA]">"Building amazing web experiences"</span></div>
//                   </div>
//                   <div className="text-[#E6F1FF]">/&gt;</div>
//                 </div>
//                 <div className="text-[#E6F1FF]">)</div>
//               </div>
//               <div className="text-[#64FFDA]">{'}'}</div>
//             </div>
//           </div>
//         </div>

//         {/* Project Cards */}
//         <div className="max-w-6xl mx-auto p-8">
//           <div className="grid grid-cols-3 gap-6">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <div key={i} className="bg-[#112240] rounded-lg border border-[#233554] overflow-hidden group hover:border-[#64FFDA] transition-colors">
//                 <div className="p-6">
//                   <div className="text-[#64FFDA] font-mono text-sm mb-2">Featured Project</div>
//                   <h3 className="text-[#E6F1FF] text-xl font-semibold mb-4">Project Title</h3>
//                   <p className="text-[#8892B0] mb-4">A brief description of the project goes here. Highlighting the key features and technologies used.</p>
//                   <div className="flex gap-3 text-[#64FFDA] font-mono text-sm">
//                     <span>React</span>
//                     <span>Node.js</span>
//                     <span>TypeScript</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PortfolioPage;