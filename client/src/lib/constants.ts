export const WORKSHOP_TASKS = [
  {
    id: 1,
    title: "Create Portfolio Content with ChatGPT",
    color: "primary",
    steps: [
      "<strong>Open your browser</strong> and go to <a href='https://chat.openai.com' target='_blank' style='color:blue'>chat.openai.com</a>. Sign in or sign up.",
      "<strong>Ask ChatGPT</strong> a prompt about yourself, similar to this example: <br/><code style='font-size:14px'> I'm Ayesha, a final year B.Com student from Ambur. I enjoy learning creative tools like Canva and want to freelance. Write a friendly and short 'About Me' section for my student portfolio.</code>",
      "<strong>Get more content</strong> using prompts like:<br/><ul style='list-style-type: disc; padding-left: 20px;'><li><code style='font-size:14px'>List 6 beginner IT and soft skills I can show in my student portfolio.</code></li><li><code style='font-size:14px'>Write a short paragraph about my dream of becoming financially independent using design and freelancing.</code></li>",
      "<strong>For project description</strong>, ask: <br><code style='font-size:14px'>Write a line about a logo and website I designed as part of a learning workshop.</code>",
      "<strong>Add more sections</strong>: <br><ul style='list-style-type: disc; padding-left: 20px;'><li><strong>Fun Facts:</strong> Favorite quote, hobby, color, food, apps, etc.</li> <li><strong>Contact:</strong> Email or Instagram/LinkedIn (optional).</li>",
      "<strong>Prepare one clean version</strong> for each section: <br><ul style='list-style-type: disc; padding-left: 20px;'><li>About Me</li><li>Skills</li><li>Projects</li><li>Career Goals</li><li>Fun Facts</li><li>Contact</li></ul>",
      "<strong>Copy all sections</strong> together into one <b> Notepad or Google Doc</b> for the next steps.",
    ],
    link: "https://chat.openai.com",
    linkText: "ChatGPT",
  },
  {
    id: 2,
    title: "Design Your Logo Using Canva",
    color: "secondary",
    steps: [
      "<strong>Ask ChatGPT</strong>: <br><code style='font-size:14px'>Suggest 3 creative logo concepts for a female student named [your name] who wants to start a freelance design career. Keep it minimal and meaningful.</code> <br><p style='font-size:14px; padding-top:10px'>➤ You can ask something similar with your own name and career plan.</b>",
      "<strong>Go to</strong> <a href='https://www.canva.com' target='_blank' style='color:blue'>www.canva.com</a> → Sign in or create an account.",
      "Click &quot;<b>Create a Design</b>&quot; → Choose &quot;<b>Logo</b>&quot;.",
      "<strong>Use templates</strong> like:<br> <ul style='list-style-type: disc; padding-left: 20px;'><li> &quot;Modern Initial Logo&quot;</li><li> &quot;Elegant Personal Logo&quot;  or</li> <li>&quot;Creative Freelancer Logo&quot;</li>",
      "<strong>Consider these design elements</strong>:<br><ul style='list-style-type: disc; padding-left: 20px;'><li>Your initials (e.g., NF for Noorunisha Fathima) </li><li> Symbol – bulb (ideas), flower (growth), computer (tech), heart (passion)</li><li> Font style – soft, bold, or clean</li> <li>Color – 1–2 max (Blue = trust, Pink = creativity, Green = growth)</li>",
      "Once finished, click <b>Share</b> → <b>Download</b> → <b>PNG format</b>.",
    ],
    link: "https://www.canva.com",
    linkText: "Canva",
  },
  {
    id: 3,
    title: "Build Your Website with Wix",
    color: "accent",
    steps: [
      "<strong>Go to</strong> <a href='https://wix.com' target='_blank' style='color:blue'>wix.com</a> → Sign in or create an account.",
      "Click &quot;<b>Create New Site</b>&quot; → Choose &quot;<b>Portfolio</b>&quot;.",
      "Select &quot;<b>Start with Template</b>&quot; → Pick &quot;<b>Student Portfolio</b>&quot; or &quot;<b>Freelancer</b>&quot; design.",
      "<strong>Use your saved</strong> ChatGPT content and logo to fill in pages:<br> <ul style='list-style-type: disc; padding-left: 20px;'><li>Home</li><li>About Me</li><li>Skills</li> <li>Projects</li><li>My Dream Career</li><li>Fun Facts</li><li>Contact</li>",
      "Click <b>Publish</b>. Copy your new website link.",
    ],
    link: "https://wix.com",
    linkText: "Wix",
  },
  {
    id: 4,
    title: "(Optional) Code & Host with ChatGPT + Netlify",
    color: "gray",
    steps: [
      "<strong>Open</strong> <a href='https://chat.openai.com' target='_blank' style='color:blue'>ChatGPT</a> and type: <br><code style='font-size:14px'>Create a simple personal portfolio HTML page for a college student named [your name], studying [your course], learning IT skills, and interested in freelancing. Include About Me, Skills, and Contact section. Use clean HTML and CSS in one file.\"</code>",
      "<strong>Copy the code</strong> → Open <b>Notepad</b> or any text editor → Paste code → Save as <b>index.html</b>.",
      "<strong>Put it in a folder</strong> named <b>MyPortfolio</b> → Right-click → <b>Compress</b> it into a <b>ZIP file</b>.",
      "<strong>Go to</strong> <a href='https://netlify.com' target='_blank'>netlify.com</a> → Sign up → Click &quot;<b>Add New Site</b>&quot; → &quot;<b>Deploy manually</b>&quot; → <b>Upload ZIP file</b>.",
      "<strong>You'll get a live link</strong> like <code style='font-size:14px'>https://yourname.netlify.app</code>.",
    ],
    links: [
      { url: "https://chat.openai.com", text: "ChatGPT" },
      { url: "https://netlify.com", text: "Netlify" },
    ],
  },
];

export const RESOURCES = [
  {
    title: "ChatGPT",
    description:
      "AI assistant that helps you write professional content for your portfolio.",
    icon: "robot",
    color: "primary",
    link: "https://chat.openai.com",
    linkText: "Visit ChatGPT",
  },
  {
    title: "Canva",
    description:
      "Easy-to-use design platform for creating professional logos and graphics.",
    icon: "paint-brush",
    color: "secondary",
    link: "https://www.canva.com",
    linkText: "Visit Canva",
  },
  {
    title: "Wix",
    description:
      "Website builder with pre-designed templates. Perfect for beginners.",
    icon: "desktop",
    color: "accent",
    link: "https://wix.com",
    linkText: "Visit Wix",
  },
  {
    title: "Replit",
    description:
      "Browser-based code editor for testing your HTML website. No installation needed.",
    icon: "code",
    color: "gray",
    link: "https://replit.com",
    linkText: "Visit Replit",
  },
  {
    title: "Netlify",
    description:
      "Platform to publish your website live on the internet for free.",
    icon: "cloud-upload-alt",
    color: "success",
    link: "https://netlify.com",
    linkText: "Visit Netlify",
  },
  {
    title: "Workshop Materials",
    description:
      "Download the workshop instructions and checklist for offline reference.",
    icon: "file-download",
    color: "primary",
    link: "#",
    linkText: "Download PDF",
  },
];

export const FAQS = [
  {
    question: "What if I don't finish all the workshop tasks?",
    answer:
      "That's completely fine! This workshop is about learning at your own pace. You can continue working on the tasks later. The most important thing is to understand the process and get started.",
  },
  {
    question: "Do I need to have any technical skills?",
    answer:
      "No prior technical knowledge is required! This workshop is designed for complete beginners. We provide step-by-step instructions and use user-friendly tools that don't require coding knowledge (except for the optional task).",
  },
  {
    question: "Are the tools used in this workshop free?",
    answer:
      "Yes! All the tools we use (ChatGPT, Canva, Wix, Replit, and Netlify) have free versions that are perfect for beginners. You don't need to upgrade to paid plans to complete the workshop tasks.",
  },
  {
    question: "What do I do with my website after the workshop?",
    answer:
      "Your website can be the start of your professional online presence! You can continue to improve it, add projects, and share it with potential employers or clients. It's a great way to showcase your skills and personality.",
  },
];

export const FINAL_CHECKLIST = [
  { id: "portfolio", label: "Portfolio content saved" },
  { id: "logo", label: "Logo downloaded" },
  { id: "website", label: "Wix website published" },
  { id: "optional", label: "Netlify website live (Optional)" },
];
