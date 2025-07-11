import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaPlay, FaCode, FaRocket } from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiNextdotjs, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.jpg";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const techStack = [
    { 
      icon: <DiMongodb className="text-green-500" />, 
      name: "MongoDB", 
      category: "Database",
      delay: "0s"
    },
    { 
      icon: <SiExpress className="text-gray-600 dark:text-gray-400" />, 
      name: "Express.js", 
      category: "Backend",
      delay: "0.2s"
    },
    { 
      icon: <SiReact className="text-blue-500" />, 
      name: "React.js", 
      category: "Frontend",
      delay: "0.4s"
    },
    { 
      icon: <SiNodedotjs className="text-green-600" />, 
      name: "Node.js", 
      category: "Runtime",
      delay: "0.6s"
    },
    { 
      icon: <SiTailwindcss className="text-cyan-500" />, 
      name: "Tailwind CSS", 
      category: "Styling",
      delay: "0.8s"
    },
    { 
      icon: <SiNextdotjs className="text-black dark:text-white" />, 
      name: "Next.js", 
      category: "Framework",
      delay: "1s"
    },
    { 
      icon: <SiJavascript className="text-yellow-500" />, 
      name: "JavaScript", 
      category: "Language",
      delay: "1.2s"
    }
  ];

  const achievements = [
    { number: "3+", label: "Projects", subtext: "Completed", icon: <FaCode />, color: "text-blue-500" },
    { number: "2+", label: "Months", subtext: "Experience", icon: <FaRocket />, color: "text-green-500" },
    { number: "7+", label: "Technologies", subtext: "Mastered", icon: <HiLightningBolt />, color: "text-purple-500" },
    { number: "50%", label: "Scholarship", subtext: "Achieved", icon: <HiSparkles />, color: "text-orange-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hiten_Aggarwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div name="Home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-500/20 dark:bg-blue-400/20 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Interactive Mouse Glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative pt-8 pb-20">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-700/50 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  👋 Available for opportunities
                </span>
                <HiSparkles className="text-yellow-500 animate-pulse" />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="heading-1 text-gray-900 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="relative">
                    <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Hiten Aggarwal
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-scale-x"></div>
                  </span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
                  <span>A passionate</span>
                  <div className="relative">
              <ReactTyped
                      className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      strings={[
                        "Full-Stack Developer",
                        "MERN Stack Expert", 
                        "Problem Solver",
                        "Software Engineer",
                        "Tech Enthusiast"
                      ]}
                      typeSpeed={50}
                      backSpeed={30}
                loop={true}
              />
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
                  </div>
                </div>
            </div>

              {/* Description */}
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                I specialize in building{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400 relative">
                  full-stack web applications
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
                </span>{" "}
                using the MERN stack. Transforming ideas into{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400 relative">
                  scalable digital solutions
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 rounded-full"></div>
                </span>{" "}
                with modern technologies and best practices.
              </p>

              {/* Quick Contact */}
              <div className="flex flex-wrap gap-4 text-sm">
                <a 
                  href="mailto:hiten.aggarwal005@gmail.com" 
                  className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                >
                  <FaEnvelope className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    hiten.aggarwal005@gmail.com
                  </span>
                </a>
                <a 
                  href="tel:+919319417534" 
                  className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                >
                  <FaPhone className="text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                    +91 9319417534
                  </span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#Contact" 
                  className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FaEnvelope className="group-hover:scale-110 transition-transform" />
                    Let's Connect
                  </span>
                </a>
                
                <button 
                  onClick={downloadResume}
                  className="group px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FaDownload className="group-hover:bounce transition-transform" />
                    Resume
                  </span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect with me:</span>
                <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/hiten30"
                      target="_blank"
                      rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl group-hover:rotate-12" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  >
                    <FaGithub className="text-xl group-hover:rotate-12" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile & Tech Stack */}
            <div className={`flex flex-col items-center space-y-12 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              
              {/* Profile Image Section */}
              <div className="relative group">
                {/* Animated Background Rings */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-xl animate-pulse-custom"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-30 blur-lg animate-float"></div>
                
                {/* Main Profile Container */}
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src={pic}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Hiten Aggarwal - Full Stack Developer"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg animate-bounce-slow">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-float">
                    <SiReact className="text-2xl text-white animate-spin-slow" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl animate-float" style={{animationDelay: '1s'}}>
                    <SiNodedotjs className="text-2xl text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '2s'}}>
                    <SiJavascript className="text-xl text-white" />
                  </div>
                </div>
              </div>

              {/* Tech Stack Showcase */}
              <div className="w-full max-w-md">
                <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Tech Stack I Work With
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: tech.delay }}
                    >
                      <div className="text-center space-y-2">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {tech.category}
                        </p>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className={`mt-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-4xl ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
