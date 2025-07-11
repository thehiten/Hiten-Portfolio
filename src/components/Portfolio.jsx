import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaFilter } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";
import { Link } from "react-scroll";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "BlogForge Website",
      subtitle: "Full-Stack Blogging Platform",
      description: "Created a comprehensive full-stack blogging platform with an intuitive dashboard for users to create, read, update, and delete blog posts. Features secure JWT authentication and responsive design.",
      detailedFeatures: [
        "User authentication with JWT tokens",
        "CRUD operations for blog posts",
        "Responsive dashboard interface",
        "Secure user permissions system",
        "Real-time content management"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      category: "full-stack",
      date: "June 2024",
      status: "Completed",
      sourceCode: "https://github.com/thehiten/BlogForge",
      liveDemo: "#",
      image: "/public/reactjs.png",
      gradient: "from-purple-600 to-blue-600",
      techIcons: [
        <SiReact className="text-blue-400" />,
        <SiNodedotjs className="text-green-500" />,
        <SiMongodb className="text-green-600" />,
        <SiExpress className="text-gray-600" />
      ]
    },
    {
      id: 2,
      title: "BookCollect Website",
      subtitle: "Full-Stack Book Collection Platform",
      description: "Developed a comprehensive web application for organizing and managing book collections. Features user authentication, responsive design, and intuitive collection management interface.",
      detailedFeatures: [
        "Book collection organization system",
        "User authentication (login, logout, signup)",
        "JWT-based secure sessions",
        "Responsive React.js interface",
        "MongoDB database integration",
        "User-friendly collection management"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
      category: "full-stack",
      date: "January 2024",
      status: "Completed",
      sourceCode: "https://github.com/thehiten/BookCollect",
      liveDemo: "#",
      image: "/public/mongodb.jpg",
      gradient: "from-green-600 to-teal-600",
      techIcons: [
        <SiReact className="text-blue-400" />,
        <SiNodedotjs className="text-green-500" />,
        <SiMongodb className="text-green-600" />,
        <SiExpress className="text-gray-600" />
      ]
    },
    {
      id: 3,
      title: "VoteVerse Platform",
      subtitle: "Secure Digital Voting System",
      description: "Built a robust and secure voting platform enabling users to participate in polls and elections. Optimized backend performance and implemented comprehensive security measures.",
      detailedFeatures: [
        "Secure voting mechanism",
        "JWT-based authentication system",
        "Role-based access control",
        "Real-time poll participation",
        "30% improved API response time",
        "Caching and query optimization"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "REST APIs"],
      category: "backend",
      date: "October 2023",
      status: "Completed",
      sourceCode: "https://github.com/thehiten/VoteVerse",
      liveDemo: "#",
      image: "/public/node.png",
      gradient: "from-blue-600 to-purple-600",
      techIcons: [
        <SiNodedotjs className="text-green-500" />,
        <SiExpress className="text-gray-600" />,
        <SiMongodb className="text-green-600" />,
        <SiReact className="text-blue-400" />
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "full-stack", name: "Full-Stack", count: projects.filter(p => p.category === "full-stack").length },
    { id: "backend", name: "Backend", count: projects.filter(p => p.category === "backend").length },
    { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { label: "Projects Completed", value: "3+", icon: <FaCode /> },
    { label: "Technologies Used", value: "8+", icon: <SiReact /> },
    { label: "Lines of Code", value: "10K+", icon: <FaGithub /> },
    { label: "API Optimizations", value: "30%", icon: <SiNodedotjs /> }
  ];

  return (
    <div name="Portfolio" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="heading-2 text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing full-stack development expertise, 
            innovative solutions, and modern web technologies.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group modern-card hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 relative overflow-hidden`}>
                {/* Tech Icons Floating */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 text-white text-4xl">
                    {project.techIcons.map((icon, i) => (
                      <div
                        key={i}
                        className="animate-float opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                  <FaCalendarAlt />
                  {project.date}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.detailedFeatures.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                  {project.liveDemo !== "#" && (
                    <a
                      href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                      <FaExternalLinkAlt />
                      Live Demo
                </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-blue-100 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Link 
              to="Contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 cursor-pointer inline-block"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
