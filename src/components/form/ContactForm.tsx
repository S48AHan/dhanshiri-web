// components/ContactForm.tsx
'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('success')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-3">
        Reach Us for Any Queries
      </h2>

      <label className="block mb-2">
        Your Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block mb-3">
        Your Query
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending…' : 'Send Query'}
      </button>

      {status === 'success' && (
        <p className="mt-2 text-green-600">Message sent!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
