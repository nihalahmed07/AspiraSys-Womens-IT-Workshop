import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div>
          
            <img src="./assets/AspiraSys Black logo.svg"
              alt="Logo"
              className="h-14"/>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#overview"
                className="font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#tasks"
                className="font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Challenges
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white px-4 py-3 shadow-inner"
        >
          <ul className="space-y-3">
            <li>
              <a
                href="#overview"
                className="block font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#tasks"
                className="block font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Challenges
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="block font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
