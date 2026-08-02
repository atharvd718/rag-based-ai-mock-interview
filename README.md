# 🎯 RAG-Based AI Mock Interview

An AI-powered mock interview platform built with Next.js 15, Gemini AI, and RAG pipeline for personalized interview preparation.

## ✨ Features
- 🤖 AI-generated interview questions using Gemini
- 📄 Resume-aware RAG pipeline with pgvector
- 🔐 Authentication with Clerk
- 🗄️ PostgreSQL database with Neon + Drizzle ORM
- 📊 Real-time feedback and scoring
- 🎨 DocuMind-inspired beige UI theme
- 👨‍💻 About Developer section

## 🛠️ Tech Stack
- **Frontend**: Next.js 15, Tailwind CSS, shadcn/ui
- **AI**: Google Gemini API
- **Database**: Neon PostgreSQL + Drizzle ORM
- **Auth**: Clerk
- **RAG**: pgvector + Gemini Embeddings
- **Deployment**: Vercel

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/atharvd718/rag-based-ai-mock-interview.git
cd rag-based-ai-mock-interview
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.0-flash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Push database schema
```bash
npm run db:push
```

### 5. Run locally
```bash
npm run dev
```

## 👨‍💻 Developer
**Atharv Deshmukh**
- GitHub: [@atharvd718](https://github.com/atharvd718)
- LinkedIn: [atharvdeshmukhcs](https://www.linkedin.com/in/atharvdeshmukhcs)
- LeetCode: [Code_Atharv07](https://leetcode.com/u/Code_Atharv07/)

## 📄 License
MIT License
