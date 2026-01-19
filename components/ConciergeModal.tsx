
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Car } from '../types';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  carContext?: Car;
}

const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose, carContext }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { 
      role: 'assistant', 
      text: carContext 
        ? `Hello! I see you're interested in the ${carContext.year} ${carContext.make} ${carContext.model}. It's an exceptional choice. How can I assist you with this vehicle today?`
        : "Welcome to LuxAuto. I'm your private concierge. Are you looking for a specific model or would you like to hear about our latest arrivals?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are a high-end luxury car concierge for LuxAuto. Context: The user is looking at ${carContext ? carContext.year + ' ' + carContext.make + ' ' + carContext.model : 'our general inventory'}. Be extremely professional, knowledgeable about supercars, and helpful. Current conversation:\n${messages.map(m => `${m.role}: ${m.text}`).join('\n')}\nuser: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "Act as a world-class automotive specialist. Be concise but elegant."
        }
      });

      const aiText = response.text || "I apologize, but I am having trouble connecting to our systems. Please try again or call us directly.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm currently offline, but our human concierge team is available at 1-800-LUX-AUTO." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1c1f27] w-full max-w-lg rounded-2xl border border-[#282e39] shadow-2xl overflow-hidden flex flex-col h-[600px] animate-fade-in-up">
        {/* Header */}
        <div className="p-5 border-b border-[#282e39] flex justify-between items-center bg-[#101622]/50">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <h3 className="text-white font-bold">Private Concierge</h3>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Online & Ready
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-[#282e39] text-gray-200 rounded-bl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#282e39] p-4 rounded-2xl rounded-bl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-[#282e39] bg-[#101622]/50">
          <div className="relative">
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your inquiry..."
              className="w-full bg-[#1c1f27] border border-[#282e39] text-white text-sm rounded-xl py-4 pl-5 pr-14 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all shadow-inner"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 size-10 bg-primary hover:bg-blue-600 disabled:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-all"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConciergeModal;
