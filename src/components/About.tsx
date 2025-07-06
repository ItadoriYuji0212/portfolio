// import { Button } from "@/components/ui/button";

// const About = () => {
//   return (
//     <section id="about" className="section-padding">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
//           About <span className="text-portfolio-primary">Me</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">
//               Someone & Someone more
//             </h3>
//             <p className="text-gray-300 mb-6">
//               I'm a passionate web developer with over 5 years of experience
//               creating user-friendly and visually appealing websites. My goal is
//               to build applications that are not only beautiful but also
//               performant and accessible.
//             </p>
//             <p className="text-gray-300 mb-6">
//               I specialize in React, TypeScript, and modern CSS frameworks like
//               Tailwind CSS. My approach combines clean code practices with
//               creative design solutions to deliver exceptional digital
//               experiences.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div>
//                 <h4 className="font-semibold text-white mb-2">Name:</h4>
//                 <p className="text-gray-300">Hitarth Thakkar</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-2">Email:</h4>
//                 <p className="text-gray-300">hitarththakkar0212@gmail.com</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-2">Location:</h4>
//                 <p className="text-gray-300">Ahmedabad, Gujarat</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-2">
//                   Available For:
//                 </h4>
//                 <p className="text-gray-300">Anything that suits me</p>
//               </div>
//             </div>

//             <Button
//               asChild
//               className="bg-portfolio-primary hover:bg-portfolio-accent text-white"
//             >
//               <a href="#contact">Contact Me</a>
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
//               <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
//                 5+
//               </h3>
//               <p className="text-gray-300">Years of Experience</p>
//             </div>
//             <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
//               <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
//                 50+
//               </h3>
//               <p className="text-gray-300">Projects Completed</p>
//             </div>
//             <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
//               <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
//                 30+
//               </h3>
//               <p className="text-gray-300">Happy Clients</p>
//             </div>
//             <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
//               <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
//                 15+
//               </h3>
//               <p className="text-gray-300">Awards Received</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          About <span className="text-portfolio-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">
              Aspiring Software Engineer | Final-Year B.Tech CSE @ IIIT Vadodara | Building Scalable Solutions
            </h3>
            <span className="font-bold"> 
            */
            }
            <p className="text-gray-300 mb-6 text-justify">
              Currently a <span className="font-bold">final-year Computer Science undergrad at IIIT Vadodara</span>, on track to graduate in <span className="font-bold">2026</span>. With a solid foundation in data structures, algorithms and system design, I am passionate about turning complex problems into efficient, production-ready code. Over the last three years, I’ve immersed myself in problem solving and full-stack web development, building several academic and personal projects that showcase my ability to <span className="font-bold">learn quickly and collaborate effectively</span>. Beyond coding, I actively practice competitive programming and constantly exploring new technologies - whether it’s containerization with Docker, microservices architecture, or machine learning basics. <span className="font-bold">My goal is to join a team with strong technical culture where I can contribute, learn and grow into a world-class software engineer.</span>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Name:</h4>
                <p className="text-gray-300">Hitarth Thakkar</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Email:</h4>
                <p className="text-gray-300">hitarththakkar0212@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Location:</h4>
                <p className="text-gray-300">Ahmedabad, Gujarat</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Available For:</h4>
                <p className="text-gray-300">Internships & Full-Time Roles</p>
              </div>
            </div>

            <Button
              asChild
              className="bg-portfolio-primary hover:bg-portfolio-accent text-white"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Academics & Core CS */}
            <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
              <div className="flex items-end space-x-2 mb-2">
                <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
                  8.14 / 10
                </h3>
                <h3 className="font-bold text-2xl text-portfolio-primary mb-2">
                  CGPA
                </h3>
              </div>
              <p className="text-gray-300">
                DSA • DBMS • OS • OOPs • CN
              </p>
            </div>

            {/* Multi-Domain Projects (link to GitHub) */}
            <a
              href="https://github.com/HitarthThakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg hover:bg-opacity-90 transition">
              <div className="flex items-end space-x-2 mb-2">
                <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
                  4+
                </h3>
                <h3 className="font-bold text-2xl text-portfolio-primary mb-2">
                  tech domains
                </h3>
              </div>
              <p className="text-gray-300">
                GameDev • AI • ML • MERN
              </p>
            </a>

            {/* Dev & CP Profiles (link to Linktree) */}
            <a
              href="https://codolio.com/profile/Hitarth_Thakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg hover:bg-opacity-90 transition">
              <div className="flex items-end space-x-2 mb-2">
                <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
                  1700+
                </h3>
                <h3 className="font-bold text-2xl text-portfolio-primary mb-2">
                  Problems
                </h3>
              </div>
              <p className="text-gray-300">
                On 7+ Coding Platforms
              </p>
            </a>

            {/* Soft Skills (descriptive) */}
            <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
              <div className="flex items-end space-x-2 mb-2">
                <h3 className="font-bold text-4xl text-portfolio-primary mb-2">
                  10+
                </h3>
                <h3 className="font-bold text-2xl text-portfolio-primary mb-2">
                  team projects
                </h3>
              </div>
              <p className="text-gray-300">
                Collaboration, Leadership, Communication skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


/* 

okay, headline and paragraphs are fine. WE DO NOT NEED ANY CHANGE.
for stat card, i have some preference but i need your suggestion, so evaluate which of these are better or what should we can change to grab eye on recruiter:

1) a GPA card, having gpa and relevant coursework both (the first two which you suggested are combined in here cuz gpa is not too high so combining first 2 will be good)
2) github repo link and on card the written thing is the diversity on my tech stack cuz u have made game, AI, ML and full stack in MERN and PHP, do i think diversity in tech stack is kinda good point.
3) a stat card which has a link to my linktree profile which actually has links to all coding platforms i am currently on, so its like my coding summary profile thing i think that's good.
4) soft skills tab,

GIVE SUGGESTIONS AND SAY IF SOMETHING CANBE MADE BETTER AND THEN WE CAN CONFIRM AND MOVE TO CODE. 

*/