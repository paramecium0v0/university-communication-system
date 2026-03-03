import React, { useState, useEffect } from 'react'
import { 
  UserGroupIcon, 
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  PaperClipIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
  AcademicCapIcon,
  LanguageIcon,
  HomeIcon,
  LogOutIcon
} from '@heroicons/react/24/outline'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CalendarView from './components/CalendarView'
import Notification from './components/Notification'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentView, setCurrentView] = useState('chat') // 'chat', 'dashboard', 'calendar'
  const [activeChannel, setActiveChannel] = useState('cs2222-project-alpha')
  const [newMessage, setNewMessage] = useState('')
  const [translationEnabled, setTranslationEnabled] = useState(false)
  const [originalLanguage, setOriginalLanguage] = useState('en')
  const [showNotification, setShowNotification] = useState(true)

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: 'Complete Database Schema Design',
      dueDate: '2024-12-15',
      assignedTo: 'Sarah Chen',
      status: 'in-progress',
      progress: 60,
      description: 'Design ER diagram and implement database tables'
    },
    {
      id: 2,
      title: 'Frontend Prototype Review',
      dueDate: '2024-12-18',
      assignedTo: 'Alex Johnson',
      status: 'pending',
      progress: 0,
      description: 'Review and approve UI/UX mockups'
    },
    {
      id: 3,
      title: 'API Integration Testing',
      dueDate: '2024-12-20',
      assignedTo: 'Maria Garcia',
      status: 'completed',
      progress: 100,
      description: 'Test all API endpoints and document results'
    },
    {
      id: 4,
      title: 'Final Project Submission',
      dueDate: '2024-12-22',
      assignedTo: 'All Members',
      status: 'pending',
      progress: 30,
      description: 'Compile final report and submit to professor'
    }
  ])

  const channels = [
    { id: 'cs2222-project-alpha', name: 'CS2222 - Project Alpha', icon: '📚', unread: 3 },
    { id: 'math301-study-group', name: 'MATH301 - Study Group', icon: '📐', unread: 0 },
    { id: 'eng101-lab-partners', name: 'ENG101 - Lab Partners', icon: '🔬', unread: 1 },
    { id: 'design200-portfolio', name: 'DESIGN200 - Portfolio', icon: '🎨', unread: 0 },
  ]

  const members = [
    { id: 1, name: 'Sarah Chen', role: 'Team Lead', avatar: '👩‍💻', online: true },
    { id: 2, name: 'Alex Johnson', role: 'Developer', avatar: '👨‍💻', online: true },
    { id: 3, name: 'Maria Garcia', role: 'Designer', avatar: '👩‍🎨', online: false },
    { id: 4, name: 'David Kim', role: 'Developer', avatar: '👨‍🔬', online: true },
    { id: 5, name: 'Emma Wilson', role: 'Researcher', avatar: '👩‍🔬', online: false },
  ]

  const tasks = [
    {
      id: 1,
      title: 'Implement user authentication',
      description: 'Create login and registration endpoints',
      assignedTo: 'Alex Johnson',
      dueDate: '2024-12-16',
      status: 'in-progress',
      progress: 75
    },
    {
      id: 2,
      title: 'Design database schema',
      description: 'Create ER diagram and table structures',
      assignedTo: 'Sarah Chen',
      dueDate: '2024-12-15',
      status: 'in-progress',
      progress: 60
    },
    {
      id: 3,
      title: 'Write API documentation',
      description: 'Document all REST endpoints',
      assignedTo: 'David Kim',
      dueDate: '2024-12-19',
      status: 'pending',
      progress: 0
    },
    {
      id: 4,
      title: 'Frontend testing',
      description: 'Write unit tests for React components',
      assignedTo: 'Maria Garcia',
      dueDate: '2024-12-17',
      status: 'completed',
      progress: 100
    }
  ]

  const activities = [
    { member: 'Alex Johnson', action: 'pushed 3 commits to main branch', timestamp: '2 hours ago' },
    { member: 'Sarah Chen', action: 'completed task: Design database schema', timestamp: '3 hours ago' },
    { member: 'David Kim', action: 'opened pull request #12', timestamp: '5 hours ago' },
    { member: 'Maria Garcia', action: 'merged pull request #11', timestamp: '1 day ago' },
    { member: 'Emma Wilson', action: 'commented on issue #8', timestamp: '1 day ago' }
  ]

  const messages = {
    'cs2222-project-alpha': [
      {
        id: 1,
        author: 'Sarah Chen',
        avatar: '👩‍💻',
        text: 'Hey team! I\'ve updated the database schema. Can everyone review it before we proceed?',
        timestamp: '10:30 AM',
        attachments: ['schema_v2.pdf']
      },
      {
        id: 2,
        author: 'Alex Johnson',
        avatar: '👨‍💻',
        text: 'Looks good! I\'ll start working on the API endpoints this afternoon.',
        timestamp: '10:45 AM',
        attachments: []
      },
      {
        id: 3,
        author: 'Maria Garcia',
        avatar: '👩‍🎨',
        text: 'The UI mockups are ready for review. Should we schedule a meeting to discuss?',
        timestamp: '11:00 AM',
        attachments: ['ui_mockups_final.fig']
      },
      {
        id: 4,
        author: 'David Kim',
        avatar: '👨‍🔬',
        text: 'I\'ve completed the testing framework setup. We can start writing unit tests now.',
        timestamp: '11:15 AM',
        attachments: []
      },
      {
        id: 5,
        author: 'Sarah Chen',
        avatar: '👩‍💻',
        text: 'Great progress everyone! Let\'s make sure we\'re on track with the milestone tracker. The database design is 60% complete.',
        timestamp: '11:30 AM',
        attachments: []
      }
    ],
    'math301-study-group': [
      {
        id: 1,
        author: 'Emma Wilson',
        avatar: '👩‍🔬',
        text: 'Does anyone understand problem 7 from chapter 12?',
        timestamp: '9:00 AM',
        attachments: []
      }
    ],
    'eng101-lab-partners': [
      {
        id: 1,
        author: 'Alex Johnson',
        avatar: '👨‍💻',
        text: 'Lab report due next week!',
        timestamp: '8:00 AM',
        attachments: []
      }
    ],
    'design200-portfolio': []
  }

  const currentMessages = messages[activeChannel] || []

  const handleLogin = (userData) => {
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // In a real app, this would send to a backend
      // If translation is enabled, translate before sending
      setNewMessage('')
    }
  }

  // Mock AI Translation function
  const translateMessage = async (text, fromLang, toLang = 'en') => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Mock translation - in real app, this would call an AI translation API
    const translations = {
      'zh': 'Hello team! I have a question about the project.',
      'es': 'Hello team! I have a question about the project.',
      'fr': 'Hello team! I have a question about the project.',
      'ja': 'Hello team! I have a question about the project.',
      'ko': 'Hello team! I have a question about the project.'
    }
    
    return translations[fromLang] || text
  }

  const handleTranslate = async () => {
    if (newMessage.trim() && originalLanguage !== 'en') {
      const translated = await translateMessage(newMessage, originalLanguage, 'en')
      setNewMessage(translated)
      setOriginalLanguage('en')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />
      case 'in-progress':
        return <ClockIcon className="w-5 h-5 text-blue-600" />
      case 'pending':
        return <CalendarIcon className="w-5 h-5 text-yellow-600" />
      default:
        return null
    }
  }

  const daysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="flex h-screen bg-university-cream overflow-hidden">
      {/* Notification */}
      {showNotification && (
        <Notification 
          milestones={milestones} 
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* Sidebar - Course Groups and Channels */}
      <div className="w-64 bg-university-navy text-white flex flex-col">
        <div className="p-4 border-b border-university-blue">
          <div className="flex items-center space-x-2">
            <AcademicCapIcon className="w-8 h-8 text-university-gold" />
            <h1 className="text-xl font-bold">UniCollab</h1>
          </div>
          <p className="text-sm text-gray-300 mt-1">Academic Collaboration</p>
        </div>
        
        {/* Navigation */}
        <div className="p-2 border-b border-university-blue">
          <div className="space-y-1">
            <button
              onClick={() => setCurrentView('chat')}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'chat'
                  ? 'bg-university-blue text-white'
                  : 'text-gray-300 hover:bg-university-blue/50'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Chat</span>
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-university-blue text-white'
                  : 'text-gray-300 hover:bg-university-blue/50'
              }`}
            >
              <ChartBarIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <button
              onClick={() => setCurrentView('calendar')}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'calendar'
                  ? 'bg-university-blue text-white'
                  : 'text-gray-300 hover:bg-university-blue/50'
              }`}
            >
              <CalendarIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Calendar</span>
            </button>
          </div>
        </div>
        
        {currentView === 'chat' && (
          <div className="flex-1 overflow-y-auto p-2">
            <div className="mb-4">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                My Courses
              </h2>
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                    activeChannel === channel.id
                      ? 'bg-university-blue text-white'
                      : 'text-gray-300 hover:bg-university-blue/50'
                  }`}
                >
                  <span className="text-xl">{channel.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">{channel.name}</div>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-university-gold text-university-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 border-t border-university-blue">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <UserIcon className="w-5 h-5" />
              <span className="text-sm font-medium">{currentUser?.name || 'You'}</span>
            </div>
            <button
              onClick={handleLogout}
              className="p-1 hover:bg-university-blue/50 rounded transition-colors"
              title="Logout"
            >
              <LogOutIcon className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-400">{currentUser?.email || 'student@university.edu'}</p>
        </div>
      </div>

      {/* Main Content Area */}
      {currentView === 'chat' && (
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-university-navy">
                  {channels.find(c => c.id === activeChannel)?.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {members.filter(m => m.online).length} members online • Verified team members only
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChartBarIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <UserGroupIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {currentMessages.map((message) => (
                  <div key={message.id} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-xl">
                        {message.avatar}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-semibold text-university-navy">{message.author}</span>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      <p className="text-gray-700 mt-1">{message.text}</p>
                      {message.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {message.attachments.map((att, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-university-blue hover:underline cursor-pointer">
                              <PaperClipIcon className="w-4 h-4" />
                              <span>{att}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input with AI Translation */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setTranslationEnabled(!translationEnabled)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                        translationEnabled
                          ? 'bg-university-blue text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <LanguageIcon className="w-4 h-4" />
                      <span>AI Translate</span>
                    </button>
                    {translationEnabled && (
                      <select
                        value={originalLanguage}
                        onChange={(e) => setOriginalLanguage(e.target.value)}
                        className="text-xs px-2 py-1 border border-gray-300 rounded bg-white"
                      >
                        <option value="en">English</option>
                        <option value="zh">中文 (Chinese)</option>
                        <option value="es">Español (Spanish)</option>
                        <option value="fr">Français (French)</option>
                        <option value="ja">日本語 (Japanese)</option>
                        <option value="ko">한국어 (Korean)</option>
                      </select>
                    )}
                  </div>
                  {translationEnabled && originalLanguage !== 'en' && newMessage.trim() && (
                    <button
                      onClick={handleTranslate}
                      className="text-xs text-university-blue hover:underline"
                    >
                      Translate to English
                    </button>
                  )}
                </div>
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder={translationEnabled && originalLanguage !== 'en' 
                      ? `Type in ${originalLanguage === 'zh' ? 'Chinese' : originalLanguage.toUpperCase()}...` 
                      : "Type a message..."}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-university-blue focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-university-blue text-white rounded-lg hover:bg-university-light-blue transition-colors"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </form>
                {translationEnabled && (
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Type in your native language and it will be automatically translated to English for your team
                  </p>
                )}
              </div>
            </div>

            {/* Collaborative Milestone Tracker */}
            <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-university-cream">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-6 h-6 text-university-navy" />
                  <h3 className="text-lg font-semibold text-university-navy">
                    Milestone Tracker
                  </h3>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Track assignments and group progress
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {milestones.map((milestone) => {
                  const daysLeft = daysUntilDue(milestone.dueDate)
                  const isUrgent = daysLeft <= 3 && milestone.status !== 'completed'
                  
                  return (
                    <div
                      key={milestone.id}
                      className={`border-2 rounded-lg p-4 transition-all hover:shadow-md ${
                        isUrgent ? 'border-red-300 bg-red-50' : getStatusColor(milestone.status)
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-university-navy mb-1">
                            {milestone.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            {milestone.description}
                          </p>
                        </div>
                        <div className="ml-2">
                          {getStatusIcon(milestone.status)}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Assigned to:</span>
                          <span className="font-medium text-university-navy">
                            {milestone.assignedTo}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Due Date:</span>
                          <span className={`font-medium ${isUrgent ? 'text-red-600' : 'text-university-navy'}`}>
                            {new Date(milestone.dueDate).toLocaleDateString()} 
                            {isUrgent && ` (${daysLeft} days left!)`}
                          </span>
                        </div>

                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium text-university-navy">
                              {milestone.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                milestone.status === 'completed'
                                  ? 'bg-green-500'
                                  : milestone.status === 'in-progress'
                                  ? 'bg-blue-500'
                                  : 'bg-yellow-500'
                              }`}
                              style={{ width: `${milestone.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="p-4 border-t border-gray-200 bg-university-cream">
                <button className="w-full py-2 px-4 bg-university-blue text-white rounded-lg hover:bg-university-light-blue transition-colors font-medium text-sm">
                  + Add New Milestone
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentView === 'dashboard' && (
        <div className="flex-1">
          <Dashboard 
            members={members}
            tasks={tasks}
            activities={activities}
          />
        </div>
      )}

      {currentView === 'calendar' && (
        <div className="flex-1 p-6">
          <CalendarView 
            milestones={milestones}
            onDateClick={(date) => {
              console.log('Date clicked:', date)
            }}
          />
        </div>
      )}

      {/* Member List Sidebar - Only show in chat view */}
      {currentView === 'chat' && (
        <div className="w-56 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-university-navy uppercase tracking-wider">
              Members ({members.length})
            </h3>
            <p className="text-xs text-gray-500 mt-1">Verified team members</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-xl">
                    {member.avatar}
                  </div>
                  {member.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-university-navy truncate">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
