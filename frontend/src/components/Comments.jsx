import React, { useState, useEffect } from 'react'
import api from '../config/api'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const Comments = () => {
  const [comment, setComment] = useState({
    name: '',
    message: ''
  })
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const response = await api.get('/api/comments')
      if (response.data.success) {
        setComments(response.data.comments)
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error)
    }
  }

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!comment.name.trim() || !comment.message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
        console.log('Submitting comment:', comment)
      const response = await api.post('/api/comments', {comment})
      
      if (response.data.success) {
        toast.success('Comment posted successfully!')
        setComment({ name: '', message: '' })
        fetchComments()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to post comment')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto mb-20 mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Community Comments
        </h2>
        <p className="text-gray-400 text-lg">
          Share your thoughts and see what others are saying
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Comment Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Leave a Comment</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={comment.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={comment.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                placeholder="Write your comment here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Posting...' : 'Post Comment'}
            </button>
          </form>
        </motion.div>

        {/* Comments Display */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Recent Comments</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
            {comments.length === 0 ? (
              <div className="text-center py-8">
                <svg
                  className="w-16 h-16 text-gray-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p className="text-gray-400">No comments yet. Be the first to comment!</p>
              </div>
            ) : (
              comments.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-gray-400 text-xs">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2">{item.message}</p>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Comments
