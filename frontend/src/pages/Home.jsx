import { Link } from 'react-router-dom'
import Comments from '../components/Comments';
import {motion} from 'framer-motion'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className=" sm:mt-14 px-4 sm:px-6 lg:px-8 py-12 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-xl shadow text-gray-300 md:text-4xl mb-6 px-4 py-1 inline-block border-2 border-blue-600 rounded-full bg-blue-400/30  font-semibold"
        >
          Welcome to CodeShield
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl text-blue-600 font-semibold mb-8"
        >
          AI-Powered <span className="text-green-500 ">Code</span> Reviewer
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mx-auto max-w-3xl mb-10"
        >
          Elevate your coding skills with intelligent code reviews powered by
          AI. Get instant feedback, suggestions, and improvements for your code
          snippets.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            to="/review"
            className="inline-block bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Reviewing Code Now →
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto mb-10 mt-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Why Choose CodeShield?
        </motion.h2>
        <div
         className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={featureVariants}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-400">
              Get instant AI-powered code reviews in seconds. No waiting, just
              results.
            </p>
          </motion.div>

          <motion.div
            variants={featureVariants}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Smart Analysis
            </h3>
            <p className="text-gray-400">
              Powered by Google Gemini AI for intelligent, context-aware
              suggestions.
            </p>
          </motion.div>

          <motion.div
            variants={featureVariants}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Learn & Improve
            </h3>
            <p className="text-gray-400">
              Understand best practices and enhance your coding skills with each
              review.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Comments />
      </motion.div>

    </div>
  );
}

export default Home



