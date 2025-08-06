import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Home, User, GraduationCap, Briefcase, FolderOpen, Award, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Education', path: '/education', icon: GraduationCap },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Certifications', path: '/certifications', icon: Award },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Dilshan Abeykoon
                </span>
                <span className="text-sm text-gray-500 font-medium">
                 
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon size={18} />
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full"
                          layoutId="activeIndicator"
                          style={{ x: '-50%' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              
              {/* CV Download Button */}
              <motion.a
                href="/Dilshan CV.pdf"
                download="Dilshan_Abeykoon_CV.pdf"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="ml-4 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon size={20} />
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.a
                  href="/Dilshan CV.pdf"
                  download="Dilshan_Abeykoon_CV.pdf"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
