
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="mb-6">
            <h1 className="text-2xl font-bold">
              <span className="text-portfolio-primary">Hitarth's </span>
              <span className="text-white">Portfolio</span>
            </h1>
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a href="#about" className="text-gray-400 hover:text-portfolio-primary transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-portfolio-primary transition-colors">Projects</a>
            <a href="#achievements" className="text-gray-400 hover:text-portfolio-primary transition-colors">Achievements</a>
            <a href="#contact" className="text-gray-400 hover:text-portfolio-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4 mb-6">
            {/* <a href="#" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a> */}
            <a href="#" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                <path d="M6 2v16"></path>
                <path d="M18 2v16"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hitarth-thakkar/" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/HitarthThakkar" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
          
          <p className="text-gray-400 text-center">
            &copy; {currentYear} Hitarth Thakkar. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Designed with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
