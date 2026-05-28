'use client';

import React, { useState } from 'react';
import { MessageSquare, Users, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ForumPost {
  id: string;
  author: string;
  avatar: string;
  role: 'student' | 'instructor';
  body: string;
  time: string;
  replies: number;
}

export default function CommunityView() {
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: '1',
      author: 'R. Singh',
      avatar: 'RS',
      role: 'instructor',
      body: 'Welcome to the cohort! Make sure to review the Binary Trees lecture slides before tomorrow morning\'s practice challenge.',
      time: '3 hours ago',
      replies: 5,
    },
    {
      id: '2',
      author: 'P. Mehta',
      avatar: 'PM',
      role: 'instructor',
      body: 'Check out the visual asset kit in the Resources panel. It contains templates matching our UI systems.',
      time: '5 hours ago',
      replies: 2,
    },
    {
      id: '3',
      author: 'Arjun Kumar',
      avatar: 'AK',
      role: 'student',
      body: 'Has anyone solved the final recursion challenge from Module 4? Looking to trace the stack trace behavior.',
      time: 'Yesterday',
      replies: 12,
    },
  ]);

  const [inputVal, setInputVal] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newPost: ForumPost = {
      id: String(posts.length + 1),
      author: 'Arjun Kumar',
      avatar: 'AK',
      role: 'student',
      body: inputVal,
      time: 'Just now',
      replies: 0,
    };

    setPosts([newPost, ...posts]);
    setInputVal('');
  };

  return (
    <div className="p-6 lg:p-10 w-full max-w-4xl mx-auto space-y-8 select-none">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">COMMUNITY HUB</h2>
          <p className="text-slate-400 text-xs mt-1">Discuss coding topics and interface questions with classmates.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-[9px] font-extrabold text-brand-teal uppercase tracking-widest">
          <Users className="w-3.5 h-3.5" /> 14 Online
        </div>
      </div>

      {/* Discussion Input */}
      <form onSubmit={handlePost} className="relative bg-slate-950/40 border border-slate-900/60 p-4 rounded-2xl">
        <textarea
          rows={2}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Start a new thread or ask a question..."
          className="w-full bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-500 text-xs resize-none"
        />
        <div className="flex justify-between items-center border-t border-slate-900/60 pt-3 mt-2">
          <span className="text-[10px] text-slate-500 font-bold">Posting as Arjun Kumar (Student)</span>
          <button type="submit" className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan/95 text-bg-deep font-bold text-[10px] transition-colors duration-300">
            <Send className="w-3 h-3" /> Post Thread
          </button>
        </div>
      </form>

      {/* Forum List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-950/40 border border-slate-900/60 p-5 rounded-2xl space-y-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-900 flex items-center justify-center text-brand-cyan text-xs font-black select-none">
                  {post.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-200">{post.author}</span>
                    <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded border ${
                      post.role === 'instructor' 
                        ? 'text-brand-purple border-brand-purple/20 bg-brand-purple/5' 
                        : 'text-slate-500 border-slate-900'
                    }`}>
                      {post.role}
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 font-bold">{post.time}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed select-text">{post.body}</p>

            <div className="flex justify-start gap-4 border-t border-slate-900/40 pt-3 text-[10px] text-slate-500 font-bold">
              <button className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" /> {post.replies} Replies
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
