'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DayData {
  day: string;
  hours: number;
  percentage: number;
  color: string;
  glowColor: string;
}

export default function WeeklyActivity() {
  const days: DayData[] = [
    { day: 'M', hours: 1.2, percentage: 50, color: 'from-brand-cyan/40 to-brand-cyan', glowColor: 'rgba(0, 240, 255, 0.4)' },
    { day: 'T', hours: 2.0, percentage: 83, color: 'from-brand-purple/40 to-brand-purple', glowColor: 'rgba(139, 92, 246, 0.4)' },
    { day: 'W', hours: 0.8, percentage: 33, color: 'from-brand-cyan/40 to-brand-cyan', glowColor: 'rgba(0, 240, 255, 0.4)' },
    { day: 'T', hours: 2.4, percentage: 100, color: 'from-brand-teal/40 to-brand-teal', glowColor: 'rgba(13, 242, 201, 0.4)' },
    { day: 'F', hours: 1.5, percentage: 62, color: 'from-brand-cyan/40 to-brand-cyan', glowColor: 'rgba(0, 240, 255, 0.4)' },
    { day: 'S', hours: 0.2, percentage: 8, color: 'from-slate-800 to-slate-600', glowColor: 'rgba(100, 116, 139, 0.1)' },
    { day: 'S', hours: 0.3, percentage: 12, color: 'from-slate-800 to-slate-600', glowColor: 'rgba(100, 116, 139, 0.1)' },
  ];

  return (
    <motion.div 
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl glass-panel glow-border p-6 flex flex-col justify-between shadow-2xl min-h-[300px] cursor-pointer"
    >
      <div className="card-grain" />

      {/* Grid wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-end h-full w-full">
        {/* Bar Chart Section */}
        <div className="md:col-span-3 flex flex-col justify-between h-full w-full">
          <div>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-widest block mb-6">
              Weekly Activity
            </span>
          </div>

          {/* Bar Columns Container */}
          <div className="flex items-end justify-between w-full h-36 px-2 relative">
            {/* Grid Line Backdrops */}
            <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between pointer-events-none opacity-10">
              <div className="w-full border-t border-slate-400 h-0" />
              <div className="w-full border-t border-slate-400 h-0" />
              <div className="w-full border-t border-slate-400 h-0" />
              <div className="w-full border-t border-slate-400 h-0" />
            </div>

            {days.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2.5 group cursor-pointer relative z-10">
                {/* Bar */}
                <div className="relative h-28 w-4 bg-slate-950/80 rounded-full overflow-hidden border border-slate-900 flex flex-col justify-end">
                  <motion.div
                    className={`w-full rounded-full bg-gradient-to-t ${item.color}`}
                    style={{ boxShadow: `0 0 12px ${item.glowColor}` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${item.percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.08 }}
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block bg-slate-950 text-brand-cyan text-[9px] px-2 py-0.5 rounded border border-slate-800 font-extrabold whitespace-nowrap z-20 shadow-2xl">
                    {item.hours}h
                  </div>
                </div>
                {/* Label */}
                <span className="text-[10px] font-extrabold text-slate-500 group-hover:text-slate-200 transition-colors duration-300">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="md:col-span-2 flex flex-col justify-center gap-6 h-full border-t md:border-t-0 md:border-l border-slate-900/60 pt-6 md:pt-0 md:pl-8">
          {/* Stat 1 */}
          <div className="flex flex-col hover:translate-x-1 transition-transform duration-300 group/stat">
            <span className="text-3xl font-black text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] group-hover/stat:text-brand-cyan transition-colors">
              8.4h
            </span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-widest">
              This Week
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col hover:translate-x-1 transition-transform duration-300 group/stat">
            <span className="text-3xl font-black text-brand-teal tracking-tight drop-shadow-[0_0_12px_rgba(13,242,201,0.08)] group-hover/stat:text-white transition-colors">
              12
            </span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-widest">
              Lessons Done
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col hover:translate-x-1 transition-transform duration-300 group/stat">
            <span className="text-3xl font-black text-brand-purple tracking-tight drop-shadow-[0_0_12px_rgba(139,92,246,0.08)] group-hover/stat:text-white transition-colors">
              3
            </span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-widest">
              Quizzes Passed
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
