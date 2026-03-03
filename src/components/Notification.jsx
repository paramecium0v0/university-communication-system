import React, { useEffect, useState } from 'react'
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Notification = ({ milestones, onClose }) => {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  
  useEffect(() => {
    const checkDeadlines = () => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      const upcomingDeadlines = milestones.filter(milestone => {
        if (milestone.status === 'completed') return false
        
        const dueDate = new Date(milestone.dueDate)
        dueDate.setHours(0, 0, 0, 0)
        
        const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24))
        
        // Show notification if deadline is within 3 days
        return daysUntilDue >= 0 && daysUntilDue <= 3
      })
      
      if (upcomingDeadlines.length > 0) {
        const urgent = upcomingDeadlines.filter(m => {
          const dueDate = new Date(m.dueDate)
          const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24))
          return daysUntilDue <= 1
        })
        
        if (urgent.length > 0) {
          setNotificationMessage(
            `⚠️ It's time for you to do your homework! ${urgent.length} assignment(s) due within 24 hours: ${urgent.map(m => m.title).join(', ')}`
          )
        } else {
          setNotificationMessage(
            `📅 Reminder: ${upcomingDeadlines.length} assignment(s) approaching deadline: ${upcomingDeadlines.map(m => m.title).join(', ')}`
          )
        }
        setShowNotification(true)
      }
    }
    
    // Check immediately
    checkDeadlines()
    
    // Check every hour
    const interval = setInterval(checkDeadlines, 60 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [milestones])
  
  if (!showNotification) return null
  
  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-2xl border-2 border-yellow-400 max-w-md p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-university-navy">Deadline Reminder</h3>
              <button
                onClick={() => {
                  setShowNotification(false)
                  onClose && onClose()
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-700">{notificationMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification

