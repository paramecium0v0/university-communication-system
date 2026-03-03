# University Communication System - Complete Prototype

A secure, high-fidelity React prototype for a university student communication and collaboration platform with advanced features for international students.

## ✨ Key Features

### 🔐 Secure Authentication & Privacy
- **Login and Verification Screen**: Two-step authentication with email verification
- **Verified Access Only**: Chat contents and project files restricted to verified team members
- **Secure Session Management**: Protected routes and secure logout

### 📊 Activity Monitoring & Task Management
- **Team Dashboard**: Monitor team member activity and track code contributions
- **GitHub-style Task Management**: Task assignment, acceptance, and status tracking
- **Activity Feed**: Real-time updates on commits, pull requests, and task completions
- **Member Statistics**: Track individual contributions, commits, and task completion rates

### 🌐 Multilingual Communication with AI
- **AI Translation Button**: Real-time translation in chat interface
- **Multi-language Support**: Type in your native language (Chinese, Spanish, French, Japanese, Korean)
- **Instant Translation**: Automatically translate messages to English for team collaboration
- **Language Selection**: Choose your preferred input language

### 📅 Academic Calendar & Smart Reminders
- **Calendar View**: Visual calendar to mark and view assignment due dates
- **Smart Notifications**: Pop-up reminders when deadlines are approaching
- **Deadline Alerts**: "It's time for you to do your homework" notifications
- **Urgent Task Highlighting**: Visual indicators for tasks due within 24-72 hours

### 💬 Enhanced Chat Features
- **Course Channels**: Organized communication by course and project
- **Milestone Tracker**: Integrated task tracking within chat interface
- **File Attachments**: Share project files and documents
- **Online Status**: See which team members are currently active

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to the URL shown in the terminal (typically `http://localhost:5173`)

4. **Login:**
- Use any email and password (demo mode)
- Enter any 6-digit verification code to proceed

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Login.jsx           # Authentication and verification screen
│   │   ├── Dashboard.jsx       # Activity monitoring and task management
│   │   ├── CalendarView.jsx    # Academic calendar for assignments
│   │   └── Notification.jsx    # Smart deadline reminders
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind CSS and animations
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## 🎨 Design Features

- **Professional Academic Theme**: University-inspired color scheme (navy blue, gold accents)
- **Clean UI/UX**: Modern, intuitive interface designed for student collaboration
- **Responsive Layout**: Optimized for desktop and tablet viewing
- **Accessibility**: Clear visual hierarchy and readable typography

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Heroicons**: Beautiful SVG icons

## 📊 Mock Data

The prototype includes comprehensive sample data:
- **4 Course Channels**: CS2222, MATH301, ENG101, DESIGN200
- **5 Team Members**: With roles, avatars, and online status
- **4 Milestone Tasks**: Various statuses (completed, in-progress, pending)
- **5 Activity Logs**: Recent commits, pull requests, and task updates
- **Sample Messages**: Realistic conversation examples

## 🎯 User Flow

1. **Login Screen** → Enter credentials and verify email
2. **Main Dashboard** → View team activity and task overview
3. **Chat Interface** → Communicate with team using AI translation
4. **Calendar View** → Track assignment deadlines
5. **Notifications** → Receive smart reminders for approaching deadlines

## 🔒 Security Features

- Email verification required for access
- Verified team members only
- Secure session management
- Protected chat and file access

## 💡 Demo Notes

- **Login**: Any email/password combination works
- **Verification**: Enter any 6-digit code
- **Translation**: Mock translation (in production, would use real AI API)
- **Notifications**: Triggered based on milestone due dates

## 📝 Next Steps for Production

- Integrate real authentication backend
- Connect to AI translation API (Google Translate, DeepL, etc.)
- Implement real-time messaging with WebSockets
- Add file upload and storage
- Connect to GitHub API for real commit tracking
- Set up push notifications for deadline reminders
