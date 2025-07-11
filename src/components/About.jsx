import React from "react";
import { FaGraduationCap, FaAward, FaCertificate, FaLanguage, FaHeart } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";
import { FaCode, FaDatabase, FaGithub } from "react-icons/fa";

function About() {
  const skills = {
    languages: [
      { name: "JavaScript", icon: <SiJavascript />, level: 90, color: "text-yellow-500" },
      { name: "Python", icon: <DiPython />, level: 85, color: "text-blue-500" },
      { name: "Java", icon: <DiJava />, level: 80, color: "text-red-500" },
      { name: "C/C++", icon: <FaCode />, level: 75, color: "text-blue-600" },
    ],
    frontend: [
      { name: "React.js", icon: <SiReact />, level: 90, color: "text-blue-400" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "text-black dark:text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "text-cyan-500" },
      { name: "HTML/CSS", icon: <FaCode />, level: 95, color: "text-orange-500" },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 85, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, level: 85, color: "text-gray-600" },
      { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-600" },
      { name: "MySQL", icon: <FaDatabase />, level: 75, color: "text-blue-600" },
    ]
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Artificial Intelligence & Machine Learning"
  ];

  const achievements = [
    {
      title: "50% University Scholarship",
      description: "Awarded academic scholarship from Chandigarh University and Central Sector Scheme of Scholarships for College and University Students",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      title: "NCC A Certificate (Navy)",
      description: "Enhanced team performance and leadership skills through practical naval training scenarios",
      icon: <FaCertificate className="text-blue-500" />
    }
  ];

  const languages = [
    { name: "Hindi", level: "Full Professional Proficiency" },
    { name: "English", level: "Full Professional Proficiency" }
  ];

  const interests = [
    "Problem-solving with computer science",
    "Innovation and creative solutions",
    "Full-Stack Development",
    "Software Architecture",
    "Open Source Contribution"
  ];

  return (
    <div name="About" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="heading-2 text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Hiten, a passionate full-stack web developer specializing in the MERN stack. 
            With a strong foundation in JavaScript and a keen interest in building interactive 
            and dynamic web applications, I strive to deliver efficient and scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="modern-card animate-fadeInLeft">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-2xl text-blue-600" />
                <h2 className="heading-3 text-gray-900 dark:text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 pb-4">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Chandigarh University</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">Mohali, Punjab</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expected Graduation: May 2025</p>
                </div>
                
                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">SR SHREERAM MODEL HIGH SCHOOL</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Class 12, PCM</p>
                  <p className="text-gray-600 dark:text-gray-400">Faridabad, Haryana</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">94% Score</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="modern-card animate-fadeInLeft">
              <div className="flex items-center gap-3 mb-6">
                <FaAward className="text-2xl text-yellow-500" />
                <h2 className="heading-3 text-gray-900 dark:text-white">Achievements</h2>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-2xl mt-1">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="modern-card animate-fadeInLeft">
              <div className="flex items-center gap-3 mb-6">
                <FaLanguage className="text-2xl text-purple-600" />
                <h2 className="heading-3 text-gray-900 dark:text-white">Languages</h2>
              </div>
              
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{lang.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="modern-card animate-fadeInRight">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-2xl text-green-600" />
                <h2 className="heading-3 text-gray-900 dark:text-white">Technical Skills</h2>
              </div>
              
              <div className="space-y-6">
                {/* Programming Languages */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Programming Languages</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.languages.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.frontend.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Backend & Database</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.backend.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div className="modern-card animate-fadeInRight">
              <div className="flex items-center gap-3 mb-6">
                <FaCertificate className="text-2xl text-indigo-600" />
                <h2 className="heading-3 text-gray-900 dark:text-white">Relevant Coursework</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="modern-card animate-fadeInRight">
              <div className="flex items-center gap-3 mb-6">
                <FaHeart className="text-2xl text-red-500" />
                <h2 className="heading-3 text-gray-900 dark:text-white">Interests</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
