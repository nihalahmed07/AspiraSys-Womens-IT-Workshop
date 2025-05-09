import { GradientText } from "@/components/ui/gradient-text";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/company/aspirasys",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      href: "https://www.instagram.com/aspirasysofficial/",
      label: "Instagram",
    },

    {
      icon: <Youtube className="h-4 w-4" />,
      href: "https://www.youtube.com/@aspirasys",
      label: "Youtube",
    },
  ];

  const footerLinks = [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div>
                <img
                  src="./assets/AspiraSys White logo.svg"
                  alt="Logo"
                  className="h-12"
                />
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-center md:text-left">
              "Shuruaat chhoti ho sakti hai, lekin sapne bade hone chahiye!"
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AspiraSys. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
