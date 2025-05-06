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

export function ChallengeTasks() {
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
      setCompletedTasks(JSON.parse(savedTasks));
    }

    const savedChecklist = localStorage.getItem("workshopChecklist");
    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    }

    const savedVisitedLinks = localStorage.getItem("workshopVisitedLinks");
    if (savedVisitedLinks) {
      setVisitedTaskLinks(JSON.parse(savedVisitedLinks));
    }
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("workshopProgress", JSON.stringify(completedTasks));

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

    // If they haven't visited the task link, don't allow marking as complete
    if (!visitedTaskLinks[taskIndex]) {
      alert(
        "Please visit the link for this task first before marking it as complete.",
      );
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
      return "bg-success/10 text-success";
    }
    return "bg-primary/10 text-primary hover:bg-primary/20";
  };

  return (
    <section id="tasks" className="py-16 bg-gray-50">
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
              <AlertDialogCancel className="bg-gray-100 text-gray-900 hover:bg-red-200">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmTaskCompletion}
                className="bg-success text-black-900 hover:bg-success/90 hover:bg-green-200 border border-success"
              >
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Celebration Dialog */}
        <Dialog open={showCelebration} onOpenChange={setShowCelebration}>
          <DialogContent className="sm:max-w-md">
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center gap-2">
                <Award className="h-6 w-6" />
                Congratulations!
                <Award className="h-6 w-6" />
              </DialogTitle>
              <DialogDescription className="text-center text-lg py-2">
                You've completed the Women's IT Workshop! 🎉
              </DialogDescription>
            </DialogHeader>

            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20 my-4">
              <p className="text-center font-medium mb-4">
                You've taken your first steps into the world of IT and digital
                design. Be proud of what you've accomplished!
              </p>

              <div className="bg-white rounded-lg p-4 border-2 border-success shadow-md mb-4">
                <div className="text-center py-4">
                  <span className="text-xl font-bold text-primary">
                    Women's IT Workshop
                  </span>
                  <p className="text-sm text-gray-600 mt-2">
                    Presented by AspiraSys
                  </p>
                  <div className="my-3 flex justify-center">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <p className="font-medium text-success">
                    Achievement Unlocked!
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Digital Skills Pioneer
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <p className="text-sm text-center text-gray-600 font-medium">
                  Share your achievement:
                </p>
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => shareAchievement("linkedin")}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => shareAchievement("whatsapp")}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={downloadBadge}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Badge</span>
                  </Button>
                </div>
              </div>
            </div>

            <DialogFooter className="sm:justify-center">
              <DialogClose asChild>
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
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
            Complete these four tasks to begin your digital journey. Each task
            builds your skills step by step.
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
                  <span className="bg-success/10 flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full text-success border-2 border-success shadow-sm">
                    <Check className="h-4 w-4" />
                    <span>Complete</span>
                  </span>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 font-medium">
                  Goal:{" "}
                  {task.id === 4
                    ? "If you finish early or want to explore more, try this optional task."
                    : ""}
                </p>

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
                        <CheckSquare className="h-5 w-5" />
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
