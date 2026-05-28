'use client';

import React, { useState } from 'react';
import { Settings, User, Eye, Volume2, Save } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SettingsView() {
  const [profile, setProfile] = useState({
    name: 'Arjun Kumar',
    email: 'arjun.kumar@edunova.edu',
    title: 'Student - Pro',
  });

  const [sound, setSound] = useState(true);
  const [glassStyle, setGlassStyle] = useState(true);
  const [accent, setAccent] = useState('cyan');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dashboard settings synchronized successfully!');
  };

  return (
    <div className="p-6 lg:p-10 w-full max-w-2xl mx-auto space-y-8 select-none">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tight">SETTINGS</h2>
        <p className="text-slate-400 text-xs mt-1">Configure dashboard performance settings and interface controls.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* PROFILE SETTINGS */}
        <div className="bg-slate-950/40 border border-slate-900/60 p-5 rounded-2xl space-y-4">
          <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-2">
            <User className="w-4 h-4 text-brand-cyan" /> Profile Configuration
          </h3>
          
          <div className="space-y-3.5 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-900 focus:border-brand-cyan/40 outline-none text-slate-200 text-xs px-3 py-2 rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Tier</label>
                <input
                  type="text"
                  value={profile.title}
                  disabled
                  className="w-full bg-slate-950/40 border border-slate-900/40 text-slate-500 text-xs px-3 py-2 rounded-xl cursor-not-allowed"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-900 focus:border-brand-cyan/40 outline-none text-slate-200 text-xs px-3 py-2 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* HUD INTERFACE PREFERENCES */}
        <div className="bg-slate-950/40 border border-slate-900/60 p-5 rounded-2xl space-y-4">
          <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-2">
            <Eye className="w-4 h-4 text-brand-purple" /> Interface Preferences
          </h3>

          <div className="space-y-4 pt-2">
            {/* Glassmorphic Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">Glassmorphic Blur Rendering</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Toggle frosted-glass card backdrops and sat overlays.</p>
              </div>
              <button
                type="button"
                onClick={() => setGlassStyle(!glassStyle)}
                className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 relative ${
                  glassStyle ? 'bg-brand-cyan' : 'bg-slate-800'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-slate-950 transition-transform duration-300 ${
                  glassStyle ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </div>

            {/* Audio Effects Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">Ambient UI Sound Effects</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Play dynamic micro-interactions clicks and alerts.</p>
              </div>
              <button
                type="button"
                onClick={() => setSound(!sound)}
                className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 relative ${
                  sound ? 'bg-brand-cyan' : 'bg-slate-800'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-slate-950 transition-transform duration-300 ${
                  sound ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </div>

            {/* Color Accent Toggles */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">Accent Theme Preset</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Choose a default accent glow color for dashboard guides.</p>
              </div>
              <div className="flex gap-2">
                {['cyan', 'teal', 'purple'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setAccent(c)}
                    className={`w-5 h-5 rounded-full border border-slate-900 transition-all ${
                      c === 'cyan' ? 'bg-brand-cyan' : c === 'teal' ? 'bg-brand-teal' : 'bg-brand-purple'
                    } ${accent === c ? 'ring-2 ring-white/50 scale-110' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sync Settings button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-brand-cyan hover:bg-brand-cyan/95 text-bg-deep font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer"
        >
          <Save className="w-4 h-4" /> Save Preferences
        </button>
      </form>
    </div>
  );
}
