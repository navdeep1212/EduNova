'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function LearningActivity() {
  const activityData = useMemo(() => {
    const data: number[] = [];
    const seed = [
      0, 0, 1, 2, 0, 1, 0,
      1, 2, 3, 0, 0, 1, 2,
      2, 4, 3, 1, 0, 0, 0,
      0, 1, 0, 2, 3, 4, 1,
      0, 0, 1, 1, 2, 0, 0,
      3, 4, 2, 0, 1, 2, 3,
      0, 1, 2, 1, 0, 0, 0,
      2, 3, 0, 1, 0, 2, 2,
      0, 0, 1, 0, 3, 4, 1,
      2, 2, 3, 0, 0, 1, 0,
      1, 2, 4, 3, 2, 0, 1,
      0, 0, 1, 0, 0, 2, 3,
      4, 3, 2, 1, 0, 0, 1,
    ];

    for (let i = 0; i < 182; i++) {
      data.push(seed[i % seed.length]);
    }
    return data;
  }, []);

  const getColorClass = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-brand-cyan/20 border border-brand-cyan/15';
      case 2:
        return 'bg-brand-cyan/40 border border-brand-cyan/30';
      case 3:
        return 'bg-brand-teal/70 border border-brand-teal/40';
      case 4:
        return 'bg-brand-cyan border border-brand-cyan shadow-[0_0_12px_rgba(0,240,255,0.6)]';
      default:
        return 'bg-slate-950/60 border border-slate-900/60';
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl glass-panel glow-border p-6 flex flex-col justify-between shadow-2xl min-h-[350px] cursor-pointer"
    >
      <div className="card-grain" />
      
      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-widest">
            Learning Activity — Last 26 Weeks
          </span>
        </div>

        {/* Contribution Grid */}
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[340px] max-w-full justify-start py-2 px-1">
            {activityData.map((level, index) => (
              <div
                key={index}
                className={`w-3.5 h-3.5 rounded-[4px] transition-all duration-300 hover:scale-135 cursor-pointer ${getColorClass(level)}`}
                title={`Day ${index + 1}: Level ${level} Activity`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="relative z-10 flex items-center justify-start gap-2.5 text-[9px] font-extrabold text-slate-500 mt-4 select-none">
        <span>Less</span>
        <div className="flex gap-1.5">
          <div className="w-3.5 h-3.5 rounded-[3px] bg-slate-950/60 border border-slate-900/60" />
          <div className="w-3.5 h-3.5 rounded-[3px] bg-brand-cyan/20 border border-brand-cyan/15" />
          <div className="w-3.5 h-3.5 rounded-[3px] bg-brand-cyan/40 border border-brand-cyan/30" />
          <div className="w-3.5 h-3.5 rounded-[3px] bg-brand-teal/70 border border-brand-teal/40" />
          <div className="w-3.5 h-3.5 rounded-[3px] bg-brand-cyan shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
        </div>
        <span>More</span>
      </div>
    </motion.div>
  );
}
