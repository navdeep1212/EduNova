'use client';

import React from 'react';
import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WelcomeCard() {
  return (
    <motion.div 
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl glass-panel glow-border p-6 lg:p-8 flex flex-col justify-between min-h-[350px] group shadow-2xl select-none cursor-pointer"
    >
      {/* Background textures */}
      <div className="glow-mesh" />
      <div className="card-grain" />

      {/* Top Header Tag */}
      <div className="relative z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-[9px] font-extrabold text-brand-teal uppercase tracking-widest mb-6">
          — Good Morning
        </span>

        {/* Premium Layered Typography */}
        <div className="space-y-0.5 relative">
          <h1 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-500 opacity-60">
            Welcome back,
          </h1>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-stroke-neon uppercase leading-none transition-all duration-500">
            Welcome back,
          </h1>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white uppercase flex items-center gap-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]">
            Arjun <span className="animate-bounce origin-bottom-right inline-block text-4xl lg:text-5xl"></span>
          </h1>
        </div>

        <p className="text-xs lg:text-sm text-slate-400 mt-5 max-w-sm">
          You have <span className="text-brand-cyan font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]">3 lessons</span> scheduled today. Keep it up!
        </p>
      </div>

      {/* Bottom stats panel */}
      <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
        {/* Streak Block */}
        <div className="flex items-center gap-4 bg-slate-950/40 border border-slate-900/60 p-4 rounded-2xl shrink-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-brand-orange/30 group/streak">
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shadow-[0_0_15px_rgba(245,158,11,0.05)] transition-all duration-300 group-hover/streak:shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover/streak:scale-105">
            <Flame className="w-6 h-6 fill-brand-orange" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-brand-orange group-hover/streak:text-white transition-colors duration-300">24</span>
            </div>
            <span className="text-[10px] uppercase font-extrabold text-slate-500 tracking-wider">Day Streak</span>
          </div>
        </div>

        {/* Goals Progress Indicators */}
        <div className="space-y-4">
          {/* Daily Goal */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-slate-400">
              <span className="tracking-widest">Daily Goal</span>
              <span className="text-brand-cyan tracking-normal font-bold">3 / 5 lessons</span>
            </div>
            <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900/60">
              <motion.div 
                className="h-full w-full bg-gradient-to-r from-brand-cyan to-brand-teal rounded-full progress-shimmer origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.60 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />
            </div>
          </div>

          {/* Weekly XP */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-slate-400">
              <span className="tracking-widest">Weekly XP</span>
              <span className="text-brand-cyan tracking-normal font-bold">1,240 / 2,000</span>
            </div>
            <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900/60">
              <motion.div 
                className="h-full w-full bg-gradient-to-r from-brand-cyan to-brand-teal rounded-full progress-shimmer origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.62 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
