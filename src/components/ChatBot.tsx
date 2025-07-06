import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, X, Send, MessageSquare } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi there! I'm Hitarth. How can I help you learn more about me?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message
    const updatedMessages = [
      ...messages,
      { role: "user", content: inputMessage },
    ];

    setMessages(updatedMessages);
    setInputMessage("");

    // Generate a personalized response based on the input
    // setTimeout(() => {
    //   const userQuestion = inputMessage.toLowerCase();
    //   let response =
    //     "I'm not sure about that. Feel free to ask me about my skills, experience, projects, or interests!";

    //   // Personal information responses
    //   if (
    //     userQuestion.includes("name") ||
    //     userQuestion.includes("who are you") ||
    //     userQuestion.includes("about you")
    //   ) {
    //     response =
    //       "I'm Hitarth Thakkar, a full-stack developer with expertise in React, TypeScript, and Node.js. I'm passionate about creating efficient and user-friendly web applications.";
    //   }
    //   // Experience and skills
    //   else if (
    //     userQuestion.includes("experience") ||
    //     userQuestion.includes("work") ||
    //     userQuestion.includes("background")
    //   ) {
    //     response =
    //       "I have over 5 years of experience in web development, having worked at tech startups and as a freelancer. My most recent role was as a Senior Developer at TechCorp where I led frontend development.";
    //   } else if (
    //     userQuestion.includes("education") ||
    //     userQuestion.includes("study") ||
    //     userQuestion.includes("degree")
    //   ) {
    //     response =
    //       "I hold a Bachelor's degree in Computer Science from Indian Institute of Information Technology Vadodara, graduating with honors in 2026. I've also completed specialized courses in Object oriented Design.";
    //   } else if (
    //     userQuestion.includes("skills") ||
    //     userQuestion.includes("technologies") ||
    //     userQuestion.includes("tech stack")
    //   ) {
    //     response =
    //       "I'm proficient in React, Next.js, TypeScript, Node.js, MongoDB, and AWS. I'm particularly strong in frontend development with modern frameworks and responsive design.";
    //   }
    //   // Projects
    //   else if (
    //     userQuestion.includes("project") ||
    //     userQuestion.includes("portfolio")
    //   ) {
    //     response =
    //       "I've worked on various projects including an e-commerce platform, a task management app, and a portfolio website for a digital artist. My projects showcase my skills in frontend development, API integration, and responsive design.";
    //   }
    //   // Competitive programming
    //   else if (
    //     userQuestion.includes("leetcode") ||
    //     userQuestion.includes("coding") ||
    //     userQuestion.includes("competitive")
    //   ) {
    //     response =
    //       "I'm active on competitive programming platforms. I've solved over 500 problems on LeetCode and maintain a Specialist rating on Codeforces. I regularly participate in coding competitions.";
    //   }
    //   // Interests
    //   else if (
    //     userQuestion.includes("interest") ||
    //     userQuestion.includes("hobby") ||
    //     userQuestion.includes("like")
    //   ) {
    //     response =
    //       "Besides coding, I enjoy hiking, photography, and reading books on technology and science fiction. I'm also involved in open source contributions and attend local tech meetups.";
    //   }
    //   // Contact information
    //   else if (
    //     userQuestion.includes("contact") ||
    //     userQuestion.includes("email") ||
    //     userQuestion.includes("reach")
    //   ) {
    //     response =
    //       "You can contact me through the contact form on this website. I typically respond within 24-48 hours. For professional inquiries, you can also reach me on LinkedIn.";
    //   }
    //   // Availability
    //   else if (
    //     userQuestion.includes("available") ||
    //     userQuestion.includes("hire") ||
    //     userQuestion.includes("job")
    //   ) {
    //     response =
    //       "I'm currently open to Intern roles, freelance projects and full-time opportunities. I'm particularly interested in roles involving Software Development roles, handling things.";
    //   }

    //   setMessages((prev) => [...prev, { role: "bot", content: response }]);
    // }, 1000);

    setTimeout(() => {
      const question = inputMessage.toLowerCase();
      const responseSegments = [];

      // Helpers
      const includesAny = (keywords) =>
        keywords.some((kw) => question.includes(kw));

      // Define intent buckets
      const greetingKeywords = ["hi", "hello", "hey", "everything"];
      const nameKeywords = ["name", "who are you", "yourself", "about you", "everything"];
      const educationKeywords = [
        "education",
        "study",
        "degree",
        "college",
        "university",
        "everything",
      ];
      const experienceKeywords = [
        "experience",
        "internship",
        "past work",
        "industry",
        "role",
        "everything",
      ];
      const projectKeywords = [
        "project",
        "portfolio",
        "built",
        "made",
        "github",
        "everything",
      ];
      const skillsKeywords = [
        "skills",
        "tech stack",
        "technologies",
        "tools",
        "languages",
        "everything",
      ];
      const cpKeywords = [
        "competitive",
        "leetcode",
        "codeforces",
        "coding",
        "cp",
        "everything",
      ];
      const interestsKeywords = [
        "hobbies",
        "interests",
        "free time",
        "do for fun",
        "everything",
      ];
      const goalsKeywords = ["goal", "dream", "ambition", "future", "vision"];
      const availabilityKeywords = [
        "available",
        "open",
        "hire",
        "job",
        "looking for",
        "everything",
      ];
      const resumeKeywords = ["cv", "resume", "everything",];
      const contactKeywords = ["contact", "email", "reach", "connect", "everything",];
      const strengthsKeywords = ["strength", "good at", "best at", "everything",];
      const weaknessesKeywords = ["weakness", "improve", "bad at", "everything",];
      const productivityKeywords = ["productive", "workflow", "routine", "everything",];
      const sideProjectsKeywords = [
        "side project",
        "personal project",
        "self project",
        "everything",
      ];
      const openSourceKeywords = ["open source", "github contribution"];
      const rolePreferenceKeywords = [
        "dev",
        "developer",
        "engineer",
        "product",
        "hft",
        "everything",
      ];
      const designKeywords = ["system design", "architecture", "everything",];
      const problemSolvingKeywords = [
        "problem-solving",
        "debug",
        "approach",
        "solve",
        "everything",
      ];

      // Start combining segments
      if (includesAny(greetingKeywords)) {
        responseSegments.push("Hey!");
      }

      if (includesAny(nameKeywords)) {
        responseSegments.push(
          "I'm Hitarth Thakkar, a final-year CS undergrad with a deep interest in software engineering, systems, and clean code."
        );
      }

      if (includesAny(educationKeywords)) {
        responseSegments.push(
          "I'm currently pursuing a B.Tech in Computer Science from IIIT Vadodara. I’ve focused on core CS subjects like OS, DBMS, OOP, CN, Data structures and algorithms."
        );
      }

      if (includesAny(experienceKeywords)) {
        responseSegments.push(
          "I’ve worked on hands-on projects, participated in hackathons, and contributed to open source. I'm actively looking for opportunities in dev, HFT/Quant, or Product-based companies."
        );
      }

      if (includesAny(projectKeywords)) {
        responseSegments.push(
          "Some of my projects include an AI Mermaid diagram generator, ChatPDF-AI, Smart Chess Engine and Book shopping website. I do have many more learning projects also and All are hosted on my GitHub. You can scroll down to learn more about my projects in detail and see live demo of them."
        );
      }

      if (includesAny(skillsKeywords)) {
        responseSegments.push(
          "I am proficient in C++ and Python for problem solving and programming tasks and for web Development, I am comfortable in MERN stack and Python + Django. You can see my all skills listed down in the website."
        );
      }

      if (includesAny(cpKeywords)) {
        responseSegments.push(
          "I’m active on programming platforms and in Competitive Coding also. I enjoy daily problem solving and contests. I am Knight(top 3%) at LeetCode, Specialist at Codeforces and 4 Star at Codechef. You can have a detailed look on my Achievements section to know more about that."
        );
      }

      if (includesAny(interestsKeywords)) {
        responseSegments.push(
          "Outside of tech, I enjoy watching System Design videos, exploring dev tools, and reading about computer fundamentals and architecture."
        );
      }

      if (includesAny(goalsKeywords)) {
        responseSegments.push(
          "My aim is to join a high-impact engineering team at a product company or HFT firm, contributing to core systems and learning from the best."
        );
      }

      if (includesAny(availabilityKeywords)) {
        responseSegments.push(
          "I'm currently open to any software internships or full-time roles, dev roles, product roles, and opportunities in HFT firms. Remote or in-person both work for me."
        );
      }

      if (includesAny(resumeKeywords)) {
        responseSegments.push(
          "Sure! My resume is available on this site, or you can message me via the contact form below and I’ll send it directly."
        );
      }

      if (includesAny(contactKeywords)) {
        responseSegments.push(
          "You can contact me through the contact form or LinkedIn. I usually reply within 24-48 hours."
        );
      }

      if (includesAny(strengthsKeywords)) {
        responseSegments.push(
          "I’m good at debugging, writing clean modular code, and understanding complex systems. I’m also persistent with hard problems."
        );
      }

      if (includesAny(weaknessesKeywords)) {
        responseSegments.push(
          "Sometimes I take longer on simpler tasks trying to over-optimize. I'm learning to balance quality with speed."
        );
      }

      if (includesAny(productivityKeywords)) {
        responseSegments.push(
          "I track goals using Notion, follow a block-based schedule, and avoid distractions by working in bursts with the Pomodoro method."
        );
      }

      if (includesAny(sideProjectsKeywords)) {
        responseSegments.push(
          "I love building side projects - from terminal apps to dashboard UIs and even automation scripts. I use them to test and learn new tools."
        );
      }

      if (includesAny(openSourceKeywords)) {
        responseSegments.push(
          "I’ve contributed to open-source repos on GitHub. I believe in building in public and learning from code written by others."
        );
      }

      if (includesAny(rolePreferenceKeywords)) {
        responseSegments.push(
          "I’m especially interested in Software Engineering based roles, any HFT/dev/product teams with strong technical culture would be a dream team for me."
        );
      }

      if (includesAny(designKeywords)) {
        responseSegments.push(
          "I enjoy designing clean, modular systems. I’ve studied scalable architectures, and I'm improving my low-level design skills as well."
        );
      }

      if (includesAny(problemSolvingKeywords)) {
        responseSegments.push(
          "I follow a structured approach: understand constraints, identify patterns, design brute-force first, and then optimize step-by-step."
        );
      }

      // Fallback
      if (responseSegments.length === 0) {
        responseSegments.push(
          "I'm not sure how to answer that. Feel free to ask me about my experience, skills, projects, or goals."
        );
      }

      // Final response
      const response = responseSegments.join(" ");
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-portfolio-dark-purple rounded-lg shadow-lg w-80 sm:w-96 flex flex-col border border-portfolio-primary/30 overflow-hidden">
          <div className="bg-portfolio-dark flex items-center justify-between p-4 border-b border-portfolio-primary/20">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-portfolio-primary" />
              <h3 className="font-medium text-white">Hitarth's Smart Chat</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleChat}
              className="text-gray-400 hover:text-white hover:bg-portfolio-primary/20"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 max-h-96 bg-portfolio-dark">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.role === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
                  }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${message.role === "user"
                    ? "bg-portfolio-primary text-white rounded-tr-none"
                    : "bg-portfolio-dark-purple border border-portfolio-primary/20 text-gray-200 rounded-tl-none"
                    }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            className="border-t border-portfolio-primary/20 p-3 bg-portfolio-dark-purple flex gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me something about myself..."
              className="flex-1 bg-portfolio-dark rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-portfolio-primary text-sm"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-portfolio-primary hover:bg-portfolio-accent text-white"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={handleToggleChat}
          className="h-14 w-14 rounded-full bg-portfolio-primary hover:bg-portfolio-accent text-white shadow-lg flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
