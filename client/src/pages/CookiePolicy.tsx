import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

export default function CookiePolicy() {
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const resetLocalStorage = () => {
    // Clear all workshop progress data
    localStorage.removeItem("workshopProgress");
    localStorage.removeItem("workshopChecklist");
    localStorage.removeItem("workshopVisitedLinks");
    localStorage.removeItem("workshopCelebrationSeen");
    
    setResetComplete(true);
    
    // Close the dialog after 3 seconds
    setTimeout(() => {
      setIsResetDialogOpen(false);
      setResetComplete(false);
    }, 3000);
  };
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 2023</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, phone) when you visit a 
              website. Cookies are widely used to make websites work more efficiently and provide information to the 
              website owners.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Cookies</h2>
            <p>
              The AspiraSys Women's IT Workshop website uses local storage, which is similar to cookies but stored 
              directly in your browser, for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To save your workshop progress and completed tasks</li>
              <li>To remember your checklist status</li>
              <li>To track which resource links you have visited</li>
              <li>To provide a personalized workshop experience</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Types of Local Storage Data We Use</h2>
            <p>
              Our website uses the following local storage items:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li><strong>workshopProgress</strong>: Tracks which tasks you have completed</li>
              <li><strong>workshopChecklist</strong>: Remembers which checklist items you have checked</li>
              <li><strong>workshopVisitedLinks</strong>: Records which resource links you have visited</li>
              <li><strong>workshopCelebrationSeen</strong>: Tracks whether you've seen the completion celebration</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Cookies</h2>
            <p>
              The workshop tasks may direct you to third-party websites such as ChatGPT, Canva, Wix, and Netlify, 
              each of which may use their own cookies. We do not have control over these cookies. Please refer to the 
              respective cookie policies of these websites for more information.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Managing Cookies and Local Storage</h2>
            <p>
              You can control and manage cookies and local storage data in various ways:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                <strong>Browser Settings</strong>: You can manage cookie preferences through your browser settings. 
                Most browsers allow you to block or delete cookies.
              </li>
              <li>
                <strong>Clearing Local Storage</strong>: You can clear local storage by clearing your browser data. 
                This will reset your workshop progress.
              </li>
            </ul>
            <p>
              Please note that restricting cookies and local storage may impact the functionality of our workshop website, 
              as we use these technologies to track your progress and provide a personalized experience.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new 
              Cookie Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              <br />
              <a href="mailto:info@aspirasys.com" className="text-primary hover:underline">info@aspirasys.com</a>
            </p>
          </div>
          
          {/* Reset Workshop Progress Section */}
          <div className="mt-12 p-5 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">Reset Your Workshop Progress</h2>
            <p className="mb-4">
              If you'd like to clear all your saved workshop progress data from your device, you can use the button below. 
              This will reset all your completed tasks, checklists, and visited links.
            </p>
            <div className="flex justify-center mt-4">
              <Button 
                variant="destructive" 
                onClick={() => setIsResetDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset Workshop Progress</span>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Note: This action cannot be undone. Your progress will be permanently deleted.
            </p>
          </div>
        </div>
        
        {/* Reset Confirmation Dialog */}
        <AlertDialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{resetComplete ? "Progress Reset Complete" : "Reset Workshop Progress?"}</AlertDialogTitle>
              <AlertDialogDescription>
                {resetComplete ? (
                  <div className="text-center text-success">
                    <p className="mb-2">✅ All workshop progress has been reset successfully.</p>
                    <p>You can now start the workshop from the beginning.</p>
                  </div>
                ) : (
                  <div>
                    <p className="mb-3">This will clear all of your saved progress, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Completed workshop tasks</li>
                      <li>Checklist items</li>
                      <li>Visited resource links</li>
                    </ul>
                    <p className="mt-3 font-medium">Are you sure you want to reset all your progress?</p>
                  </div>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            
            {!resetComplete && (
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={resetLocalStorage}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  Yes, Reset Everything
                </AlertDialogAction>
              </AlertDialogFooter>
            )}
          </AlertDialogContent>
        </AlertDialog>
      </motion.div>
    </div>
  );
}