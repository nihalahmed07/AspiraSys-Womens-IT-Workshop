import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function TermsOfService() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 2023</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the AspiraSys Women's IT Workshop website, you agree to be bound by these Terms of 
              Service, all applicable laws and regulations, and agree that you are responsible for compliance with any 
              applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing 
              this site.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. Workshop Participation</h2>
            <p>
              The AspiraSys Women's IT Workshop is designed to introduce participants to digital skills and IT concepts. 
              Workshop participation is subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Participants are responsible for their own learning and progress</li>
              <li>Workshop materials are provided "as is" without warranties of any kind</li>
              <li>Participation in the workshop does not establish any employment or contractual relationship</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. Intellectual Property</h2>
            <p>
              The content on the AspiraSys Women's IT Workshop website, including text, graphics, logos, images, and 
              workshop materials, is the property of AspiraSys and is protected by copyright and other intellectual property 
              laws. You may use the workshop materials for personal, non-commercial purposes during and after the workshop.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. User Content</h2>
            <p>
              During the workshop, you may create content such as logos, portfolio text, and websites. You retain ownership 
              of this content. However, by sharing your creations with us, you grant us a non-exclusive, royalty-free 
              license to use, reproduce, and display your creations for promotional and educational purposes.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Third-Party Services</h2>
            <p>
              The workshop may require the use of third-party services such as ChatGPT, Canva, Wix, and Netlify. We are not 
              responsible for the content, privacy policies, or practices of these third-party sites. Use of these services 
              is subject to their respective terms of service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
            <p>
              AspiraSys shall not be liable for any direct, indirect, incidental, consequential, or special damages arising 
              out of or in any way connected with the use of the workshop website or participation in the workshop, whether 
              based on warranty, contract, tort, or any other legal theory.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold AspiraSys and its affiliates, officers, employees, and agents harmless from 
              any claim or demand, including reasonable attorneys' fees, arising out of your use of the workshop website 
              or participation in the workshop.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without 
              regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
            <p>
              AspiraSys reserves the right to modify or replace these Terms of Service at any time. It is your 
              responsibility to check these Terms periodically for changes.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:info@aspirasys.com" className="text-primary hover:underline">info@aspirasys.com</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}