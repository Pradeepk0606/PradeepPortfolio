# 🚀 Pradeepkumar R - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

Welcome to my personal portfolio website! This is a modern, responsive, and performant portfolio built with Next.js 14, TypeScript, and Tailwind CSS. The portfolio showcases my projects, skills, experience, and provides a way to get in touch with me.

## ✨ Features

- ⚡️ Blazing fast performance with Next.js 14 and Server Components
- 🎨 Beautiful UI with Tailwind CSS and Framer Motion animations
- 🔒 Secure authentication with NextAuth.js
- 📱 Fully responsive design that works on all devices
- 🌙 Dark/Light mode support
- 📝 Blog section with MDX support
- 📊 Analytics integration
- ✉️ Contact form with email notifications
- 🔍 SEO optimized
- 📦 Easy deployment with Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- MongoDB Atlas account (or local MongoDB instance)
- GitHub account (for authentication)
- Google account (for authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in the required environment variables

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

## 📦 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Content**: [MDX](https://mdxjs.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🌟 Live Demo

**[View Live Portfolio →](https://pradeepkumarr.com)**

---

## ✨ Key Features

### 🎨 Frontend & UI/UX
- ✅ **Hero Section**: Particle background, typing animation, 3D gradient orbs
- ✅ **About Me**: Interactive timeline with career milestones
- ✅ **Skills**: Radar charts, animated progress bars, certifications
- ✅ **Projects**: Filterable showcase with detailed modals
- ✅ **Blog**: Full-featured blog with MDX support
- ✅ **Achievements**: Gamified badges and stats
- ✅ **Testimonials**: Client recommendations
- ✅ **Contact**: Animated form with WhatsApp integration

### ⚙️ Backend & Data
- ✅ **Admin Dashboard**: Content management system
- ✅ **MongoDB**: Dynamic data storage
- ✅ **API Routes**: RESTful endpoints
- ✅ **Email Service**: Nodemailer integration
- ✅ **Newsletter**: Subscription management

### 🌍 Integrations
- ✅ **GitHub**: Live repo stats and contributions
- ✅ **Spotify**: Currently playing widget
- ✅ **LeetCode/Codeforces**: Coding stats
- ✅ **AI Chatbot**: Interactive portfolio assistant

### 🎯 Advanced Features
- ✅ **Dark/Light Theme**: Persistent theme toggle
- ✅ **PWA Support**: Offline-capable, installable
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter cards
- ✅ **Performance**: Server-side rendering, code splitting
- ✅ **Animations**: Framer Motion, scroll-triggered effects

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Database** | MongoDB + Mongoose |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Email** | Nodemailer |
| **PWA** | next-pwa |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Pradeepk0606/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Quick Setup Guide
See **[QUICK_START.md](QUICK_START.md)** for a 5-minute setup guide.

## 📁 Project Structure

```
portfolio-final/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── blog/              # Blog pages
│   ├── projects/          # Project case studies
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   └── 3d/               # Three.js components
├── lib/                   # Utilities
│   ├── db/               # Database models & connection
│   ├── utils/            # Helper functions
│   └── data/             # Static data
├── public/               # Static assets
└── styles/               # Global styles
```

## 🎯 Key Features Implementation

### Admin Dashboard
Access at `/admin` with credentials from `.env`
- Manage projects, blogs, testimonials
- View contact form submissions
- Update profile information

### API Integrations
- **GitHub**: Fetches repos and contribution graph
- **Spotify**: Shows currently playing track
- **LeetCode**: Displays coding stats

### PWA Support
- Installable on mobile/desktop
- Offline functionality
- Service worker caching

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Pradeepkumar R**
- Email: hightechtamil@gmail.com
- LinkedIn: [linkedin.com/in/PradeepKumarR](https://linkedin.com/in/PradeepKumarR)
- GitHub: [github.com/Pradeepk0606](https://github.com/Pradeepk0606)

---

REMOVE Built with ❤️ using Next.js and TypeScript

remove my phone number and chat on whatsapp
and change gmail to hightechtamil in all places