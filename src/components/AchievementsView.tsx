'use client';

import React from 'react';
import { Trophy, Flame, Zap, Award, Target, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface BadgeItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<any>;
  status: 'unlocked' | 'locked';
  progress?: { current: number; target: number };
  colorClass: string;
}

export default function AchievementsView() {
  const badges: BadgeItem[] = [
    {
      id: '1',
      name: 'Prime Scholar',
      desc: 'Completed 5 course modules with an overall grade above 85%.',
      icon: Trophy,
      status: 'unlocked',
      colorClass: 'text-brand-cyan bg-brand-cyan/5 border-brand-cyan/20 shadow-[0_0_15px_rgba(0,240,255,0.08)]',
    },
    {
      id: '2',
      name: 'Flamekeeper',
      desc: 'Maintain a learning streak of 20 consecutive study days.',
      icon: Flame,
      status: 'unlocked',
      colorClass: 'text-brand-orange bg-brand-orange/5 border-brand-orange/20 shadow-[0_0_15px_rgba(245,158,11,0.08)]',
    },
    {
      id: '3',
      name: 'Binary Master',
      desc: 'Successfully solve 50 Data Structures & Algorithms challenges.',
      icon: Zap,
      status: 'locked',
      progress: { current: 41, target: 50 },
      colorClass: 'text-brand-teal bg-brand-teal/5 border-brand-teal/20',
    },
    {
      id: '4',
      name: 'Pixel Architect',
      desc: 'Submit all UI/UX design assignments on or before the due date.',
      icon: Award,
      status: 'unlocked',
      colorClass: 'text-brand-purple bg-brand-purple/5 border-brand-purple/20 shadow-[0_0_15px_rgba(139,92,246,0.08)]',
    },
    {
      id: '5',
      name: 'System Synthesizer',
      desc: 'Deploy a full-stack Next.js project integrated with Supabase.',
      icon: Target,
      status: 'locked',
      progress: { current: 0, target: 1 },
      colorClass: 'text-slate-600 bg-slate-950/20 border-slate-900',
    },
  ];

  return (
    <div className="p-6 lg:p-10 w-full max-w-7xl mx-auto space-y-8 select-none">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tight">ACADEMIC ACHIEVEMENTS</h2>
        <p className="text-slate-400 text-xs mt-1">Unlock futuristic badges by completing lessons and scoring quizzes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          const isUnlocked = badge.status === 'unlocked';
          return (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative overflow-hidden rounded-3xl border p-6 flex flex-col justify-between min-h-[220px] transition-[border-color,background-color,box-shadow] duration-300 ${
                isUnlocked 
                  ? 'bg-slate-950/40 border-slate-900/60 hover:border-slate-800' 
                  : 'bg-slate-950/20 border-slate-950 opacity-60'
              }`}
            >
              <div className="card-grain" />

              <div className="relative z-10 w-full">
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300 ${badge.colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Status Indicator */}
                  <div>
                    {isUnlocked ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-[9px] font-extrabold uppercase text-brand-teal tracking-wider">
                        <CheckCircle2 className="w-3 h-3" /> Unlocked
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-800 bg-slate-950/50 text-[9px] font-extrabold uppercase text-slate-500 tracking-wider">
                        <Lock className="w-3 h-3" /> Locked
                      </span>
                    )}
                  </div>
                </div>

                {/* Badge content */}
                <h4 className="text-lg font-bold text-white tracking-tight mb-1">{badge.name}</h4>
                <p className="text-xs text-slate-400">{badge.desc}</p>
              </div>

              {/* Progress bar for locked badges */}
              {badge.progress && (
                <div className="relative z-10 w-full mt-6 space-y-1.5">
                  <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-slate-500">
                    <span>Progress</span>
                    <span>{badge.progress.current} / {badge.progress.target}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900/40">
                    <motion.div 
                      className="h-full w-full rounded-full bg-slate-850 origin-left progress-shimmer"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: badge.progress.current / badge.progress.target }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
