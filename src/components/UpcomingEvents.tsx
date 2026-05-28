'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EventItem {
  time: string;
  title: string;
  type: string;
  colorClass: string;
}

export default function UpcomingEvents() {
  const events: EventItem[] = [
    {
      time: '3:00 PM',
      title: 'React: Render Optimization',
      type: 'Live Session - S. Verma',
      colorClass: 'text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5 hover:border-brand-cyan/35',
    },
    {
      time: '5:30 PM',
      title: 'UI/UX Assignment Due',
      type: 'Module 9 - Submission',
      colorClass: 'text-brand-purple border-brand-purple/20 bg-brand-purple/5 hover:border-brand-purple/35',
    },
    {
      time: 'TUE 11A',
      title: 'DSA: Binary Trees',
      type: 'Recorded Lesson - R. Singh',
      colorClass: 'text-brand-teal border-brand-teal/20 bg-brand-teal/5 hover:border-brand-teal/35',
    },
  ];

  return (
    <motion.div 
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl glass-panel glow-border p-6 flex flex-col justify-between shadow-2xl min-h-[300px] cursor-pointer"
    >
      <div className="card-grain" />

      <div className="relative z-10 w-full flex flex-col h-full justify-between gap-4">
        <div>
          <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-widest block mb-4">
            Upcoming
          </span>
        </div>

        {/* List */}
        <div className="space-y-3.5 flex-1 flex flex-col justify-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-slate-950/40 hover:bg-slate-950/80 border border-slate-900/60 hover:border-slate-800 p-3.5 rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Time Pill */}
              <div className={`w-20 h-10 rounded-xl flex items-center justify-center border text-[9px] font-black tracking-wide shrink-0 transition-colors duration-300 ${event.colorClass}`}>
                {event.time}
              </div>

              {/* Event Content */}
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-200 truncate group-hover:text-white transition-colors duration-300">
                  {event.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-extrabold mt-0.5">
                  {event.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
