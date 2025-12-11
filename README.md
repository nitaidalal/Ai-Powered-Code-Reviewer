# 🛡️ CodeShield - AI-Powered Code Reviewer

An intelligent code review application powered by Google's Gemini AI that provides instant, expert-level feedback on your code snippets. Built with React, Node.js, Express, and MongoDB.

🔗 **Live App**: [https://codeshield-ai.vercel.app/](https://codeshield-ai.vercel.app/)


![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React](https://img.shields.io/badge/react-19.2.0-blue)

## ✨ Features

- 🤖 **AI-Powered Reviews**: Leverages Google Gemini AI to provide intelligent code analysis
- 📝 **Code Analysis**: Get detailed feedback on code quality, performance, security, and best practices
- 💬 **Comments System**: Share thoughts and engage with the community
- 📧 **Feedback System**: Submit feedback to improve the platform
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS and Framer Motion animations
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Markdown** - Markdown rendering with GitHub Flavored Markdown support

### Backend
- **Node.js** - Runtime environment
- **Express 5.2.1** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 9.0.0** - MongoDB object modeling
- **Google Gemini AI** - AI-powered code review engine
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- Google Gemini API Key

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/nitaidalal/Ai-Powered-Code-Reviewer.git
cd Ai-Powered-Code-Reviewer
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
```

Start the backend server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```



Start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
Ai-Powered-Code-Reviewer/
├── backend/
│   ├── config/
│   │   ├── db.js              # MongoDB configuration
│   │   └── gemini.js          # Google Gemini AI configuration
│   ├── models/
│   │   ├── comment.model.js   # Comment schema
│   │   └── feedback.model.js  # Feedback schema
│   ├── routes/
│   │   ├── comments.route.js  # Comment API endpoints
│   │   ├── feedback.route.js  # Feedback API endpoints
│   │   └── review.route.js    # Code review API endpoints
│   ├── package.json
│   └── server.js              # Express server entry point
│
└── frontend/
    ├── public/                # Static assets
    ├── src/
    │   ├── assets/           # Images, icons, etc.
    │   ├── components/
    │   │   ├── Comments.jsx   # Comments component
    │   │   ├── Footer.jsx     # Footer component
    │   │   └── Navbar.jsx     # Navigation bar
    │   ├── config/
    │   │   └── api.js         # Axios configuration
    │   ├── pages/
    │   │   ├── About.jsx      # About page
    │   │   ├── Feedback.jsx   # Feedback page
    │   │   ├── Home.jsx       # Landing page
    │   │   └── ReviewCode.jsx # Code review page
    │   ├── App.jsx            # Main app component
    │   ├── main.jsx           # React entry point
    │   └── index.css          # Global styles
    ├── index.html
    ├── package.json
    └── vite.config.js         # Vite configuration
```

## 🎯 Usage

1. **Review Code**: Navigate to the Review Code page, paste your code snippet, and click "Review" to get AI-powered feedback
2. **View Analysis**: The AI will provide:
   - Summary of what the code does
   - Strengths and best practices used
   - Issues and improvements
   - Code quality rating
   - Actionable recommendations
3. **Submit Feedback**: Share your thoughts on the Feedback page
4. **Engage**: Leave comments and interact with the community

## 🔌 API Endpoints

### Code Review
- `POST /api/review` - Submit code for AI review

### Feedback
- `POST /api/feedback` - Submit user feedback
- `GET /api/feedback` - Get all feedback (if implemented)

### Comments
- `POST /api/comments` - Post a new comment
- `GET /api/comments` - Get all comments (if implemented)

## 🎨 Features in Detail

### AI Code Review
The AI reviewer analyzes code based on:
- **Readability**: Code clarity and maintainability
- **Performance**: Optimization opportunities
- **Security**: Potential vulnerabilities
- **Best Practices**: Industry standards and conventions
- **Edge Cases**: Potential bugs and error handling

### User Interaction
- Real-time toast notifications for user actions
- Smooth animations and transitions
- Markdown-formatted AI responses
- Responsive grid layouts

## 🛠️ Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

**Frontend:**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Nitai Dalal**
- GitHub: [@nitaidalal](https://github.com/nitaidalal)
- LinkedIn: [nitaidalal](https://linkedin.com/in/nitaidalal)

## 🙏 Acknowledgments

- Google Gemini AI for powering the code review engine
- React and Vite communities for excellent tooling
- MongoDB for reliable data storage
- All contributors and users of this project

## 📧 Contact

For any questions or suggestions, please open an issue.

---

<div align="center">
Made with ❤️ by Nitai Dalal
</div>
