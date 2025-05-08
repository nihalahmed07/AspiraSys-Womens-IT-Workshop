import { useState, useEffect } from "react";
import { 
  Brain,
  PaintbrushVertical,
  Monitor,
  Code,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Overview() {
  const [progress, setProgress] = useState(0);
  const [taskStatus, setTaskStatus] = useState([false, false, false, false]);

  // Load initial task status from localStorage
  useEffect(() => {
    const loadProgressFromStorage = () => {
      const savedProgress = localStorage.getItem("workshopProgress");
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        setTaskStatus(parsedProgress);
        
        const completedCount = parsedProgress.filter(Boolean).length;
        setProgress((completedCount / 4) * 100);
      }
    };
    
    // Load progress when component mounts
    loadProgressFromStorage();
    
    // Set up event listener for storage changes from other components
    window.addEventListener('storage', loadProgressFromStorage);
    
    // Set up custom event listener for direct updates
    const handleProgressUpdate = () => loadProgressFromStorage();
    window.addEventListener('workshop-progress-update', handleProgressUpdate);
    
    return () => {
      window.removeEventListener('storage', loadProgressFromStorage);
      window.removeEventListener('workshop-progress-update', handleProgressUpdate);
    };
  }, []);

  return (
    <section id="overview" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This workshop will introduce you to key digital skills that can help start your IT journey 
            and build your online presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-2">AI-Assisted Writing</h3>
            <p className="text-gray-600">Learn to use ChatGPT to create professional content for your personal brand.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PaintbrushVertical className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Logo Design</h3>
            <p className="text-gray-600">Create your own professional logo using beginner-friendly design tools.</p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Website Building</h3>
            <p className="text-gray-600">Build your first portfolio website without writing a single line of code.</p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-success" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Optional Coding</h3>
            <p className="text-gray-600">Get introduced to web development through AI-assisted HTML coding.</p>
          </motion.div>
        </div>
        
        {/* Progress Tracker */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <Card className="border-2 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-xl mb-4 text-center">Your Challenge Progress</h3>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-medium text-primary font-bold">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3 bg-gray-200" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                  <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center border ${taskStatus[0] ? 'bg-success text-primary border-primary' : 'bg-gray-100 border-gray-300'}`}>
                    {taskStatus[0] ? <Check className="h-4 w-4" /> : <Brain className="h-4 w-4 text-gray-600" />}
                  </div>
                  <span className="text-center">Portfolio Content</span>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                  <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center border ${taskStatus[1] ? 'bg-success text-primary border-primary' : 'bg-gray-100 border-gray-300'}`}>
                    {taskStatus[1] ? <Check className="h-4 w-4" /> : <PaintbrushVertical className="h-4 w-4 text-gray-600" />}
                  </div>
                  <span className="text-center">Logo Design</span>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                  <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center border ${taskStatus[2] ? 'bg-success text-primary border-primary' : 'bg-gray-100 border-gray-300'}`}>
                    {taskStatus[2] ? <Check className="h-4 w-4" /> : <Monitor className="h-4 w-4 text-gray-600" />}
                  </div>
                  <span className="text-center">Website Build</span>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                  <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center border ${taskStatus[3] ? 'bg-success text-primary border-primary' : 'bg-gray-100 border-gray-300'}`}>
                    {taskStatus[3] ? <Check className="h-4 w-4" /> : <Code className="h-4 w-4 text-gray-600" />}
                  </div>
                  <span className="text-center">Optional Coding</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
