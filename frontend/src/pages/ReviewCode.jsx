import {useState} from 'react'
import api from '../config/api'
import toast from 'react-hot-toast'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from 'framer-motion';



const ReviewCode = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [review, setReview] = useState("");

  const handleReview = async () => {
    try {
      if(!codeSnippet.trim()){
        toast.error("Please enter a code snippet");
        return;
      }
      const response = await api.post("/api/review", {codeSnippet });
      setReview(response.data);
      toast.success("Code reviewed successfully");
      console.log("response", response.data);
      
    } catch (error) {
      toast.error("Failed to review code");
      console.error(error);
    }
  }
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
       className="max-w-7xl mx-auto">
        {/* This is Header part */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Code Reviewer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get instant, intelligent feedback on your code. Paste your snippet below and let AI analyze it for improvements.
          </p>
        </div>

        <div id="review-section" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code input */}
          <motion.div
            initial={{ opacity: 0, y:30 }}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{ duration: 0.7 }}
           className="flex flex-col">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <p className='text-green-400 font-bold '>&lt;/&gt;</p>
                  <h3 className="text-xl font-semibold text-green-400">
                    Your Code
                  </h3>
                </div>
                {codeSnippet && (
                  <button
                    onClick={() => {
                      setCodeSnippet("");
                      setReview("");
                    }}
                    className="text-sm text-gray-300 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg transition-all cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <textarea
                rows={20}
                className="bg-slate-900 w-full p-4 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm flex-1 resize-none text-gray-200 placeholder-gray-500"
                onChange={(e) => setCodeSnippet(e.target.value)}
                value={codeSnippet}
                spellCheck={false}
                placeholder="// Paste or write your code here...
function example() {
  console.log('Hello World!');
}"
              ></textarea>
              <button
                onClick={handleReview}
                disabled={!codeSnippet.trim()}
                className="mt-4 w-full px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Analyze Code
              </button>
            </div>
          </motion.div>

          {/* Review output dekhabe  */}
          <motion.div
            initial={{ opacity: 0, y:30 }}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{ duration: 0.7 }}
           className="flex flex-col">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-semibold text-blue-400">
                  AI Analysis
                </h3>
              </div>
              <div
                className="bg-slate-900 p-6 rounded-lg border border-slate-600 flex-1 overflow-y-auto custom-scrollbar"
                style={{ minHeight: "500px", maxHeight: "600px" }}
              >
                {review ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // Customize markdown elements with Tailwind CSS classes
                      h1: ({ node, ...props }) => (
                        <h1
                          className="text-3xl font-bold mb-4 mt-6 text-blue-400"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-2xl font-bold mb-3 mt-5 text-blue-300"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="text-xl font-semibold mb-2 mt-4 text-blue-200"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p
                          className="mb-4 text-gray-300 leading-relaxed"
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc pl-6 mb-4 space-y-1.5 text-gray-300"
                          {...props}
                        />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol
                          className="list-decimal pl-6 mb-4 space-y-1.5 text-gray-300"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="text-gray-300 leading-relaxed [&>p]:inline [&>p]:m-0" {...props} />
                      ),
                      code: ({ node, inline, ...props }) =>
                        inline ? (
                          <code
                            className="bg-slate-800 text-green-400 px-2 py-1 rounded text-sm font-mono border border-slate-700"
                            {...props}
                          />
                        ) : (
                          <code
                            className="block bg-slate-800 text-green-400 p-4 rounded-lg my-3 overflow-x-auto font-mono text-sm border border-slate-700"
                            {...props}
                          />
                        ),
                      pre: ({ node, ...props }) => (
                        <pre
                          className="bg-slate-800 p-4 rounded-lg my-3 overflow-x-auto border border-slate-700"
                          {...props}
                        />
                      ),
                      strong: ({ node, ...props }) => (
                        <strong className="font-bold text-yellow-400" {...props} />
                      ),
                      em: ({ node, ...props }) => (
                        <em className="italic text-purple-300" {...props} />
                      ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote
                          className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-400 bg-slate-800/50 rounded-r"
                          {...props}
                        />
                      ),
                      a: ({ node, ...props }) => (
                        <a
                          className="text-blue-400 hover:text-blue-300 underline"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {review.review}
                  </ReactMarkdown>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500 text-lg font-medium mb-2">
                      No analysis yet
                    </p>
                    <p className="text-gray-600 text-sm">
                      Paste your code and click "Analyze Code" to get started
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}

export default ReviewCode
