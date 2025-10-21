import { useState, useEffect, useRef } from 'react'

const Messenger = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messengerMessages') || '[]')
    setMessages(savedMessages)
  }, [])

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: newMessage.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    localStorage.setItem('messengerMessages', JSON.stringify(updatedMessages))
    setNewMessage('')

    // Simulate instructor reply after 2-3 seconds
    setTimeout(() => {
      const instructorReplies = [
        "Thanks for your message, we'll get back to you soon.",
        "We appreciate your interest in Drolly Inc. Our team will review your inquiry shortly.",
        "Thank you for contacting us. We'll respond within 24 hours.",
        "Your message has been received. Our logistics team will be in touch soon."
      ]
      
      const randomReply = instructorReplies[Math.floor(Math.random() * instructorReplies.length)]
      
      const instructorMessage = {
        id: Date.now() + 1,
        text: randomReply,
        sender: 'instructor',
        timestamp: new Date().toISOString()
      }

      const finalMessages = [...updatedMessages, instructorMessage]
      setMessages(finalMessages)
      localStorage.setItem('messengerMessages', JSON.stringify(finalMessages))
    }, 2000 + Math.random() * 1000) // Random delay between 2-3 seconds
  }

  const clearMessages = () => {
    setMessages([])
    localStorage.removeItem('messengerMessages')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Live Chat</h2>
        <button
          onClick={clearMessages}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Clear Messages
        </button>
      </div>

      <div className="h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet. Start a conversation!</p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-xs px-3 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Messenger
