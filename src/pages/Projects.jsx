import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, ExternalLink, Search, Filter } from 'lucide-react'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Image Carousel Component
  const ImageCarousel = ({ images, title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
      if (images && images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(interval)
      }
    }, [images])

    if (!images || images.length === 0) {
      return (
        <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🖼️</div>
            <div className="text-sm text-gray-500">No images available</div>
          </div>
        </div>
      )
    }

    return (
      <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600">
        <motion.img 
          key={currentImageIndex}
          src={images[currentImageIndex]} 
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center hidden">
          <div className="text-center">
            <div className="text-6xl mb-2">🖼️</div>
            <div className="text-sm text-gray-500">Image not available</div>
          </div>
        </div>
        
        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>
    )
  }

  const projects = [
    {
      id: 1,
      title: 'Dehumidifier Automation System',
      description: 'A comprehensive IoT-based automation system that monitors and controls dehumidifiers across multiple zones. The system features real-time environmental monitoring, automated control logic, and a responsive web dashboard for remote management. Built with industrial-grade sensors and microcontrollers for reliable 24/7 operation.',
      image: '/dehumidifier-dashboard.jpg',
      category: 'IoT & Automation',
      technologies: ['Arduino/ESP32', 'React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'Chart.js', 'IoT Sensors'],
      github: 'https://github.com/dilshan-abeykoon/dehumidifier-automation',
      demo: 'https://dehumidifier-demo.com',
      featured: true,
      status: 'Completed',
      highlights: [
        'Real-time monitoring of humidity, temperature, and air quality',
        'Automated dehumidifier control with smart scheduling',
        'Web-based dashboard with data visualization',
        'Multi-zone environmental management',
        'Energy efficiency optimization algorithms'
      ],
      images: ['/dehumidifier-dashboard.jpg', '/dehumidifier-hardware.jpg']
    },
    {
      id: 2,
      title: 'Agri Drone with Smart Fertilizer Detection',
      description: 'An advanced drone-based monitoring system designed to assess paddy field health and optimize fertilizer application. The system uses Azure Custom Vision AI to analyze aerial imagery and detect undernourished crop areas, enabling precision agriculture through targeted fertilizer application. This innovative solution helps improve crop yield while reducing waste and environmental impact.',
      image: '/agri-drone-team.jpg',
      category: 'AI & Agriculture',
      technologies: ['Azure Custom Vision', 'Drone Technology', 'Computer Vision', 'Machine Learning', 'Precision Agriculture', 'Aerial Imaging', 'Python', 'Azure Cloud'],
      github: 'https://github.com/dilshan-abeykoon/agri-drone',
      demo: 'https://agri-drone-demo.com',
      featured: true,
      status: 'Completed',
      highlights: [
        'AI-powered crop health assessment from aerial imagery',
        'Azure Custom Vision model for detecting undernourished areas',
        'Automated flight path planning for comprehensive field coverage',
        'Precision fertilizer application recommendations',
        'Real-time field monitoring and data visualization',
        'Reduced fertilizer waste and improved crop yield'
      ],
      images: ['/agri-drone-team.jpg', '/agri-drone-map.jpg', '/agri-drone-dashboard.jpg']
    },
    {
      id: 3,
      title: 'Custom Deep Learning Model Deployment – Audio Classification',
      description: 'A comprehensive deep learning solution for audio classification featuring a custom multiclass classification model built with TensorFlow Keras. The system incorporates advanced data augmentation techniques including noise addition and pitch shifting, along with regularization methods like L2 and dropout for improved generalization. Deployed as a Flask web application on AWS for real-time audio prediction and analysis.',
      image: '/audio-classification-results.png',
      category: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'Keras', 'Flask', 'AWS', 'Python', 'Data Augmentation', 'Deep Learning', 'Audio Processing'],
      github: 'https://github.com/dilshan-abeykoon/audio-classification',
      demo: 'https://audio-classifier-demo.com',
      featured: true,
      status: 'Completed',
      highlights: [
        'Custom multiclass classification model using TensorFlow Keras',
        'Advanced data augmentation: noise addition and pitch shifting',
        'Regularization techniques: L2 regularization and dropout layers',
        'Real-time audio prediction with Flask web application',
        'Cloud deployment on AWS for scalable inference',
        'Improved model generalization through sophisticated preprocessing'
      ],
      images: ['/audio-classification-results.png']
    },
    {
      id: 4,
      title: 'Enterprise Employee Management System',
      description: 'A production-ready, enterprise-grade employee management platform that streamlines HR operations and enhances organizational efficiency. Built with modern full-stack architecture featuring Django REST Framework backend and responsive ReactJS frontend, this system revolutionizes how companies manage their workforce with automated workflows, real-time analytics, and seamless user experience that reduces administrative overhead by 60%.',
      image: '/employee-management-dashboard.png',
      category: 'Full Stack',
      technologies: ['Django', 'Django REST Framework', 'ReactJS', 'Axios', 'CORS', 'PostgreSQL', 'Redux', 'Material-UI', 'JWT Authentication'],
      github: 'https://github.com/dilshan-abeykoon/employee-management-system',
      demo: 'https://employee-management-demo.com',
      featured: true,
      status: 'Completed',
      highlights: [
        'Enterprise-grade Django REST API with robust authentication and authorization',
        'Responsive ReactJS frontend with state-driven components and real-time updates',
        'Advanced HTTP request management using Axios with optimized API integration',
        'Comprehensive CORS configuration ensuring secure cross-origin communication',
        'Scalable employee portal with leave management, salary tracking, and performance metrics',
        'Automated HR workflows reducing manual processing time by 60%',
        'Role-based access control with multi-level user permissions',
        'Real-time dashboard analytics for strategic HR decision-making'
      ],
      images: ['/employee-management-login.png', '/employee-management-dashboard.png']
    },
    {
      id: 5,
      title: 'AI-Powered Bee Harvest Estimation via Thermal Imaging',
      description: 'An innovative computer vision solution for precision beekeeping that revolutionizes hive monitoring and honey harvest estimation. This cutting-edge system leverages advanced object detection algorithms including YOLO and Fast R-CNN to analyze thermal imagery of bee colonies, enabling beekeepers to optimize harvest timing and maximize yield while minimizing hive disruption through non-invasive monitoring techniques.',
      image: '/bee-detection-thermal.png',
      category: 'AI & Machine Learning',
      technologies: ['YOLO', 'Fast R-CNN', 'Computer Vision', 'Thermal Imaging', 'COCO Dataset', 'OpenCV', 'PyTorch', 'Data Annotation'],
      github: 'https://github.com/dilshan-abeykoon/bee-harvest-detection',
      demo: 'https://bee-detection-demo.com',
      featured: true,
      status: 'Completed',
      highlights: [
        'Advanced object detection pipeline using YOLO and Fast R-CNN architectures',
        'Specialized thermal image analysis for non-invasive bee colony monitoring',
        'Custom COCO-format dataset annotation of brood boxes and bee activity patterns',
        'Precision bounding box detection for accurate hive assessment',
        'Significant accuracy improvement from 68% to 75% through systematic optimization',
        'Hyperparameter tuning and model architecture simplification for enhanced performance',
        'Real-time thermal imaging processing for immediate harvest readiness assessment',
        'Scalable solution for commercial beekeeping operations'
      ],
      images: ['/bee-detection-thermal.png', '/bee-detection-analysis.png']
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'AI & Machine Learning', 'IoT & Automation']

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work, from web applications to APIs and everything in between
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 shadow-md border border-gray-200 dark:border-gray-600">
                    <ImageCarousel 
                      images={project.images || [project.image]} 
                      title={project.title} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Image Showcase */}
                <div className="mb-6">
                  <ImageCarousel 
                    images={project.images || [project.image]} 
                    title={project.title} 
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="text-gray-600 dark:text-gray-400" size={20} />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="card p-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 shadow-md border border-gray-200 dark:border-gray-600">
                    <ImageCarousel 
                      images={project.images || [project.image]} 
                      title={project.title} 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description.slice(0, 120)}...
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
            <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects. 
              Let's collaborate and bring your ideas to life!
            </p>
            <motion.a
              href="mailto:john@example.com"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
