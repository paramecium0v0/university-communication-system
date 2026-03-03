import React, { useState } from 'react'
import { AcademicCapIcon, LockClosedIcon, EnvelopeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const Login = ({ onLogin }) => {
  const [step, setStep] = useState('login') // 'login' or 'verification'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    
    // Mock validation
    if (email && password) {
      // Simulate sending verification code
      setStep('verification')
    } else {
      setError('Please enter both email and password')
    }
  }

  const handleVerification = (e) => {
    e.preventDefault()
    setError('')
    
    // Mock verification - accept any 6-digit code
    if (verificationCode.length === 6) {
      onLogin({ email, name: email.split('@')[0] })
    } else {
      setError('Please enter a valid 6-digit verification code')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-university-navy via-university-blue to-university-light-blue flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-university-navy p-4 rounded-full">
              <AcademicCapIcon className="w-12 h-12 text-university-gold" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-university-navy mb-2">UniCollab</h1>
          <p className="text-gray-600">Secure Academic Collaboration Platform</p>
        </div>

        {step === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-university-blue focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-university-blue focus:border-transparent"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-university-blue text-white py-3 rounded-lg font-semibold hover:bg-university-light-blue transition-colors shadow-lg"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-gray-600">
              <p>Demo: Use any email and password to proceed</p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerification} className="space-y-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <ShieldCheckIcon className="w-12 h-12 text-university-blue" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-university-navy mb-2">
                Email Verification
              </h2>
              <p className="text-gray-600 text-sm">
                We've sent a verification code to <br />
                <span className="font-semibold">{email}</span>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                Enter Verification Code
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                maxLength="6"
                className="block w-full text-center text-2xl tracking-widest py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-university-blue focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                Demo: Enter any 6 digits
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-university-blue text-white py-3 rounded-lg font-semibold hover:bg-university-light-blue transition-colors shadow-lg"
              >
                Verify & Continue
              </button>
              <button
                type="button"
                onClick={() => setStep('login')}
                className="w-full text-university-blue py-2 text-sm hover:underline"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>End-to-end encrypted • Verified university access only</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

