import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Purple/Violet circular gradient background */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"> */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-portfolio-primary/20 blur-[80px] opacity-70"></div> */}
      {/* </div> */}

      {/* BACKGROUND CIRCLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark violet circle - upper left-ish */}
        <div className="absolute w-[300px] h-[300px] bg-blue-700 opacity-80 blur-[150px] rounded-full top-[15%] left-[29%]" />

        {/* Light violet circle - lower right-ish */}
        <div className="absolute w-[300px] h-[300px] bg-purple-700 opacity-80 blur-[150px] rounded-full bottom-[8%] right-[29%]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="avatar-border mb-8">
            <Avatar className="w-40 h-40 md:w-56 md:h-56">
              <AvatarImage
                src="/img/third2.png"
                alt="Profile"
                className="object-cover bg-gray-900"
              />
              <AvatarFallback className="bg-portfolio-dark-purple">
                HT
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-portfolio-primary">
            Hitarth Thakkar
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white">
            Aspiring Software Engineer
          </h2>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 text-lg">
            Final-year B.Tech-CSE student at IIIT Vadodara, passionate about building scalable, efficient software systems.
            Aspiring to solve real-world challenges through code.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              className="bg-portfolio-primary hover:bg-portfolio-accent text-white py-2 px-6 rounded-md"
            >
              <a href="https://drive.google.com/file/d/1GKM8t81jsPVYSpVJWygqUxGDNLbPRr10/view?usp=drive_link">My Resume</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 hover:text-portfolio-primary transition-colors"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
