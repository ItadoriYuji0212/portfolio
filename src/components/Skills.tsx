
// import { Badge } from '@/components/ui/badge';

// const Skills = () => {

//   const frontendSkills = [
//     "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
//     "Tailwind CSS", "SASS", "Redux", "Framer Motion"
//   ];
  
//   const backendSkills = [
//     "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", 
//     "GraphQL", "REST APIs", "AWS"
//   ];
  
//   const designSkills = [
//     "Figma", "Adobe XD", "Photoshop", "Responsive Design", 
//     "UI/UX", "Wireframing", "Prototyping"
//   ];
  
//   return (
//     <section id="skills" className="section-padding bg-portfolio-dark-purple">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
//           My <span className="text-portfolio-primary">Skills</span>
//         </h2>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
//               Frontend Development
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {frontendSkills.map((skill) => (
//                 <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
//               Backend Development
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {backendSkills.map((skill) => (
//                 <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
//               Design & Others
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {designSkills.map((skill) => (
//                 <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { Badge } from '@/components/ui/badge';

const Skills = () => {

  const frontendSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
    "Tailwind CSS", "SASS", "Redux", "Framer Motion"
  ];
  
  const backendSkills = [
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", 
    "GraphQL", "REST APIs", "AWS"
  ];
  
  const designSkills = [
    "Figma", "Photoshop", "Responsive Design", 
    "UI/UX", "Wireframing", "Prototyping"
  ];

  // New skill categories for Quant / SDE
  const programmingLanguages = [
    "C", "C++", "Python", "Java", "SQL", "R"
  ];

  const dataStructuresAlgorithms = [
    "Arrays", "Linked Lists", "Trees", "Graphs", "Hashing", 
    "Sorting", "Dynamic Programming"
  ];

  const softwareDevTools = [
    "Git", "Docker", "Jenkins", "VSCode", "IntelliJ IDEA"
  ];

  const databasesDataHandling = [
    "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Pandas", "NumPy"
  ];

  const mathStatistics = [
    "Probability", "Statistics", "Linear Algebra", "Calculus", "Optimization"
  ];

  const quantitativeModeling = [
    "Stochastic Processes", "Time Series Analysis", 
    "Monte Carlo Simulation", "Financial Modeling"
  ];

  const cloudDevOps = [
    "AWS", "Azure", "Kubernetes", "CI/CD pipelines"
  ];

  const testingDebugging = [
    "Unit Testing", "Integration Testing", "GDB", "Valgrind"
  ];

  const osNetworking = [
    "Linux", "Windows", "TCP/IP", "Sockets programming"
  ];

  const others = [
    "Microservices", "Multithreading", 
    "Big-O Analysis", "Machine Learning Basics"
  ];
  
  return (
    <section id="skills" className="section-padding bg-portfolio-dark-purple">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          My <span className="text-portfolio-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">

          {/* Original Frontend */}
          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Original Backend */}
          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Original Design */}
          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Design & Others
            </h3>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* New Categories Start */}

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Data Structures & Algorithms
            </h3>
            <div className="flex flex-wrap gap-2">
              {dataStructuresAlgorithms.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div> */}

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Software Development Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {softwareDevTools.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Databases & Data Handling
            </h3>
            <div className="flex flex-wrap gap-2">
              {databasesDataHandling.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Mathematics & Statistics
            </h3>
            <div className="flex flex-wrap gap-2">
              {mathStatistics.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Quantitative & Modeling
            </h3>
            <div className="flex flex-wrap gap-2">
              {quantitativeModeling.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Cloud & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {cloudDevOps.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div> */}

          {/* <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Testing & Debugging
            </h3>
            <div className="flex flex-wrap gap-2">
              {testingDebugging.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div> */}

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Operating Systems & Networking
            </h3>
            <div className="flex flex-wrap gap-2">
              {osNetworking.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
              Others
            </h3>
            <div className="flex flex-wrap gap-2">
              {others.map((skill) => (
                <Badge key={skill} className="bg-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Skills;
