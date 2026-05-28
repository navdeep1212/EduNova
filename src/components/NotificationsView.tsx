'use client';

import React from 'react';
import { Bell, Award, BookOpen, AlertCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotificationItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
  colorClass: string;
}

export default function NotificationsView() {
  const notifications: NotificationItem[] = [
    {
      id: '1',
      icon: BookOpen,
      title: 'New Quiz Published',
      desc: 'Instructor S. Verma added "Module 3: Advanced Hooks Quiz" to Advanced React Patterns & Architecture.',
      time: '2 hours ago',
      unread: true,
      colorClass: 'text-brand-cyan bg-brand-cyan/5 border-brand-cyan/20',
    },
    {
      id: '2',
      icon: Bell,
      title: 'Upcoming Webinar Reminder',
      desc: 'Live Session "React: Render Optimization" will begin in exactly 30 minutes.',
      time: '30 mins ago',
      unread: true,
      colorClass: 'text-brand-purple bg-brand-purple/5 border-brand-purple/20',
    },
    {
      id: '3',
      icon: Award,
      title: 'Achievement Unlocked: Streak Champion',
      desc: 'Congratulations! You unlocked the "Prime Scholar" badge for maintaining a 20-day study streak.',
      time: '1 day ago',
      unread: false,
      colorClass: 'text-brand-orange bg-brand-orange/5 border-brand-orange/20',
    },
    {
      id: '4',
      icon: MessageSquare,
      title: 'Reply on Community Board',
      desc: 'Instructor R. Singh replied to your thread: "Has anyone solved the final recursion challenge?".',
      time: '2 days ago',
      unread: false,
      colorClass: 'text-brand-teal bg-brand-teal/5 border-brand-teal/20',
    },
  ];

  return (
    <div className="p-6 lg:p-10 w-full max-w-4xl mx-auto space-y-8 select-none">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">ALERTS CENTER</h2>
          <p className="text-slate-400 text-xs mt-1">Stay updated with classroom materials and grading remarks.</p>
        </div>
        <button className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-slate-200 text-xs font-bold transition-all duration-300">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-2xl border p-4.5 flex gap-4 transition-[border-color,background-color] duration-300 ${
                item.unread 
                  ? 'bg-brand-cyan/2 border-brand-cyan/20 hover:border-brand-cyan/35 shadow-[0_0_15px_rgba(0,240,255,0.02)]' 
                  : 'bg-slate-950/40 border-slate-900/60 hover:border-slate-800'
              }`}
            >
              <div className="card-grain" />

              {/* Icon Bubble */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${item.colorClass}`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Text info */}
              <div className="flex-1 min-w-0 space-y-1 relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                  <span className="text-[10px] font-semibold text-slate-500 shrink-0">{item.time}</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
              </div>

              {/* Unread indicator */}
              {item.unread && (
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] z-10" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
