'use client'

import axios from "axios";
import { useState } from "react";

const BotIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C8.134 2 5 5.134 5 9v1H4a2 2 0 00-2 2v6a2 2 0 002 2h1v1a2 2 0 002 2h10a2 2 0 002-2v-1h1a2 2 0 002-2v-6a2 2 0 00-2-2h-1V9c0-3.866-3.134-7-7-7zM7 9c0-2.761 2.239-5 5-5s5 2.239 5 5v1H7V9zm-3 3v6h16v-6H4zm5 3a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z"
    />
  </svg>
);

const SendIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatbotPage = () => {
  const [message, setMessage] = useState('')
    const [chatLog, setChatLog] = useState<{ type: 'user' | 'bot'; text: string }[]>([
    { type: 'bot', text: "Hello! I'm your AI assistant. How can I help you today?" },
  ]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const userMessage = message;
    setChatLog(prev => [...prev, { type: 'user', text: userMessage }]);
    setMessage('');
    
    if (!message.trim()) return
    let message_json = {
      "message": message
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/chat', message_json);

      const botReply = response.data.reply;
      setChatLog(prev => [...prev, { type: 'bot', text: botReply }]);
    } catch (error) {
      setChatLog(prev => [...prev, { type: 'bot', text: "⚠️ Failed to reach server." }]);
    }
  }

   const renderMessage = (entry: { type: 'user' | 'bot'; text: string }, index: number) => {
    const isUser = entry.type === 'user';
    return (
      <div
        key={index}
        className={`flex items-start ${isUser ? 'justify-end' : ''} gap-3`}
      >
        {!isUser && <BotIcon />}
        <div
          className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
            isUser ? 'bg-primary text-white' : 'bg-gray-100 text-black dark:bg-gray-800 dark:text-white'
          }`}
        >
          <p>{entry.text}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-gray-800 dark:bg-gray-dark">
        <div className="flex flex-col h-[calc(100vh-200px)] max-h-[800px] dark:border-gray-800 dark:bg-gray-dark">
          <div className="flex items-center gap-3 border-b border-stroke px-6 py-4 dark:border-strokedark">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              <BotIcon size={20} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-black dark:text-white">
                AI Assistant
              </h4>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatLog.map((entry, i) => renderMessage(entry, i))}
          </div>

          <div className="border-t border-stroke p-4 dark:border-strokedark">
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2 outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark"
              >
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotPage;