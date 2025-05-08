import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  CheckSquare,
  Square,
  ExternalLink,
  Check,
  Award,
  Share2,
  Download,
  X,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ConfettiGenerator from "confetti-js";
import { WORKSHOP_TASKS, FINAL_CHECKLIST } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

export function ChallengeTasks() {
  const { toast } = useToast();
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    content: false,
    logo: false,
    website: false,
    netlify: false,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number | null>(null);
  const [visitedTaskLinks, setVisitedTaskLinks] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [showCelebration, setShowCelebration] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<any>(null);

  // Load saved state from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("workshopProgress");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setCompletedTasks(parsedTasks);

      // Update checklist based on completedTasks
      const updatedChecklist = { ...checklist };

      // Task 1 maps to checklist item "portfolio"
      if (parsedTasks[0]) {
        updatedChecklist["portfolio"] = true;
      }

      // Task 2 maps to checklist item "logo"
      if (parsedTasks[1]) {
        updatedChecklist["logo"] = true;
      }

      // Task 3 maps to checklist item "website"
      if (parsedTasks[2]) {
        updatedChecklist["website"] = true;
      }

      // Task 4 maps to checklist item "optional"
      if (parsedTasks[3]) {
        updatedChecklist["optional"] = true;
      }

      // Save and update the checklist state
      setChecklist(updatedChecklist);
      localStorage.setItem(
        "workshopChecklist",
        JSON.stringify(updatedChecklist),
      );
    } else {
      // Only load checklist from localStorage if we don't have task progress
      const savedChecklist = localStorage.getItem("workshopChecklist");
      if (savedChecklist) {
        setChecklist(JSON.parse(savedChecklist));
      }
    }

    const savedVisitedLinks = localStorage.getItem("workshopVisitedLinks");
    if (savedVisitedLinks) {
      setVisitedTaskLinks(JSON.parse(savedVisitedLinks));
    }
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("workshopProgress", JSON.stringify(completedTasks));

    // Synchronize checklist with completedTasks
    const updatedChecklist = { ...checklist };

    // Task 1 maps to checklist item "portfolio"
    if (completedTasks[0]) {
      updatedChecklist["portfolio"] = true;
    }

    // Task 2 maps to checklist item "logo"
    if (completedTasks[1]) {
      updatedChecklist["logo"] = true;
    }

    // Task 3 maps to checklist item "website"
    if (completedTasks[2]) {
      updatedChecklist["website"] = true;
    }

    // Task 4 maps to checklist item "optional"
    if (completedTasks[3]) {
      updatedChecklist["optional"] = true;
    }

    // Update checklist state
    setChecklist(updatedChecklist);

    // Check if all required tasks are complete (first 3 tasks)
    const requiredTasksComplete = completedTasks
      .slice(0, 3)
      .every((task) => task);

    // If all required tasks are complete, show celebration
    if (requiredTasksComplete && !showCelebration) {
      // To prevent showing on every render when tasks are complete
      const hasSeenCelebration = localStorage.getItem(
        "workshopCelebrationSeen",
      );
      if (!hasSeenCelebration) {
        setShowCelebration(true);
        localStorage.setItem("workshopCelebrationSeen", "true");
      }
    }
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem("workshopChecklist", JSON.stringify(checklist));
  }, [checklist]);

  useEffect(() => {
    localStorage.setItem(
      "workshopVisitedLinks",
      JSON.stringify(visitedTaskLinks),
    );
  }, [visitedTaskLinks]);

  // Initialize confetti when celebration dialog is shown
  useEffect(() => {
    if (showCelebration && canvasRef.current) {
      const confettiSettings = {
        target: canvasRef.current,
        max: 200,
        size: 1.5,
        animate: true,
        props: ["circle", "square", "triangle", "line"],
        colors: [
          [165, 104, 246],
          [230, 61, 135],
          [0, 199, 228],
          [253, 214, 126],
        ],
        clock: 25,
        start_from_edge: true,
        respawn: true,
      };

      confettiRef.current = new ConfettiGenerator(confettiSettings);
      confettiRef.current.render();

      return () => {
        if (confettiRef.current) {
          confettiRef.current.clear();
        }
      };
    }
  }, [showCelebration]);

  const shareAchievement = (platform: string) => {
    const text =
      "I've completed the AspiraSys Women's IT Workshop and taken my first steps into the world of IT! 💻 #AspiraSysWorkshop #WomenInTech";

    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent("AspiraSys Women's IT Workshop")}&summary=${encodeURIComponent(text)}`;
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  const downloadBadge = () => {
    // This is a placeholder - in a real implementation, you would provide a link to download
    // an actual badge image file. For now, we're just alerting.
    alert(
      "Badge download functionality would be implemented here in a production environment.",
    );
  };

  const openCompletionDialog = (taskIndex: number) => {
    // If already completed, don't allow unchecking
    if (completedTasks[taskIndex]) {
      return;
    }

    setCurrentTaskIndex(taskIndex);
    setIsDialogOpen(true);
  };

  const confirmTaskCompletion = () => {
    if (currentTaskIndex !== null) {
      const updatedTasks = [...completedTasks];
      updatedTasks[currentTaskIndex] = true;
      setCompletedTasks(updatedTasks);

      // Save to localStorage
      localStorage.setItem("workshopProgress", JSON.stringify(updatedTasks));

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("workshop-progress-update"));

      // Close dialog and reset current task
      setIsDialogOpen(false);
      setCurrentTaskIndex(null);
    }
  };

  const markTaskLinkVisited = (taskIndex: number) => {
    const updatedVisitedLinks = [...visitedTaskLinks];
    updatedVisitedLinks[taskIndex] = true;
    setVisitedTaskLinks(updatedVisitedLinks);
  };

  const toggleChecklistItem = (itemId: string) => {
    setChecklist((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "accent":
        return "bg-accent";
      case "success":
        return "bg-success";
      case "gray":
        return "bg-gray-700";
      default:
        return "bg-primary";
    }
  };

  const getCompletionButtonClass = (taskIndex: number) => {
    if (completedTasks[taskIndex]) {
      return "bg-[green]/100 text-white";
    }
    return "bg-primary/10 text-primary hover:bg-primary/20";
  };

  return (
    <section id="tasks" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Confirmation Dialog */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Mark Task as Complete</AlertDialogTitle>
              <AlertDialogDescription>
                Have you finished all the steps for this task? Once marked as
                complete, it cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-300 text-gray-900 hover:bg-red-500">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmTaskCompletion}
                className="bg-green-300 text-black-900 hover:bg-success/90 hover:bg-green-500 border border-success"
              >
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Celebration Dialog */}
        <Dialog open={showCelebration} onOpenChange={setShowCelebration}>
          <DialogContent className="w-[90%] max-w-md overflow-y-auto max-h-[90vh]">
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold text-center text-primary flex flex-wrap items-center justify-center gap-2">
                <Award className="h-5 w-5 md:h-6 md:w-6" />
                <span>Congratulations!</span>
                <Award className="h-5 w-5 md:h-6 md:w-6" />
              </DialogTitle>
              <DialogDescription className="text-center text-base md:text-lg py-2">
                You've completed the Women's IT Workshop! 🎉
              </DialogDescription>
            </DialogHeader>

            <div className="bg-primary/5 p-3 md:p-5 rounded-lg border border-primary/20 my-3 md:my-4">
              <p className="text-center text-sm md:text-base font-medium mb-3 md:mb-4">
                You've taken your first steps into the world of IT and digital
                design. Be proud of what you've accomplished!
              </p>

              <div className="bg-white rounded-lg p-3 md:p-4 border-2 border-success shadow-md mb-3 md:mb-4">
                <div className="text-center py-2 md:py-4">
                  <span className="text-lg md:text-xl font-bold text-primary">
                    Women's IT Workshop
                  </span>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                    Presented by AspiraSys
                  </p>
                  <div className="my-2 md:my-3 flex justify-center">
                    <div className="relative w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 md:h-12 md:w-12 text-white" />
                    </div>
                  </div>
                  <p className="font-medium text-success">
                    Achievement Unlocked!
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Digital Skills Pioneer
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <p className="text-xs md:text-sm text-center text-gray-600 font-medium">
                  Share your achievement:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => shareAchievement("linkedin")}
                    className="flex items-center gap-1 text-xs md:text-sm px-2 py-1 h-auto"
                    size="sm"
                  >
                    <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => shareAchievement("whatsapp")}
                    className="flex items-center gap-1 text-xs md:text-sm px-2 py-1 h-auto"
                    size="sm"
                  >
                    <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                    <span>WhatsApp</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={downloadBadge}
                    className="flex items-center gap-1 text-xs md:text-sm px-2 py-1 h-auto"
                    size="sm"
                  >
                    <Download className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Download Badge</span>
                  </Button>
                </div>
              </div>
            </div>

            <DialogFooter className="justify-center mt-2">
              <DialogClose asChild>
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-sm md:text-base"
                >
                  Continue My Journey
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Challenge Tasks
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete these four tasks to begin your basic digital journey. Each
            task builds your skills step by step.
          </p>
        </motion.div>

        {/* Tasks */}
        {WORKSHOP_TASKS.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="max-w-4xl mx-auto mb-10 transition-all duration-300 group"
          >
            <Card
              className={`overflow-hidden shadow-sm hover:shadow-md ${completedTasks[index] ? "border-2 border-success" : ""}`}
            >
              <CardHeader
                className={`${getColorClass(task.color)} text-white px-6 py-4 flex justify-between items-center`}
              >
                <h3 className="font-semibold text-xl">{task.title}</h3>
                {completedTasks[index] && (
                  <span className="bg-[green]/70 flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full text-success border-2 border-success shadow-sm">
                    <Check className="h-4 w-4" />
                    <span>Completed</span>
                  </span>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="font-medium">
                    Goal:{" "}
                    {task.id === 1
                      ? 'Use AI to write your "About Me," "Skills," and career goals in simple language.'
                      : task.id === 2
                        ? "Make a logo that shows your name, personality, or future goals."
                        : task.id === 3
                          ? "Build a no-code website using your portfolio content and logo."
                          : task.id === 4
                            ? "If you finish early or want to explore more, try this optional task."
                            : ""}
                  </p>

                  {task.id !== 4 && (
                    <div className="flex items-start mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="mr-2 mt-0.5 text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="1" x2="12" y2="5"></line>
                          <path d="M19.07 6.43c1.88 2.92 1.46 6.78-1.08 9.04a6.86 6.86 0 0 1-8.3.65"></path>
                          <line x1="12" y1="23" x2="12" y2="19"></line>
                          <line
                            x1="4.93"
                            y1="17.57"
                            x2="7.76"
                            y2="14.24"
                          ></line>
                          <path d="M4.93 6.43c-1.88 2.92-1.46 6.78 1.08 9.04"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </div>
                      <p className="text-sm text-yellow-800">
                        {task.id === 1
                          ? "Tip: Don't worry about perfection! Use simple words to describe yourself and your skills - focus on clarity over complexity."
                          : task.id === 2
                            ? "Tip: Your logo doesn't need to be complicated - even your initials with a symbol or in your favorite color can make a great personal brand."
                            : task.id === 3
                              ? "Tip: Start with a template that matches your style and customize it with your content - no coding needed!"
                              : ""}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-lg mb-3">Steps:</h4>
                  <ol className="space-y-4 list-decimal pl-5">
                    {task.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>
                        <p
                          className="text-gray-800"
                          dangerouslySetInnerHTML={{ __html: step }}
                        />
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    onClick={() => openCompletionDialog(index)}
                    variant="outline"
                    disabled={completedTasks[index]}
                    className={`${getCompletionButtonClass(index)} font-medium px-4 py-2 flex items-center gap-2`}
                  >
                    {completedTasks[index] ? (
                      <>
                        <CheckSquare className="h-5 w-5 " />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Square className="h-5 w-5" />
                        <span>Mark as Complete</span>
                      </>
                    )}
                  </Button>

                  <div className="flex space-x-4">
                    {task.links ? (
                      task.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => markTaskLinkVisited(index)}
                          className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                        >
                          <span>{link.text}</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ))
                    ) : (
                      <a
                        href={task.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => markTaskLinkVisited(index)}
                        className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                      >
                        <span>{task.linkText}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Feedback Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Workshop Feedback
            </h3>
            <p className="text-white/90 mb-6">
              Shukriya for being part of our One-Day IT Workshop for Women!
              💻✨. Aapki presence ne event ko super bana diya!. Ab bas 3–5 mins
              ka time nikaalo aur feedback de do — taaki next time aur bhi
              dhamaka kar sakein! 💬💖
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmjKA7Zl9XpMj4ybEfX0g3wlCAYIXgknh-k07AyDcZ-T_5Wg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Give Your Feedback
            </a>
          </div>
        </motion.div>

        {/* Join AspiraSys */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-4xl mx-auto mb-16 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-accent to-primary p-6">
            <h3 className="text-2xl font-bold text-white">Join AspiraSys</h3>
            <p className="text-white/90 mt-2">
              Interested in building your career with us? Here's how you can
              join our team.
            </p>
          </div>
          <div className="p-6">
            <p className="mb-4">
              AspiraSys is always looking for talented individuals who are
              passionate about technology and innovation. We offer a supportive
              environment where you can grow your skills and advance your
              career.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-lg mb-2 text-primary">
                Why join AspiraSys?
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Supportive learning environment for beginners</li>
                <li>Opportunities to work on real-world projects</li>
                <li>Mentorship from experienced professionals</li>
                <li>Flexible work arrangements</li>
                <li>Continuous skill development programs</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://aspirasys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Explore Careers</span>
              </a>
              <a
                href="https://wa.me/919095133932?text=Hi%20I%20am%20interested%20in%20building%20my%20career%20with%20AspiraSys.%20Could%20you%20please%20share%20more%20details%20on%20joining%20the%20team?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Contact HR Team</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Final Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border-2 border-primary/20 shadow-md"
        >
          <h3 className="font-semibold text-xl mb-6 text-center text-primary">
            Workshop Completion Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 p-5 rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-4 text-gray-800 flex items-center">
                <CheckSquare className="h-5 w-5 mr-2 text-primary" />
                Items to Complete
              </h4>
              <ul className="space-y-4">
                {FINAL_CHECKLIST.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center bg-gray-50 p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 shadow-sm"
                  >
                    <button
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`mr-3 w-6 h-6 rounded-full border-2 border-primary flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        checklist[item.id]
                          ? "bg-success border-success text-white scale-110"
                          : "bg-white"
                      }`}
                      aria-label={`Toggle ${item.label}`}
                    >
                      {checklist[item.id] && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </button>
                    <span
                      className={`font-medium ${checklist[item.id] ? "text-success" : "text-gray-700"}`}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 p-5 rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-4 text-gray-800 flex items-center">
                <Award className="h-5 w-5 mr-2 text-accent" />
                Your Achievement
              </h4>
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-4 rounded-lg mb-4">
                <h5 className="font-medium mb-2 text-accent">
                  🎉 Congratulations on your progress!
                </h5>
                <p className="text-gray-700 mb-3">
                  You've taken your first big step into the world of IT and
                  digital skills.
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  "Keep your badge, show your website to friends, and proudly
                  share your logo on social media. Every small creation is a big
                  step forward! 💪"
                </p>
              </div>
              <p className="text-sm text-gray-600 italic text-center">
                Remember:{" "}
                <span className="font-semibold text-primary">
                  Shuruaat chhoti ho sakti hai lekin sapne bade
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
