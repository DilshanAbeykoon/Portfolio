import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Power Platform Fundamentals',
      issuer: 'Microsoft',
      date: 'June 2024',
      credential: 'COURSERA-MPP-2024',
      credentialUrl: 'https://coursera.org/share/24d1e198e7b93d73b80b3a7f4d56dc37',
      description: 'Comprehensive understanding of Microsoft Power Platform components including Power Apps, Power Automate, Power BI, and Power Virtual Agents for business automation and analytics.',
      logo: '⚡',
      color: 'from-purple-500 to-purple-600',
      skills: ['Power Platform', 'Power Apps', 'Power Automate', 'Power BI', 'Business Intelligence'],
      status: 'Active',
      expiryDate: 'Lifetime'
    },
    {
      title: 'Introduction to DevOps',
      issuer: 'Coursera',
      date: 'May 2024',
      credential: 'COURSERA-DEVOPS-2024',
      credentialUrl: 'https://coursera.org/share/f403dfe6ed6befc9326dc780d2ac46e3',
      description: 'Foundational knowledge of DevOps principles, practices, and tools including CI/CD pipelines, automation, and collaborative development workflows.',
      logo: '🔄',
      color: 'from-orange-500 to-red-500',
      skills: ['DevOps', 'CI/CD', 'Automation', 'Version Control', 'Agile'],
      status: 'Active',
      expiryDate: 'Lifetime'
    },
    {
      title: 'Introduction to TensorFlow for AI, ML, and Deep Learning',
      issuer: 'Coursera',
      date: 'April 2024',
      credential: 'COURSERA-TF-2024',
      credentialUrl: 'https://coursera.org/share/96a2275fabb81c559d86df456384887d',
      description: 'Comprehensive introduction to TensorFlow framework for building and deploying machine learning and deep learning models, covering neural networks and practical AI applications.',
      logo: '🧠',
      color: 'from-orange-400 to-orange-500',
      skills: ['TensorFlow', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'AI'],
      status: 'Active',
      expiryDate: 'Lifetime'
    },
    {
      title: 'Crash Course on Python',
      issuer: 'Google (Coursera)',
      date: 'March 2024',
      credential: 'COURSERA-PYTHON-2024',
      credentialUrl: 'https://coursera.org/share/c2810e1df5fbe12f637e0393d0a66585',
      description: 'Intensive Python programming course covering syntax, data structures, object-oriented programming, and practical applications for automation and scripting.',
      logo: '🐍',
      color: 'from-blue-400 to-green-400',
      skills: ['Python', 'Programming', 'Data Structures', 'OOP', 'Automation'],
      status: 'Active',
      expiryDate: 'Lifetime'
    }
  ]

  const stats = [
    { label: 'Total Certifications', value: '4', icon: Award },
    { label: 'Active Credentials', value: '4', icon: CheckCircle },
    { label: 'Coursera Courses', value: '4', icon: '📚' },
    { label: 'This Year', value: '4', icon: Calendar }
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {typeof stat.icon === 'string' ? (
                  <span className="text-2xl">{stat.icon}</span>
                ) : (
                  <stat.icon className="w-6 h-6 text-primary-600" />
                )}
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credential}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="card p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center text-white text-2xl shadow-lg`}>
                  {cert.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>Issued: {cert.date}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">Skills Validated</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm">
                  <p className="text-gray-600">Credential ID: <span className="font-mono">{cert.credential}</span></p>
                  <p className="text-gray-600">Expires: {cert.expiryDate}</p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Verify</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Continuous Learning Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Currently Studying</h3>
              <p className="text-gray-700 mb-4">
                Expanding knowledge in advanced AI/ML techniques and cloud technologies to stay current with industry trends.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Advanced ML
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Cloud Platforms
                </span>
              </div>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Next Goals</h3>
              <p className="text-gray-700 mb-4">
                Planning to achieve cloud certifications and advanced AI/ML specializations to enhance technical expertise.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  AWS Certifications
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Advanced TensorFlow
                </span>
              </div>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Achievement</h3>
              <p className="text-gray-700 mb-4">
                Successfully completed 4 professional certification courses in 2024, building a strong foundation in technology and development.
              </p>
              <div className="text-primary-600 font-bold">
                100% Pass Rate
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold mb-4">Validated Expertise</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              These certifications represent my commitment to staying current with industry standards 
              and best practices. Ready to apply this knowledge to your next project?
            </p>
            <motion.a
              href="mailto:dilshanyasantha1999@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications
