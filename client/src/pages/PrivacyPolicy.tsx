import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="hover:bg-primary/5">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 2023</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
            <p>
              Welcome to the AspiraSys Women's IT Workshop website. We respect your privacy and are committed to protecting 
              your personal data. This privacy policy explains how we collect, use, and safeguard your information when 
              you visit our website and participate in our workshops.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p>
              When you use our website, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Name, email address, and contact details when you register for workshops</li>
              <li>Information about your progress in the workshop tasks</li>
              <li>Feedback and survey responses</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To provide and manage the workshop services</li>
              <li>To track and save your progress in workshop tasks</li>
              <li>To communicate with you about the workshop and related events</li>
              <li>To improve our website and workshop materials</li>
              <li>To analyze usage patterns and enhance user experience</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Data Storage and Security</h2>
            <p>
              Your workshop progress is stored locally on your device using browser localStorage. This data remains on your 
              device and is not transmitted to our servers. We implement appropriate security measures to protect any data 
              that is transmitted to our servers during registration or feedback submission.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Services</h2>
            <p>
              Our workshop refers to third-party websites and services such as ChatGPT, Canva, Wix, and Netlify. When you 
              use these services, their respective privacy policies apply. We encourage you to review the privacy policies 
              of these third-party services.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us at:
              <br />
              <a href="mailto:info@aspirasys.com" className="text-primary hover:underline">info@aspirasys.com</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}