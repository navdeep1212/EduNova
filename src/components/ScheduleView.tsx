'use client';

import React from 'react';
import { Calendar, Clock, Video, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScheduleItem {
  time: string;
  duration: string;
  title: string;
  details: string;
  type: 'live' | 'submission' | 'study';
  status: 'done' | 'pending';
}

export default function ScheduleView() {
  const scheduleData: ScheduleItem[] = [
    {
      time: '10:00 AM',
      duration: '2 hours',
      title: 'Self Study: Algorithms',
      details: 'Review Binary Trees traversal methods and solve 3 LeetCode problems.',
      type: 'study',
      status: 'done',
    },
    {
      time: '03:00 PM',
      duration: '1.5 hours',
      title: 'React: Render Optimization',
      details: 'Live Webinar with instructor S. Verma covering UseMemo and virtual grids.',
      type: 'live',
      status: 'pending',
    },
    {
      time: '05:30 PM',
      duration: 'Deadline',
      title: 'UI/UX Assignment Submission',
      details: 'Submit Module 9 Figma design assets in the student portal.',
      type: 'submission',
      status: 'pending',
    },
    {
      time: '08:00 PM',
      duration: '1 hour',
      title: 'Review Chapter: Python Algorithms',
      details: 'Recorded lecture review covering graphs and search hierarchies.',
      type: 'study',
      status: 'pending',
    },
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'live':
        return 'text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5 shadow-[0_0_12px_rgba(0,240,255,0.05)]';
      case 'submission':
        return 'text-brand-purple border-brand-purple/20 bg-brand-purple/5 shadow-[0_0_12px_rgba(139,92,246,0.05)]';
      default:
        return 'text-brand-teal border-brand-teal/20 bg-brand-teal/5 shadow-[0_0_12px_rgba(13,242,201,0.05)]';
    }
  };

  return (
    <div className="p-6 lg:p-10 w-full max-w-4xl mx-auto space-y-8 select-none">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tight">STUDY SCHEDULE</h2>
        <p className="text-slate-400 text-xs mt-1">Review your upcoming live sessions and self-study checkpoints.</p>
      </div>

      <div className="relative border-l border-slate-900 ml-4 pl-8 space-y-8 py-2">
        {scheduleData.map((item, index) => {
          const isDone = item.status === 'done';
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              {/* Timeline Indicator dot */}
              <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full border bg-slate-950 flex items-center justify-center transition-colors duration-300 ${
                isDone 
                  ? 'border-brand-teal text-brand-teal shadow-[0_0_8px_rgba(13,242,201,0.4)]' 
                  : 'border-slate-800 text-slate-500 group-hover:border-brand-cyan'
              }`}>
                {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3 h-3" />}
              </div>

              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl glass-panel border border-slate-900/60 hover:border-slate-800 p-5 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                <div className="card-grain" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-slate-500">{item.time} ({item.duration})</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-wide border ${getTypeStyle(item.type)}`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 max-w-2xl">{item.details}</p>
                  </div>

                  {item.type === 'live' && (
                    <button className="px-4 py-2 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-bg-deep font-bold text-xs shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all duration-300 shrink-0 self-start sm:self-center">
                      Join Stream
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
