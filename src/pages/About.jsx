import { motion } from 'framer-motion'
import { Brain, Code, Coffee, BookOpen } from 'lucide-react'

const About = () => {
  const interests = [
    { icon: Brain, title: 'Machine Learning', description: 'Building intelligent systems' },
    { icon: Code, title: 'Programming', description: 'Creating efficient algorithms' },
    { icon: Coffee, title: 'Coffee', description: 'Fuel for creativity' },
    { icon: BookOpen, title: 'Research', description: 'Exploring new AI frontiers' },
  ]

  const timeline = [
    {
      year: '2022-2024',
      title: 'HND in Computer Science with AI',
      description: 'Completed Higher National Diploma in Computer Science with Artificial Intelligence at NIBM with an impressive 3.6 GPA, building a strong foundation in AI and ML concepts.'
    },
    {
      year: '2023',
      title: 'First Commercial Project',
      description: 'Successfully delivered my first commercial project at Ruhunu Foods PVT Ltd in Kundasale, applying AI solutions to real-world business challenges and gaining valuable industry experience.'
    },
    {
      year: 'Aug 2024',
      title: 'ML Internship at Engenia Solutions',
      description: 'Secured a Machine Learning Internship opportunity at Engenia Solutions Australia, working on cutting-edge AI projects and expanding my practical ML expertise.'
    },
    {
      year: '2024-2025',
      title: 'Final Year Degree & Career Advancement',
      description: 'Started final year degree at Coventry University UK while being promoted to Junior Machine Learning Engineer at Engenia Solutions after successful 6-month internship performance.'
    },
    {
      year: '2025',
      title: 'First Class Honours Graduate',
      description: 'Successfully completed degree from Coventry University UK with First Class Honours, now advancing expertise as a Junior ML Engineer in cutting-edge AI technologies.'
    }
  ]

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/dilshan-profile.jpg" 
                    alt="Dilshan Abeykoon - Machine Learning Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Hello! I'm Dilshan</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Machine Learning Engineer with a love for creating intelligent, 
                impactful solutions. My journey into AI and ML started with curiosity about how 
                machines can learn and has evolved into a deep passion for solving complex problems 
                through artificial intelligence.
              </p>
              <p>
                When I'm not training models or analyzing data, you can find me exploring new 
                AI technologies, contributing to open source projects, or enjoying a good cup 
                of coffee while reading about the latest developments in machine learning and AI.
              </p>
              <p>
                I believe in building AI solutions that are not only technically sound but also 
                ethical and beneficial to society. Every project is an opportunity to learn 
                something new and push the boundaries of what's possible with AI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <interest.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
