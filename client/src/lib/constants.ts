export const WORKSHOP_TASKS = [
  {
    id: 1,
    title: "Create Portfolio Content with ChatGPT",
    color: "primary",
    steps: [
      "Open your browser and go to chat.openai.com. Sign in or sign up.",
      "Ask ChatGPT a prompt about yourself, similar to: \"I'm Ayesha, a final year B.Com student from Ambur. I enjoy learning creative tools like Canva and want to freelance. Write a friendly and short 'About Me' section for my student portfolio.\"",
      "Get more content using prompts like \"List 6 beginner IT and soft skills I can show in my student portfolio.\" and \"Write a short paragraph about my dream of becoming financially independent using design and freelancing.\"",
      "For project description, ask: \"Write a line about a logo and website I designed as part of a learning workshop.\"",
      "Add more sections: Fun Facts (favorite quote, hobby, color, food, apps) and Contact (Email or Instagram/LinkedIn - optional)",
      "Prepare one clean version for each section: About Me, Skills, Projects, Career Goals, Fun Facts, Contact.",
      "Copy all sections together into one Notepad or Google Doc for the next steps."
    ],
    link: "https://chat.openai.com",
    linkText: "Go to ChatGPT"
  },
  {
    id: 2,
    title: "Design Your Logo Using Canva",
    color: "secondary",
    steps: [
      "Ask ChatGPT: \"Suggest 3 creative logo concepts for a female student named [your name] who wants to start a freelance design career. Keep it minimal and meaningful.\"",
      "Go to www.canva.com → Sign in or create an account.",
      "Click \"Create a Design\" → Choose \"Logo\".",
      "Use templates like \"Modern Initial Logo\", \"Elegant Personal Logo\", or \"Creative Freelancer Logo\".",
      "Consider these design elements: Your initials, a symbol (bulb for ideas, flower for growth, computer for tech, heart for passion), font style (soft, bold, or clean), and colors (1-2 max: Blue for trust, Pink for creativity, Green for growth).",
      "Once finished, click Share → Download → PNG format."
    ],
    link: "https://www.canva.com",
    linkText: "Go to Canva"
  },
  {
    id: 3,
    title: "Build Your Website with Wix",
    color: "accent",
    steps: [
      "Go to wix.com → Sign in or create an account.",
      "Click \"Create New Site\" → Choose \"Portfolio\".",
      "Select \"Start with Template\" → Pick \"Student Portfolio\" or \"Freelancer\" design.",
      "Use your saved ChatGPT content and logo to fill in pages: Home, About Me, Skills, Projects, My Dream Career, Fun Facts, Contact.",
      "Click Publish. Copy your new website link."
    ],
    link: "https://wix.com",
    linkText: "Go to Wix"
  },
  {
    id: 4,
    title: "(Optional) Code & Host with ChatGPT + Netlify",
    color: "gray",
    steps: [
      "Open ChatGPT and type: \"Create a simple personal portfolio HTML page for a college student named [your name], studying [your course], learning IT skills, and interested in freelancing. Include About Me, Skills, and Contact section. Use clean HTML and CSS in one file.\"",
      "Copy the code → Open Notepad or any text editor → Paste code → Save as index.html.",
      "Put it in a folder named MyPortfolio → Right-click → Compress it into a ZIP file.",
      "Go to netlify.com → Sign up → Click \"Add New Site\" → \"Deploy manually\" → Upload ZIP file.",
      "You'll get a live link like https://yourname.netlify.app."
    ],
    links: [
      { url: "https://chat.openai.com", text: "ChatGPT" },
      { url: "https://netlify.com", text: "Netlify" }
    ]
  }
];

export const RESOURCES = [
  {
    title: "ChatGPT",
    description: "AI assistant that helps you write professional content for your portfolio.",
    icon: "robot",
    color: "primary",
    link: "https://chat.openai.com",
    linkText: "Visit ChatGPT"
  },
  {
    title: "Canva",
    description: "Easy-to-use design platform for creating professional logos and graphics.",
    icon: "paint-brush",
    color: "secondary",
    link: "https://www.canva.com",
    linkText: "Visit Canva"
  },
  {
    title: "Wix",
    description: "Website builder with pre-designed templates. Perfect for beginners.",
    icon: "desktop",
    color: "accent",
    link: "https://wix.com",
    linkText: "Visit Wix"
  },
  {
    title: "Replit",
    description: "Browser-based code editor for testing your HTML website. No installation needed.",
    icon: "code",
    color: "gray",
    link: "https://replit.com",
    linkText: "Visit Replit"
  },
  {
    title: "Netlify",
    description: "Platform to publish your website live on the internet for free.",
    icon: "cloud-upload-alt",
    color: "success",
    link: "https://netlify.com",
    linkText: "Visit Netlify"
  },
  {
    title: "Workshop Materials",
    description: "Download the workshop instructions and checklist for offline reference.",
    icon: "file-download",
    color: "primary",
    link: "#",
    linkText: "Download PDF"
  }
];

export const FAQS = [
  {
    question: "What if I don't finish all the workshop tasks?",
    answer: "That's completely fine! This workshop is about learning at your own pace. You can continue working on the tasks later. The most important thing is to understand the process and get started."
  },
  {
    question: "Do I need to have any technical skills?",
    answer: "No prior technical knowledge is required! This workshop is designed for complete beginners. We provide step-by-step instructions and use user-friendly tools that don't require coding knowledge (except for the optional task)."
  },
  {
    question: "Are the tools used in this workshop free?",
    answer: "Yes! All the tools we use (ChatGPT, Canva, Wix, Replit, and Netlify) have free versions that are perfect for beginners. You don't need to upgrade to paid plans to complete the workshop tasks."
  },
  {
    question: "What do I do with my website after the workshop?",
    answer: "Your website can be the start of your professional online presence! You can continue to improve it, add projects, and share it with potential employers or clients. It's a great way to showcase your skills and personality."
  }
];

export const FINAL_CHECKLIST = [
  { id: "content", label: "Portfolio content saved" },
  { id: "logo", label: "Logo downloaded" },
  { id: "website", label: "Wix website published" },
  { id: "netlify", label: "Netlify website live (Optional)" }
];
