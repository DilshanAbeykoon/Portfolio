import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(0)

  const experiences = [
    {
      title: 'Junior Machine Learning Engineer',
      company: 'Broodbox.ai',
      location: 'Victoria, Australia',
      duration: 'Feb 2025 - Present',
      type: 'Full-time',
      logo: '🤖',
      summary: 'Leading ML engineering projects from audio classification to computer vision applications.',
      responsibilities: [
        'Engineered a binary classification pipeline for frog vs non-frog audio detection using WAV files',
        'Employed TensorFlow\'s YAMNet for feature extraction and model training with cross-validation workflows',
        'Developed Django-powered backend with responsive ReactJS frontend for employee management system',
        'Managed HTTP requests and REST APIs using Django REST Framework with CORS configurations',
        'Engineered FastAPI backend for ML predictions enabling efficient routing and fast response times',
        'Built object detection pipeline using YOLO and Fast R-CNN for thermal imaging analysis'
      ],
      technologies: ['TensorFlow', 'YAMNet', 'Django', 'ReactJS', 'FastAPI', 'YOLO', 'Fast R-CNN'],
      achievements: [
        'Improved object detection accuracy from 68% to 75% via hyperparameter tuning',
        'Designed cross-validation workflows ensuring balanced dataset partitioning',
        'Built RESTful services for high-throughput ML inference API calls',
        'Successfully annotated COCO-format datasets and trained models with bounding boxes'
      ]
    },
    {
      title: 'Machine Learning Engineer - Intern',
      company: 'Broodbox.ai',
      location: 'Victoria, Australia',
      duration: 'Aug 2024 - Feb 2025',
      type: 'Internship',
      logo: '🎓',
      summary: 'Specialized in deep learning model deployment and audio classification systems.',
      responsibilities: [
        'Designed and implemented custom multiclass classification model using TensorFlow Keras',
        'Applied data augmentation techniques including noise addition and pitch shifting for better generalization',
        'Implemented regularization methods (L2, dropout) to improve model performance',
        'Developed Flask web application for real-time audio prediction and deployed on AWS',
        'Scraped Australian women\'s sports news using Selenium automation',
        'Built sentiment analysis classifier using OpenAI LLMs and Hugging Face BERT'
      ],
      technologies: ['TensorFlow', 'Keras', 'Flask', 'AWS', 'Selenium', 'OpenAI', 'Hugging Face', 'BERT'],
      achievements: [
        'Successfully deployed custom deep learning model on AWS cloud platform',
        'Achieved improved model generalization through advanced augmentation techniques',
        'Performed statistical analysis using ANOVA and Chi-square tests',
        'Built end-to-end ML pipeline from data collection to deployment'
      ]
    },
    {
      title: 'Automation - Intern',
      company: 'Ruhunu Foods Pvt. Ltd',
      location: 'Kandy, Sri Lanka',
      duration: 'Aug 2023 - Dec 2023',
      type: 'Internship',
      logo: '�',
      summary: 'Developed automated systems for industrial spice processing and quality control.',
      responsibilities: [
        'Designed automated humidity control system for spice mills to maintain optimal drying conditions',
        'Integrated real-time humidity sensors with microcontroller-based logic systems',
        'Programmed automatic triggers for dehumidifiers based on environmental conditions',
        'Implemented monitoring systems to track storage condition optimization',
        'Collaborated with production team to understand operational requirements',
        'Documented system specifications and maintenance procedures'
      ],
      technologies: ['Microcontrollers', 'IoT Sensors', 'Python', 'Automation Systems', 'Data Logging'],
      achievements: [
        'Improved spice quality and extended shelf life through precise humidity control',
        'Reduced manual monitoring requirements by 80%',
        'Optimized energy usage while maintaining product quality standards',
        'Successfully implemented real-time monitoring and control system'
      ]
    }
  ]

  const toggleExpanded = (index) => {
    setExpandedJob(expandedJob === index ? -1 : index)
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative mb-8 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-3xl">{exp.logo}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-primary-600">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Full-time' ? 'bg-green-100 text-green-700' :
                          exp.type === 'Contract' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Building size={18} className="text-gray-600" />
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    aria-label={expandedJob === index ? 'Collapse details' : 'Expand details'}
                  >
                    {expandedJob === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Summary */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedJob === index ? 'auto' : 0,
                    opacity: expandedJob === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {expandedJob === index && (
                    <div className="pt-6 border-t border-gray-200">
                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold mb-4">Key Responsibilities</h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold mb-4">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold mb-4">Ready for New Challenges</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new projects and collaborate with amazing teams. 
              Let's discuss how I can contribute to your next big idea.
            </p>
            <motion.a
              href="mailto:dilshanyasantha1999@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
