import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Achievements = () => {
  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Hitarth_Thakkar",
      stats: "Proficient in DSA, 850+ problems solved, 200+ days daily streak",
      rank: "Knight Badge (1947), Top 3%",
      url: "https://leetcode.com/u/Hitarth_Thakkar/",
    },
    {
      platform: "Codeforces",
      username: "Hitarth_Thakkar",
      stats: "Rating : 1426, Specialist @Codeforces",
      rank: "1426, Specialist",
      url: "https://codeforces.com/profile/Hitarth_Thakkar",
    },
    {
      platform: "Codechef",
      username: "professor_0212",
      stats: "Rating : 1828, 4 Star",
      rank: "Silver League",
      url: "https://www.codechef.com/users/professor_0212",
    },
    {
      platform: "Code360 - by CodingNinjas",
      username: "HitarthThakkar",
      stats: "Rating : 2252, Global Rank 10 in Weekly Contest 183",
      rank: "Master Rank, Top 11%",
      url: "https://www.naukri.com/code360/profile/93389ecd-28b6-498a-8cdf-68c955883e46",
    },
  ];

  // const otherAchievements = [
  //   "Solved 1700+ DSA & Algorithmic Problems of various difficulties in total from various platforms.",
  //   "Secured 13th rank Globally in Codechef Starters 148 out of 14k+ participants.",
  //   "1570th Global Rank out of 35k+ Participants in Codeforces Round 968 (Div2).",
  //   "Published article on Modern Web Development Practices",
  // ];

  const otherAchievements = [
    {
      text: "Solved 1700+ DSA & Algorithmic Problems of various difficulties in total from various platforms.",
      link: "https://codolio.com/profile/Hitarth_Thakkar",
      linkText: "View Coding Profile"
    },
    {
      text: "Secured 13th rank Globally in Codechef Starters 148 out of 14k+ participants.",
      link: "https://www.codechef.com/rankings/START148C?itemsPerPage=100&order=asc&page=1&sortBy=rank",
      linkText: "View Contest Standings"
    },
    {
      text: "Secured 292nd rank Globally in LeetCode Biweekly Contest 159 out of 27k+ participants.",
      link: "https://leetcode.com/contest/biweekly-contest-159/ranking/?region=global_v2",
      linkText: "View Contest Standings"
    },
    {
      text: "Worked on 20+ projects across multiple tech domains including AI, ML, MERN Stack and Game Development.",
    },
    {
      text: "Worked on 10+ team projects, demonstrating collaboration, ownership and communication skills.",
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-portfolio-dark">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          My <span className="text-portfolio-primary">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Coding Profiles */}
          <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Award className="text-portfolio-primary" />
              Competitive Programming Profiles
            </h3>

            <div className="space-y-4">
              {codingProfiles.map((profile, index) => (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="block bg-portfolio-dark p-4 rounded-lg border border-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-portfolio-primary">
                      {profile.platform}
                    </h4>
                    <Badge className="bg-portfolio-primary/20 text-portfolio-primary">
                      {profile.rank}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Username: {profile.username}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{profile.stats}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Other Achievements */}
          <div className="bg-portfolio-dark-purple p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Award className="text-portfolio-primary" />
              Notable Achievements
            </h3>

            {/* <ul className="space-y-4">
              {otherAchievements.map((achievement, index) => (
                <li
                  key={index}
                  className="bg-portfolio-dark p-4 rounded-lg border border-portfolio-primary/20 relative pl-6"
                >
                  <span className="absolute left-2 top-4 text-portfolio-primary">
                    •
                  </span>
                  <p className="text-gray-200">{achievement}</p>
                </li>
              ))}
            </ul> */}

            <ul className="space-y-4">
              {otherAchievements.map((achievement, index) => (
                <li
                  key={index}
                  className="bg-portfolio-dark p-4 rounded-lg border border-portfolio-primary/20 relative pl-6 hover:border-portfolio-primary/50 transition-colors"
                >
                  <span className="absolute left-2 top-4 text-portfolio-primary">•</span>
                  <p className="text-gray-200">
                    {achievement.text}
                    {achievement.link && (
                      <>
                        {" "}
                        [<a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-portfolio-primary underline hover:text-portfolio-primary/80"
                        >
                          {achievement.linkText}
                        </a>]
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
