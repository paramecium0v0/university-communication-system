import React, { useState } from 'react'
import { 
  ChartBarIcon, 
  CodeBracketIcon, 
  CheckCircleIcon, 
  ClockIcon,
  UserIcon,
  CalendarIcon,
  ArrowTrendingUpIcon,
  FireIcon
} from '@heroicons/react/24/outline'

const Dashboard = ({ members, tasks, activities }) => {
  const [selectedView, setSelectedView] = useState('overview') // 'overview', 'tasks', 'activity'

  // Calculate statistics
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.status === 'completed').length
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length
  const pendingTasks = tasks.filter(t => t.status === 'pending').length

  const memberStats = members.map(member => {
    const memberTasks = tasks.filter(t => t.assignedTo === member.name)
    const completed = memberTasks.filter(t => t.status === 'completed').length
    const contributions = activities.filter(a => a.member === member.name).length
    
    return {
      ...member,
      taskCount: memberTasks.length,
      completedCount: completed,
      contributions,
      commits: Math.floor(Math.random() * 20) + 5 // Mock data
    }
  })

  return (
    <div className="h-full flex flex-col bg-university-cream">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-university-navy">Team Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Monitor activity and track progress</p>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex space-x-1">
          {[
            { id: 'overview', label: 'Overview', icon: ChartBarIcon },
            { id: 'tasks', label: 'Task Management', icon: CheckCircleIcon },
            { id: 'activity', label: 'Activity Feed', icon: FireIcon }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                selectedView === tab.id
                  ? 'border-university-blue text-university-blue'
                  : 'border-transparent text-gray-600 hover:text-university-navy'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {selectedView === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Tasks</p>
                    <p className="text-2xl font-bold text-university-navy mt-1">{totalTasks}</p>
                  </div>
                  <CheckCircleIcon className="w-8 h-8 text-university-blue" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">{completedTasks}</p>
                  </div>
                  <CheckCircleIcon className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">{inProgressTasks}</p>
                  </div>
                  <ClockIcon className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600 mt-1">{pendingTasks}</p>
                  </div>
                  <CalendarIcon className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Team Member Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-university-navy">Team Member Activity</h2>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {memberStats.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-university-blue flex items-center justify-center text-xl">
                            {member.avatar}
                          </div>
                          {member.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-university-navy">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Tasks</p>
                          <p className="font-semibold text-university-navy">{member.taskCount}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Commits</p>
                          <p className="font-semibold text-university-navy">{member.commits}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Contributions</p>
                          <p className="font-semibold text-green-600">{member.contributions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'tasks' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-university-navy">Task Management</h2>
                <button className="px-4 py-2 bg-university-blue text-white rounded-lg text-sm font-medium hover:bg-university-light-blue transition-colors">
                  + New Task
                </button>
              </div>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CodeBracketIcon className="w-5 h-5 text-university-blue" />
                          <h3 className="font-semibold text-university-navy">{task.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            task.status === 'completed' ? 'bg-green-100 text-green-800' :
                            task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {task.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Assigned to: <span className="font-medium text-university-navy">{task.assignedTo}</span></span>
                          <span>Due: <span className="font-medium">{new Date(task.dueDate).toLocaleDateString()}</span></span>
                        </div>
                      </div>
                      <div className="ml-4">
                        {task.status === 'pending' && (
                          <button className="px-3 py-1 bg-university-blue text-white rounded text-xs font-medium hover:bg-university-light-blue">
                            Accept
                          </button>
                        )}
                        {task.status === 'in-progress' && (
                          <button className="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700">
                            Mark Complete
                          </button>
                        )}
                      </div>
                    </div>
                    {task.progress > 0 && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{task.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-university-blue h-2 rounded-full transition-all"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'activity' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h2 className="text-lg font-semibold text-university-navy mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-university-blue flex items-center justify-center text-sm text-white font-semibold">
                      {activity.member.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-university-navy">{activity.member}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard

