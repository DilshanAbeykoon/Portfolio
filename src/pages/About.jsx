import { motion } from 'framer-motion'
import { MapPin, Award, Target, Heart } from 'lucide-react'

const About = () => {
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

  const technologies = [
    'Python/TensorFlow',
    'PyTorch/Keras',
    'Computer Vision',
    'Natural Language Processing',
    'Deep Learning',
    'Machine Learning',
    'Data Science',
    'AWS/Cloud',
    'React.js/Node.js',
    'MongoDB/PostgreSQL',
    'Docker/Kubernetes',
    'Git/GitHub'
  ]

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/dilshan-profile.jpg" 
                alt="Dilshan Abeykoon" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Portfolio
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
              <MapPin size={16} />
              <span>Sri Lanka</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Greetings, I'm <strong>Dilshan Abeykoon</strong>, a seasoned machine learning engineer with expertise 
                in the dynamic AI industry. My expertise lies in crafting cutting-edge, full-stack AI applications 
                and deep learning models for diverse platforms, utilizing the power of modern ML frameworks. 
                I take immense pride in my work, striving to develop solutions that are not only efficient but also 
                innovative, catering to the diverse needs of clients globally.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Having successfully delivered projects to satisfied clients worldwide, I've gained valuable experience 
                collaborating with individuals from various cultures. My journey has taken me from local tech companies 
                to international platforms, eventually leading me to work with global AI companies. This diverse 
                exposure has enriched my understanding of different perspectives and enhanced my ability to adapt to 
                varied work environments.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                I am passionate about continuous learning and growth, both in my professional and personal life. 
                Beyond my role as a machine learning engineer, I am deeply committed to advancing AI technology 
                and contributing to the development of ethical AI solutions. My dedication to learning is reflected 
                in my constant pursuit of knowledge to deepen my understanding of artificial intelligence and improve 
                my technical practices.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                I am enthusiastic about exploring new opportunities that challenge and expand my skills. The prospect 
                of working in an environment that fosters continuous learning and skill development aligns with my 
                belief that there is always room for improvement. I invite open communication and collaboration, 
                welcoming opportunities to contribute to meaningful projects that make a positive impact on the world.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Throughout my journey, I've specialized in various technologies, honing my skills to adapt to the 
                ever-evolving landscape of AI development. I am confident that my experience and commitment to growth 
                make me an asset to any team or project. Feel free to connect, and let's explore possibilities together.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                In addition to my professional endeavors, I am also passionate about sharing knowledge and contributing 
                to the AI community. Teaching and empowering others in the tech community is a passion of mine, and 
                I find great joy in contributing to the learning journey of fellow developers and aspiring ML engineers.
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Over the time I've specialized in many technologies
              </h3>
              <p className="text-gray-600 mb-8">Some of them are...</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-blue-600">▹</span>
                    <span className="text-gray-700 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image and Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/dilshan-profile.jpg" 
                  alt="Dilshan Abeykoon - Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-blue-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Education
                  </h4>
                </div>
                <p className="text-gray-600">
                  First Class Honours Graduate from Coventry University UK in Computer Science with AI
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-blue-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Current Role
                  </h4>
                </div>
                <p className="text-gray-600">
                  Junior Machine Learning Engineer at Engenia Solutions Australia
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-blue-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Passion
                  </h4>
                </div>
                <p className="text-gray-600">
                  Creating intelligent AI solutions and sharing knowledge with the community
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
