import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Computer Science with Artificial Intelligence',
      school: 'Coventry University',
      location: 'United Kingdom',
      duration: 'May 2024 - Jun 2025',
      gpa: '77% - First Class Honours',
      description: 'Advanced studies in Computer Science with specialized focus on Artificial Intelligence, machine learning algorithms, neural networks, and AI ethics. Achieved First Class Honours with 77% final grade.',
      achievements: [
        'First Class Honours with 77% final grade',
        'Specialized in AI and Machine Learning',
        'Advanced Neural Networks and Deep Learning',
        'AI Ethics and Responsible AI Development'
      ],
      logo: '🎓'
    },
    {
      degree: 'HND in Computer Science with Artificial Intelligence',
      school: 'National Institute of Business Management',
      location: 'Sri Lanka',
      duration: 'Mar 2022 - Apr 2024',
      gpa: '3.63/4.0',
      description: 'Comprehensive foundation in Computer Science with specialized modules in Artificial Intelligence. Achieved excellent GPA of 3.63, building strong fundamentals in programming, data structures, and AI concepts.',
      achievements: [
        'Outstanding GPA of 3.63/4.0',
        'Strong foundation in AI and ML concepts',
        'Proficient in multiple programming languages',
        'Practical AI project implementations'
      ],
      logo: '🏫'
    }
  ]

  const courses = [
    'Artificial Intelligence Fundamentals',
    'Machine Learning Algorithms',
    'Deep Learning & Neural Networks',
    'Computer Vision',
    'Natural Language Processing',
    'Data Structures & Algorithms',
    'Python Programming',
    'Database Management Systems',
    'Software Engineering',
    'AI Ethics & Responsible AI',
    'Statistical Analysis',
    'Big Data Analytics'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative mb-12 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="card p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{edu.logo}</div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-primary-600">{edu.degree}</h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-2">{edu.school}</h4>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award size={18} className="text-primary-600" />
                        Key Achievements
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Relevant Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="text-primary-600" />
            Relevant Coursework
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-800 font-medium">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Education doesn't stop at graduation. I'm committed to lifelong learning through 
              online courses, workshops, conferences, and hands-on projects. The tech industry 
              evolves rapidly, and staying current with new technologies and best practices is 
              essential for delivering innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
