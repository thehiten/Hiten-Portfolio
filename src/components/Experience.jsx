import React, { useState } from "react";
import { FaBriefcase, FaCode, FaAward, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaFilter, FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Link } from "react-scroll";

function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");

  const experiences = [
    {
      id: 1,
      company: "Reyansh International Pvt Ltd",
      position: "Full Stack Developer Intern",
      duration: "20 May 2024 – Present",
      location: "Delhi, India",
      type: "Internship",
      category: "internship",
      description: "Developing and maintaining enterprise-level business management systems including CRM, inventory management, and dispatch operations for international trade operations at Reyansh International Pvt Ltd.",
      keyAchievements: [
        "Designed and developed comprehensive CRM system with lead management, customer tracking, and sales pipeline",
        "Built real-time inventory management system with stock alerts, batch tracking, and automated reordering",
        "Implemented automated dispatch system with route optimization, delivery tracking, and logistics coordination",
        "Created interactive analytics dashboard with business intelligence reports and performance metrics",
        "Developed multi-module ERP system integrating finance, operations, and customer management",
        "Integrated international payment gateways supporting multiple currencies and payment methods",
        "Improved operational efficiency by 35% through process automation and system integration",
        "Implemented role-based access control and security protocols for enterprise-level data protection"
      ],
      projects: [
        {
          name: "Enterprise CRM & Business Management System",
          description: "Full-scale business management solution with integrated CRM, sales tracking, customer management, and business intelligence modules",
          role: "Full-Stack Developer & System Architect"
        },
        {
          name: "Smart Inventory Management Platform",
          description: "Advanced inventory system with real-time tracking, automated stock alerts, batch management, supplier integration, and reporting",
          role: "Lead Developer"
        },
        {
          name: "Automated Dispatch & Logistics System",
          description: "Comprehensive dispatch management with route optimization, delivery tracking, driver management, and customer notifications",
          role: "Backend Developer"
        },
        {
          name: "Business Analytics Dashboard",
          description: "Interactive dashboard with real-time analytics, KPI monitoring, sales reports, and business intelligence insights",
          role: "Frontend Developer"
        }
      ],
      technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "MySQL", "REST APIs", "Chart.js", "JWT", "OAuth", "Payment Gateway APIs", "Socket.io"],
      gradient: "from-emerald-600 to-teal-600",
      techIcons: [
        <SiJavascript className="text-yellow-500" />,
        <SiReact className="text-blue-400" />,
        <SiNodedotjs className="text-green-500" />,
        <SiMongodb className="text-green-600" />
      ]
    },
    {
      id: 2,
      company: "TexxeSoft",
      position: "Software Engineer Intern",
      duration: "May 2024 – July 2024",
      location: "Faridabad, Haryana",
      type: "Internship",
      category: "internship",
      description: "Developed a comprehensive web-based chat application for user communication, leading the development team and implementing robust security features.",
      keyAchievements: [
        "Led a development team throughout the project lifecycle",
        "Implemented user authentication with the MERN stack for secure access",
        "Integrated JWT and OAuth protocols for enhanced security",
        "Reduced unauthorized access by 40%",
        "Optimized application performance and user experience"
      ],
      projects: [
        {
          name: "Chat Application",
          description: "Web-based chat application for user communication",
          role: "Lead Developer"
        }
      ],
      technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      gradient: "from-blue-600 to-purple-600",
      techIcons: [
        <SiJavascript className="text-yellow-500" />,
        <SiReact className="text-blue-400" />,
        <SiNodedotjs className="text-green-500" />,
        <SiMongodb className="text-green-600" />
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      category: "project",
      date: "March 2024",
      gradient: "from-green-600 to-blue-600",
      highlights: ["Payment gateway integration", "Inventory management", "User authentication"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern UI/UX",
      technologies: ["React", "Tailwind CSS", "Vite"],
      status: "Live",
      category: "project",
      date: "February 2024",
      gradient: "from-purple-600 to-pink-600",
      highlights: ["Dark/Light theme", "Responsive design", "Smooth animations"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      status: "In Progress",
      category: "project",
      date: "January 2024",
      gradient: "from-orange-600 to-red-600",
      highlights: ["Real-time collaboration", "Drag & drop interface", "Team management"]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Internet of Things",
      organization: "Technology Institute",
      date: "2023",
      description: "Scored in the 86th percentile, demonstrating mastery of IoT concepts and methodologies.",
      category: "certification",
      gradient: "from-violet-600 to-purple-600",
      icon: "🔗"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: experiences.length + projects.length + certifications.length },
    { id: "internship", name: "Experience", count: experiences.length },
    { id: "project", name: "Projects", count: projects.length },
    { id: "certification", name: "Certifications", count: certifications.length }
  ];

  const allItems = [
    ...experiences,
    ...projects,
    ...certifications
  ];

  const filteredItems = activeFilter === "all" 
    ? allItems 
    : allItems.filter(item => item.category === activeFilter);

  const stats = [
    { label: "Years Experience", value: "2+", icon: <FaBriefcase />, color: "text-blue-600" },
    { label: "Projects Completed", value: "8+", icon: <FaCode />, color: "text-green-600" },
    { label: "Technologies", value: "12+", icon: <SiReact />, color: "text-purple-600" },
    { label: "Certifications", value: "1", icon: <FaAward />, color: "text-orange-600" }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Python", "Java"] },
    { category: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Figma"] }
  ];

  const education = {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Chandigarh University",
    duration: "May 2021 – May 2025",
    location: "Mohali, Punjab",
    highlights: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management Systems", "Software Engineering", "Web Technologies", "Computer Networks"]
  };

  return (
    <div name="Experience" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="heading-2 text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development, showcasing hands-on experience 
            in building real-world applications and leading development projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fadeInUp">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaFilter className="text-sm" />
                {category.name}
                <span className="bg-gray-200 dark:bg-gray-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Experience/Projects/Certifications Cards */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8 animate-fadeInUp">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group modern-card hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} rounded-lg mb-6 relative overflow-hidden`}>
                    {/* Tech Icons or Icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.techIcons ? (
                        <div className="grid grid-cols-2 gap-4 text-white text-4xl">
                          {item.techIcons.map((icon, i) => (
                            <div
                              key={i}
                              className="animate-float opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                              style={{ animationDelay: `${i * 0.5}s` }}
                            >
                              {icon}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-6xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                          {item.icon || "💼"}
                        </div>
                      )}
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-white text-xs rounded-full shadow-lg ${
                        item.status === 'Live' || item.status === 'Completed' ? 'bg-green-500' :
                        item.status === 'In Progress' ? 'bg-yellow-500' :
                        item.type ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        {item.status || item.type || 'Certified'}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                      <FaCalendarAlt />
                      {item.date || item.duration}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title || item.position}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {item.company || item.organization || "Personal Project"}
                      </p>
                      {item.location && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                          <FaMapMarkerAlt />
                          {item.location}
                        </p>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Features/Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        {item.keyAchievements ? 'Key Achievements:' : 'Key Features:'}
                      </h4>
                      <ul className="space-y-1">
                        {(item.keyAchievements || item.highlights || []).slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {item.technologies && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}


                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills */}
            <div className="modern-card animate-fadeInRight">
              <div className="flex items-center gap-3 mb-6">
                <FaUsers className="text-2xl text-green-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Technical Skills</h3>
              </div>
              
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="modern-card animate-fadeInRight">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-2xl text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">{education.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{education.field}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{education.institution}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{education.location} • {education.duration}</p>
                <div>
                  <h5 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-1">
                    {education.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="modern-card animate-fadeInRight bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Currently Available</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Seeking new opportunities in full-stack development and software engineering.
                </p>
                <Link 
                  to="Contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-70}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
