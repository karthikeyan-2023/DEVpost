import React from 'react';
import { useParams } from 'react-router-dom';
import { Github, Linkedin, Globe, Mail, MapPin, Calendar, Star, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { username } = useParams();

  const mockUser = {
    fullName: 'John Doe',
    username: 'johndoe',
    bio: 'Full-stack developer passionate about React, Node.js, and building scalable web applications. I love creating beautiful, functional user experiences.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'San Francisco, CA',
    joinDate: 'January 2022',
    githubUrl: 'https://github.com/johndoe',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    websiteUrl: 'https://johndoe.dev',
    email: 'john@example.com'
  };

  const mockProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      stars: 42,
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management application with team collaboration features. Built with Vue.js and Socket.io for real-time updates.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      stars: 28,
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/johndoe/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts. Uses OpenWeatherMap API.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS Grid'],
      stars: 15,
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A markdown-based blog platform with syntax highlighting and responsive design. Built with Next.js.',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'Markdown', 'Prism.js', 'Styled Components'],
      stars: 31,
      liveUrl: 'https://blog-platform-demo.com',
      githubUrl: 'https://github.com/johndoe/blog-platform',
      featured: false
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Express.js',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'AWS', 'Docker',
    'Git', 'Tailwind CSS', 'SCSS', 'Jest', 'Cypress', 'Webpack'
  ];

  const featuredProjects = mockProjects.filter(project => project.featured);
  const otherProjects = mockProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <img
              src={mockUser.avatar}
              alt={mockUser.fullName}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{mockUser.fullName}</h1>
              <p className="text-xl mb-6 opacity-90">{mockUser.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{mockUser.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Joined {mockUser.joinDate}</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href={mockUser.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={mockUser.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={mockUser.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Globe className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${mockUser.email}`}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project.stars}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{project.stars}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;