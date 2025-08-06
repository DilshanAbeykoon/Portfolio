import { motion } from 'framer-motion'
import { Code, Database, Palette, Server, Smartphone, Cloud } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & ML',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 88 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Keras', level: 85 },
        { name: 'OpenCV', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'NumPy', level: 92 },
        { name: 'Pandas', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Hugging Face', level: 80 },
        { name: 'LLM', level: 75 },
        { name: 'Data Analysis', level: 88 }
      ]
    },
    {
      icon: Server,
      title: 'Web Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vite', level: 85 },
        { name: 'Flask', level: 82 }
      ]
    },
    {
      icon: Cloud,
      title: 'Backend & APIs',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'LangChain', level: 75 },
        { name: 'OpenAI API', level: 80 },
        { name: 'API Development', level: 85 }
      ]
    },
    {
      icon: Smartphone,
      title: 'DevOps & Deployment',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS (EC2, S3)', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 78 },
        { name: 'Linux', level: 82 },
        { name: 'Heroku', level: 80 }
      ]
    },
    {
      icon: Palette,
      title: 'Databases & Testing',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'SQLite', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 78 },
        { name: 'Selenium', level: 75 },
        { name: 'Postman', level: 85 }
      ]
    }
  ]

  const SkillBar = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )

  const CircularSkill = ({ skill, delay, color }) => {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (skill.level / 100) * circumference

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col items-center"
      >
        <div className="relative w-24 h-24 mb-3">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-gray-200 dark:text-gray-700"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              className={`bg-gradient-to-r ${color}`}
              style={{ stroke: 'url(#gradient)' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
              {skill.level}%
            </span>
          </div>
        </div>
        <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
      </motion.div>
    )
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.4 + categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Skills Circular Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {[
              { name: 'Python', level: 95 },
              { name: 'Machine Learning', level: 90 },
              { name: 'TensorFlow', level: 85 },
              { name: 'React', level: 88 },
              { name: 'Pandas', level: 90 },
              { name: 'AWS', level: 75 }
            ].map((skill, index) => (
              <CircularSkill
                key={skill.name}
                skill={skill}
                delay={1.2 + index * 0.1}
                color="from-primary-500 to-primary-600"
              />
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Always Learning</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. I regularly 
              explore new frameworks, tools, and best practices to stay at the forefront of 
              web development. Every project is an opportunity to grow and improve.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
