import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large Yellow Circle */}
        <motion.div
          className="absolute w-96 h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-80"
          style={{ 
            right: '-200px', 
            top: '20%',
            transform: 'translate(50%, -50%)'
          }}
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Medium Orange Circle */}
        <motion.div
          className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-70"
          style={{ 
            right: '10%', 
            bottom: '10%' 
          }}
          animate={{ 
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Small Blue Circle */}
        <motion.div
          className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-60"
          style={{ 
            left: '15%', 
            bottom: '20%' 
          }}
          animate={{ 
            x: [0, 10, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Social Media Icons - Left Side */}
      <motion.div 
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="https://github.com/DilshanAbeykoon"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-100 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/dilshan-abeykoon"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-100 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:dilshan@example.com"
          className="w-12 h-12 bg-gray-100 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          <Mail size={20} />
        </a>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side - Profile and Content */}
            <motion.div variants={itemVariants} className="space-y-8 lg:pl-20">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start mb-8">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-gray-200">
                    <img 
                      src="/dilshan-profile.jpg" 
                      alt="Dilshan Abeykoon" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm font-medium">Sri Lanka</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  G'day, I'm <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Dilshan Abeykoon,
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-light text-red-500">
                  A Machine Learning Engineer
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  I'm a skilled AI engineer with expertise in machine learning and deep learning. 
                  Using cutting-edge technologies, I create intelligent solutions that solve real-world problems. 
                  My expertise lies in developing AI applications for diverse domains, ensuring that businesses 
                  have access to efficient and innovative solutions.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  With a deep understanding of the AI development process, I am able to deliver high-quality 
                  results that exceed expectations. If you're looking for a reliable ML engineer to bring your 
                  AI ideas to life, I'm here to help!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="mailto:dilshan@example.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact me!
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Large Text Display */}
            <motion.div 
              variants={itemVariants} 
              className="hidden lg:flex flex-col justify-center items-end text-right"
            >
              <motion.div
                className="text-8xl xl:text-9xl font-bold text-gray-300 leading-none opacity-30"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                ML
              </motion.div>
              <motion.div
                className="text-6xl xl:text-7xl font-light text-gray-400 mt-4 opacity-20"
                animate={{ 
                  y: [0, -10, 0, 10, 0] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                Engineer
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Technologies Strip */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gray-100/90 backdrop-blur-sm py-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'React.js', 'AWS', 'Docker'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="flex items-center gap-1 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <span className="text-blue-500">▹</span>
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home
