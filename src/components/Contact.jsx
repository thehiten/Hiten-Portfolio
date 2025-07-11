import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy, FaCheck, FaDownload, FaWhatsapp, FaTelegram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState('');

  // Typing animation for header
  const texts = ['Get In Touch', 'Let\'s Connect', 'Start a Project', 'Collaborate'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[textIndex];
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, textIndex, texts]);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500" />,
      title: "Email",
      value: "hiten.aggarwal005@gmail.com",
      link: "mailto:hiten.aggarwal005@gmail.com",
      description: "Send me an email anytime",
      copyable: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-green-500" />,
      title: "Phone",
      value: "+91 9319417534",
      link: "tel:+919319417534",
      description: "Call or text me",
      copyable: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaWhatsapp className="text-green-600" />,
      title: "WhatsApp",
      value: "+91 9319417534",
      link: "https://wa.me/919319417534",
      description: "Quick chat on WhatsApp",
      gradient: "from-green-600 to-green-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: "Location",
      value: "Delhi, India",
      link: "https://maps.google.com/?q=Delhi,India",
      description: "Available for remote work",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      title: "LinkedIn",
      value: "linkedin.com/in/hiten30",
      link: "https://www.linkedin.com/in/hiten30",
      description: "Let's connect professionally",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: <FaTelegram className="text-sky-500" />,
      title: "Telegram",
      value: "@hiten30",
      link: "https://t.me/hiten30",
      description: "Message me on Telegram",
      gradient: "from-sky-500 to-blue-500"
    }
  ];

  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Complete end-to-end web application development using modern MERN stack technologies, creating scalable and efficient solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      icon: "🚀"
    },
    {
      title: "Responsive Web Design",
      description: "Creating beautiful, mobile-first responsive designs that provide excellent user experience across all devices and screen sizes.",
      technologies: ["Tailwind CSS", "CSS3", "Bootstrap", "HTML5"],
      icon: "📱"
    },
    {
      title: "Backend API Development",
      description: "Building robust RESTful APIs, server-side logic, and seamless third-party service integrations for dynamic applications.",
      technologies: ["Node.js", "Express", "JWT", "OAuth", "REST APIs"],
      icon: "⚡"
    },
    {
      title: "Database Architecture",
      description: "Designing efficient database structures, optimization strategies, and implementing secure data management solutions.",
      technologies: ["MongoDB", "MySQL", "Firebase", "Database Design"],
      icon: "💾"
    }
  ];



  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Hiten Aggarwal
ORG:Full-Stack Developer
TEL:+919319417534
EMAIL:hiten.aggarwal005@gmail.com
URL:https://linkedin.com/in/hiten30
ADR:;;Delhi;India
NOTE:Full-Stack Developer specializing in MERN stack
END:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hiten-Aggarwal-Contact.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div name="Contact" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Animated Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="animate-pulse text-blue-500">|</span>
            </h1>
            {/* Floating icons */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-2xl sm:text-3xl animate-bounce">
              💬
            </div>
            <div className="absolute -top-2 -left-4 sm:-top-4 sm:-left-6 text-xl sm:text-2xl animate-bounce delay-300">
              ✨
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Ready to start your next project? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
          
          {/* Download Contact Card */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={downloadVCard}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base">Save Contact</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Contact Information & Services */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            {/* Contact Cards Grid */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 flex items-center gap-2">
                <span className="text-xl lg:text-2xl">🤝</span>
                Let's Connect
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-transparent"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative p-3 lg:p-5">
                      <div className="flex items-start justify-between mb-2 lg:mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm lg:text-base">
                              {info.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 font-medium text-xs lg:text-sm break-all lg:truncate">
                              {info.value}
                            </p>
                          </div>
                        </div>
                        
                        {/* Copy button for copyable fields */}
                        {info.copyable && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              copyToClipboard(info.value, info.title);
                            }}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex-shrink-0"
                          >
                            {copiedField === info.title ? (
                              <FaCheck className="text-green-500 text-xs lg:text-sm" />
                            ) : (
                              <FaCopy className="text-gray-500 text-xs lg:text-sm" />
                            )}
                          </button>
                        )}
                      </div>
                      
                      <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
                        {info.description}
                      </p>
                      
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center text-xs lg:text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      >
                        Connect Now →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services and Contact Form - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Services */}
              <div className="bg-white dark:bg-gray-800 rounded-lg lg:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 flex items-center gap-2 text-lg lg:text-xl">
                  <span className="text-xl lg:text-2xl">🚀</span>
                  Services I Offer
                </h3>
                
                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="group bg-gray-50 dark:bg-gray-700/50 rounded-lg lg:rounded-xl p-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-start gap-3 lg:gap-4">
                        <span className="text-xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{service.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-1 lg:gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-lg lg:rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 lg:p-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 flex items-center gap-2">
                  <span className="text-xl lg:text-2xl">💌</span>
                  Send Message
                </h2>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg animate-fadeIn">
                    <p className="text-green-800 dark:text-green-300 text-sm flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg animate-fadeIn">
                    <p className="text-red-800 dark:text-red-300 text-sm flex items-center gap-2">
                      <span className="text-lg">❌</span>
                      Sorry, there was an error. Please try again or contact me directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        👤 Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        📧 Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      📋 Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                    >
                      <option value="">Select a subject</option>
                      <option value="project">🚀 New Project</option>
                      <option value="collaboration">🤝 Collaboration</option>
                      <option value="job">💼 Job Opportunity</option>
                      <option value="consultation">💭 Consultation</option>
                      <option value="freelance">💻 Freelance Work</option>
                      <option value="other">📝 Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      💬 Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none group-hover:border-blue-300 dark:group-hover:border-blue-600"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formData.message.length}/1000 characters
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm lg:text-base">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-lg">✉️</span>
                        <span className="text-sm lg:text-base">Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Form Note */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    I typically respond within 24 hours. For urgent matters, feel free to call or WhatsApp me directly.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-blue-900/20 rounded-lg lg:rounded-2xl border border-green-200 dark:border-green-700 p-4 lg:p-6">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Currently Available</h3>
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                    Open to new opportunities and exciting projects
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 lg:gap-3 pt-4 border-t border-green-200 dark:border-green-700">
                <a
                  href="https://www.linkedin.com/in/hiten30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaLinkedin className="text-sm lg:text-base" />
                </a>
                <a
                  href="https://github.com/hiten30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaGithub className="text-sm lg:text-base" />
                </a>
                <a
                  href="https://wa.me/919319417534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp className="text-sm lg:text-base" />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-lg lg:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-sm lg:text-base">
                <span className="text-lg lg:text-xl">🕒</span>
                Working Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 lg:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">Mon - Fri</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">9:00 AM - 7:00 PM IST</p>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div className="flex justify-between items-center p-2 lg:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">Saturday</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM IST</p>
                  </div>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                </div>
                <div className="flex justify-between items-center p-2 lg:p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">Sunday</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Emergency only</p>
                  </div>
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-lg lg:rounded-2xl border border-blue-200 dark:border-blue-700 p-4 lg:p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-2 text-sm lg:text-base">
                <span className="text-lg lg:text-xl">📊</span>
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="text-center p-2 lg:p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg lg:text-2xl font-bold text-blue-600 dark:text-blue-400">24hrs</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Response Time</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg lg:text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Projects Done</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg lg:text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Satisfaction</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg lg:text-2xl font-bold text-orange-600 dark:text-orange-400">2+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-8 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg lg:rounded-2xl shadow-2xl p-6 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-lg lg:text-2xl xl:text-3xl font-bold mb-4">Prefer Direct Contact?</h3>
            <p className="mb-6 lg:mb-8 text-blue-100 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
              Skip the form and reach out directly for faster communication. I'm just one click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center max-w-lg mx-auto">
              <a 
                href="mailto:hiten.aggarwal005@gmail.com" 
                className="flex-1 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-4 lg:px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm lg:text-base"
              >
                <FaEnvelope />
                Email Me
              </a>
              <a 
                href="https://wa.me/919319417534" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-4 lg:px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm lg:text-base"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
