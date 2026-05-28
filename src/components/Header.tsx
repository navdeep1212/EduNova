'use client';

import React from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 w-full flex items-center justify-between px-6 lg:px-10 border-b border-slate-950/20 bg-[#070913]/40 backdrop-blur-sm z-20">
      
      {/* SEARCH BAR */}
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
          <Search className="w-4.5 h-4.5" />
        </div>
        <input
          type="text"
          placeholder="Search courses, topics..."
          className="w-full bg-[#0d1222]/80 border border-slate-900 focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 outline-none text-slate-200 text-sm pl-10 pr-4 py-2.5 rounded-xl transition-all duration-300 placeholder:text-slate-500 shadow-inner"
        />
      </div>

      {/* RIGHT METRICS & CONTROLS */}
      <div className="flex items-center gap-4">
        {/* NOTIFICATIONS BELL */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#0d1222]/80 border border-slate-900 hover:border-brand-cyan/30 text-slate-400 hover:text-brand-cyan transition-all duration-300 shadow-md group">
          <Bell className="w-4.5 h-4.5 group-hover:scale-105 transition-transform" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        </button>

        {/* THEME TOGGLE */}
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0d1222]/80 border border-slate-900 hover:border-brand-cyan/30 text-slate-400 hover:text-brand-cyan transition-all duration-300 shadow-md group">
          <Sun className="w-4.5 h-4.5 group-hover:rotate-45 transition-transform" />
        </button>

        {/* PROFILE BADGE BUTTON */}
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-xs border border-brand-blue/40 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 select-none cursor-pointer">
          AK
        </button>
      </div>
    </header>
  );
}
