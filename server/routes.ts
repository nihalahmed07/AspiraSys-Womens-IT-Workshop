import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for handling contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // In a real application, you would save this to a database
      // and/or send an email
      console.log("Contact form submission:", req.body);
      
      return res.status(200).json({ 
        success: true, 
        message: "Message received. A mentor will contact you soon." 
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "There was an error submitting your message. Please try again." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    return res.status(200).json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
