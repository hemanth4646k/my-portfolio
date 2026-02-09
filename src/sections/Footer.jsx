import { Github, Linkedin, Mail, FileText, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/hemanth4646k",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hemanthsaisomaraju/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hemanthsaisomaraju@gmail.com",
    },
    {
      name: "Resume",
      icon: FileText,
      href: "https://drive.google.com/file/d/1zaPDwFoppydcov1KCZ7RE9s-O0Q6hcrj/view?usp=drive_link",
    },
    {
      name: "Phone",
      icon: Phone,
      href: "tel:9553196047",
    },
  ];

  return (
    <footer className="w-full py-10 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-md text-white pointer-events-auto">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-6">
        {/* Icons & Labels */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/20 transition-all duration-300 group"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hemanth Sai Somaraju. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
