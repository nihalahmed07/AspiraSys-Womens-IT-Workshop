import { motion } from "framer-motion";
import {
  Brain,
  PaintbrushVertical,
  Monitor,
  Code,
  CloudUpload,
  File,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RESOURCES } from "@/lib/constants";

export function Resources() {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'robot': return <Brain className="text-xl" />;
      case 'paint-brush': return <PaintbrushVertical className="text-xl" />;
      case 'desktop': return <Monitor className="text-xl" />;
      case 'code': return <Code className="text-xl" />;
      case 'cloud-upload-alt': return <CloudUpload className="text-xl" />;
      case 'file-download': return <File className="text-xl" />;
      default: return <Code className="text-xl" />;
    }
  };

  const getColorClass = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary/10 text-primary';
      case 'secondary': return 'bg-secondary/10 text-secondary';
      case 'accent': return 'bg-accent/10 text-accent';
      case 'success': return 'bg-success/10 text-success';
      case 'gray': return 'bg-gray-100 text-gray-700';
      default: return 'bg-primary/10 text-primary';
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    if (e.currentTarget.getAttribute('href') === '#') {
      e.preventDefault();
      alert('Workshop materials are being downloaded. If the download doesn\'t start automatically, please check your browser settings.');
    }
  };

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to complete your challenge is here. These tools are beginner-friendly and free to use.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {RESOURCES.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClass(resource.color)}`}>
                      {getIcon(resource.icon)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    {resource.linkText}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
