import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  const navigate = useNavigate()

  // const handleScrollToReview = () => {
  //   navigate('/')
  //   // First scroll to top, then scroll to review section
  //   window.scrollTo({ top: 0, behavior: 'instant' })
  //   setTimeout(() => {
  //     const reviewSection = document.getElementById('review-section')
  //     if (reviewSection) {
  //       reviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //     }
  //   }, 100)
  // }

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About CodeShield
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your AI-powered companion for writing cleaner, more efficient code
            through intelligent analysis and actionable feedback.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-linear-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-12 border border-slate-600 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            CodeShield is designed to help developers of all skill levels
            improve their coding practices. We provide instant, comprehensive
            code reviews that focus on what truly matters: readability,
            performance, security, and maintainability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-400">
                Leveraging Google Gemini AI for intelligent code review and
                suggestions.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-400"
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
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Instant Feedback
              </h3>
              <p className="text-gray-400">
                Get immediate, actionable feedback on your code snippets in
                seconds.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
             className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-400"
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
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Best Practices
              </h3>
              <p className="text-gray-400">
                Learn industry best practices and improve your coding standards.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
             className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-yellow-500 transition-all hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Security Focus
              </h3>
              <p className="text-gray-400">
                Identify potential security vulnerabilities and edge cases in
                your code.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
             className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-red-500 transition-all hover:shadow-lg hover:shadow-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Performance Tips
              </h3>
              <p className="text-gray-400">
                Optimize your code with performance improvement suggestions.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
             className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Clear Explanations
              </h3>
              <p className="text-gray-400">
                Understand issues with detailed, easy-to-follow explanations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* How It Works */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-12 border border-slate-600 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Paste Your Code
              </h3>
              <p className="text-gray-300">
                Simply paste or write your code snippet in the input area.
              </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                AI Analysis
              </h3>
              <p className="text-gray-300">
                Our AI analyzes your code for quality, security, and
                performance.
              </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
             className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Get Results
              </h3>
              <p className="text-gray-300">
                Receive structured feedback with actionable improvements.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 bg-linear-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Profile */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-linear-to-br border-5 border-blue-500 from-blue-500 to-purple-600  overflow-hidden">
                  <img
                    src="dp.png"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-800"></div>
              </div>
              <h3 className="text-xl md:text-3xl  font-bold text-white mb-2">
                Made by - <span className="text-orange-400">Nitai Dalal</span>{" "}
              </h3>
              <p className="text-blue-400 font-semibold mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-300 text-center md:text-left mb-6 max-w-md">
                Passionate about building innovative AI-powered applications and
                creating seamless user experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/nitaidalal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/nitaidalal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/nitaidalal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Tech Stack */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">
                Tech Stack Used
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {/* Frontend */}
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                  <h5 className="text-blue-400 font-semibold mb-3">Frontend</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      React.js
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Tailwind CSS
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      React Router
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      React Markdown
                    </div>
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                  <h5 className="text-green-400 font-semibold mb-3">Backend</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Node.js
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Express.js
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Google Gemini AI
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      REST API
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/30">
                <p className="text-sm text-gray-300">
                  <span className="text-yellow-400 font-semibold">
                    ⚡ Built with:
                  </span>{" "}
                  Modern web technologies and AI to provide intelligent code
                  reviews and help developers write better code.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Ready to improve your code quality?
          </p>
          <button
            onClick={() => navigate('/review')}
            className="inline-block bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            Start Reviewing Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default About
