import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

const Contact = () => {
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
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's Work Together! I'm open for new opportunities – especially ambitious or large projects.
              However, my inbox is always open. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Send me an email</p>
            <a
              href="mailto:dilshanyasantha1999@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              dilshanyasantha1999@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 mb-4">Based in</p>
            <p className="text-gray-700 font-medium">Sri Lanka</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Social</h3>
            <p className="text-gray-600 mb-4">Connect with me</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/DilshanAbeykoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/dilshan-abeykoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              READY TO START A PROJECT?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging AI projects. 
              Let's collaborate and bring your intelligent solutions to life!
            </p>
            <motion.a
              href="mailto:dilshanyasantha1999@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
              <Send size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
