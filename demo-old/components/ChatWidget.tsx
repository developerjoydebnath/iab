
import React, { useEffect, useRef, useState } from 'react';
import { askCampaignAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "আসসালামু আলাইকুম! আমি এই ক্যাম্পেইনের ডিজিটাল সহকারী। আমাদের লক্ষ্য ও পরিকল্পনা সম্পর্কে আপনার কোনো প্রশ্ন আছে কি?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askCampaignAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[550px] rounded-[30px] shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="bg-bd-green p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-islamic-gold">
                <i className="fa-solid fa-robot text-bd-green text-lg"></i>
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-wider">ক্যাম্পেইন সহকারী</h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] opacity-80 font-bold">অনলাইন</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-islamic-gold transition-colors bg-white/10 w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-islamic-gold text-white rounded-br-none'
                  : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl text-sm text-gray-500 shadow-sm rounded-bl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-bd-green rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-bd-green rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-bd-green rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-5 bg-white border-t flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="আপনার বার্তা..."
              className="flex-1 bg-gray-100 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bd-green/50 transition-all font-bold"
            />
            <button
              type="submit"
              className="bg-bd-green text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-islamic-gold transition-all shadow-lg shadow-bd-green/20"
              disabled={isLoading}
            >
              <i className="fa-solid fa-paper-plane text-lg"></i>
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-islamic-gold text-white w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 relative group"
        >
          <i className="fa-solid fa-comments text-2xl"></i>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
