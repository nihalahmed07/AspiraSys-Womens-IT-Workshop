import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Women's IT Workshop
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl italic font-serif mb-8"
          >
            "Shuruaat chhoti ho sakti hai, lekin sapne bade hone chahiye! Aaj ki mehnat, kal ka success hai." 💪
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-lg opacity-90">Take your first steps in IT with four simple, fun, and useful tasks.</p>
            <p className="text-lg opacity-90">No experience needed—each step is explained in a super simple way!</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 transition-colors shadow-lg font-medium"
            >
              <a href="#tasks">
                Start Challenge
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20 font-medium transition-colors"
            >
              <a href="#resources">
                View Resources
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
