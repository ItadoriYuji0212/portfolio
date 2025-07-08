import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppWindow, Box, GamepadIcon, Globe, GridIcon } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projectsList = [
    {
      id: 1,
      title: "Mermaid Studio",
      description: "A mermaid diagram and slideshow generator - exporter using Artificial Intelligence.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Groq API"],
      category: "webapp",
      imageSrc: "/img/mermaid_full.png",
      detailsUrl: "https://github.com/your-profile/portfolio",
      liveDemoUrl: "https://mermaid-studio-hitarth.vercel.app/",
    },
    {
      id: 2,
      title: "ChatPDF_AI",
      description: "A responsive portfolio website of mine using Vite, ReactJS and Tailwind CSS.",
      tags: ["Vite", "React.js", "Tailwind CSS", "Responsive"],
      category: "website",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...",
      detailsUrl: "https://github.com/your-profile/portfolio",
      liveDemoUrl: "https://yourportfolio.live",
    },
    {
      id: 3,
      title: "AlphaMinusOne",
      description: "A responsive portfolio website of mine using Vite, ReactJS and Tailwind CSS.",
      tags: ["Vite", "React.js", "Tailwind CSS", "Responsive"],
      category: "website",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...",
      detailsUrl: "https://github.com/your-profile/portfolio",
      liveDemoUrl: "https://yourportfolio.live",
    },
    {
      id: 4,
      title: "BookBliss",
      description: "A responsive portfolio website of mine using Vite, ReactJS and Tailwind CSS.",
      tags: ["Vite", "React.js", "Tailwind CSS", "Responsive"],
      category: "website",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...",
      detailsUrl: "https://github.com/your-profile/portfolio",
      liveDemoUrl: "https://yourportfolio.live",
    },
    {
      id: 5,
      title: "QuickChat",
      description: "Realtime chat application with chat room creation functionality using React.",
      tags: ["NodeJS", "ReactJS", "Axios", "Chatengine.io"],
      category: "webapp",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...",
      detailsUrl: "https://github.com/HitarthThakkar/realtime-chat-v1",
    },
    {
      id: 6,
      title: "SnowCoverNet",
      description: "A responsive portfolio website of mine using Vite, ReactJS and Tailwind CSS.",
      tags: ["Vite", "React.js", "Tailwind CSS", "Responsive"],
      category: "webapp",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...",
      detailsUrl: "https://github.com/HitarthThakkar/snow-cover-mapping",
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "A responsive portfolio website of mine using Vite, ReactJS and Tailwind CSS.",
      tags: ["Vite", "React.js", "Tailwind CSS", "Responsive"],
      category: "website",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...",
      detailsUrl: "#",
      liveDemoUrl: "#",
    },
    {
      id: 8,
      title: "Recipe Finder",
      description: "A web app that allows users to search for recipes by ingredients and dietary preferences.",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "webapp",
      imageSrc: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?...",
      detailsUrl: "#",
      liveDemoUrl: "#",
    },
    {
      id: 9,
      title: "Social Media Dashboard",
      description: "An analytics dashboard that tracks metrics across different social media platforms.",
      tags: ["TypeScript", "Chart.js", "REST API"],
      category: "webapp",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?...",
      detailsUrl: "#",
      liveDemoUrl: "#",
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: <GridIcon className="h-4 w-4" /> },
    { id: 'website', label: 'Website', icon: <Globe className="h-4 w-4" /> },
    { id: 'webapp', label: 'Web App', icon: <AppWindow className="h-4 w-4" /> },
    { id: 'game', label: 'Game', icon: <GamepadIcon className="h-4 w-4" /> },
    { id: 'other', label: 'Other', icon: <Box className="h-4 w-4" /> },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white dark:text-white light:text-portfolio-dark">
          My <span className="text-portfolio-primary dark:text-portfolio-primary light:text-light-accent">Projects</span>
        </h2>

        <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveCategory}>
          <TabsList className="flex justify-center mb-8 bg-portfolio-dark-purple/30 dark:bg-portfolio-dark-purple/30 light:bg-light-background/80 p-1 rounded-full mx-auto w-fit">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full data-[state=active]:bg-portfolio-primary data-[state=active]:text-white dark:data-[state=active]:bg-portfolio-primary light:data-[state=active]:bg-light-accent light:data-[state=active]:text-light-card"
              >
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.id === 'all' || filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="bg-portfolio-dark-purple border-none overflow-hidden dark:bg-portfolio-dark-purple light:bg-light-card light:text-light-text"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={project.imageSrc}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-xl font-semibold text-white dark:text-white light:text-light-text mb-2">{project.title}</h3>
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-full bg-portfolio-primary/20 text-portfolio-primary dark:bg-portfolio-primary/20 dark:text-portfolio-primary light:bg-light-accent/20 light:text-light-accent"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {(project.detailsUrl || project.liveDemoUrl) && (
                          <div className="flex gap-4 flex-wrap">
                            {project.detailsUrl && (
                              <a
                                href={project.detailsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline text-portfolio-primary hover:text-portfolio-accent dark:text-portfolio-primary dark:hover:text-portfolio-accent light:text-light-accent light:hover:text-light-accent/80"
                              >
                                View Details
                              </a>
                            )}
                            {project.liveDemoUrl && (
                              <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline text-portfolio-primary hover:text-portfolio-accent dark:text-portfolio-primary dark:hover:text-portfolio-accent light:text-light-accent light:hover:text-light-accent/80"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 bg-portfolio-dark-purple/30 dark:bg-portfolio-dark-purple/30 light:bg-light-background/20 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-portfolio-primary dark:text-portfolio-primary light:text-light-accent">Coming Soon</h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-center max-w-lg">
                    Projects in this category are currently in development and will be added soon. Stay tuned!
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block px-6 py-2 rounded-md bg-portfolio-primary dark:bg-portfolio-primary hover:bg-portfolio-accent dark:hover:bg-portfolio-accent light:bg-light-accent light:hover:bg-light-accent/80 text-white font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;