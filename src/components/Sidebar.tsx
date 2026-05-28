'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, 
  BookOpen, 
  Calendar, 
  Bell, 
  Trophy, 
  FolderOpen, 
  Users, 
  Settings,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeTab?: string;
  onChangeTab?: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  badge?: number;
}

export default function Sidebar({ activeTab: propActiveTab, onChangeTab }: SidebarProps) {
  const [localActiveTab, setLocalActiveTab] = useState('Dashboard');
  const activeTab = propActiveTab || localActiveTab;

  const handleTabClick = (tabId: string) => {
    if (onChangeTab) {
      onChangeTab(tabId);
    } else {
      setLocalActiveTab(tabId);
    }
  };

  const mainNavs: NavItem[] = [
    { id: 'Dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'My Courses', label: 'My Courses', icon: BookOpen },
    { id: 'Schedule', label: 'Schedule', icon: Calendar },
    { id: 'Notifications', label: 'Notifications', icon: Bell, badge: 3 },
  ];

  const learnNavs: NavItem[] = [
    { id: 'Achievements', label: 'Achievements', icon: Trophy },
    { id: 'Resources', label: 'Resources', icon: FolderOpen },
    { id: 'Community', label: 'Community', icon: Users },
  ];

  return (
    <>
      {/* DESKTOP & TABLET SIDEBAR */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 left-0 bg-[#05060d]/65 backdrop-blur-xl border-r border-slate-900/60 w-20 lg:w-64 shrink-0 transition-all duration-300 z-30 select-none">
        
        {/* LOGO */}
        <div className="h-20 flex items-center px-6 lg:px-8 border-b border-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-teal text-bg-deep shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-brand-cyan to-brand-teal bg-clip-text text-transparent tracking-wide">
              EduNova
            </span>
          </div>
        </div>

        {/* NAVIGATION SECTIONS */}
        <div className="flex-1 py-8 overflow-y-auto px-3 lg:px-4 space-y-7 scrollbar-none">
          {/* MAIN SECTION */}
          <div className="space-y-2">
            <span className="hidden lg:block text-[9px] font-extrabold text-slate-500 uppercase tracking-widest px-4 mb-2">
              Main
            </span>
            <ul className="space-y-1.5">
              {mainNavs.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTabClick(item.id)}
                      className={`w-full relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors duration-300 text-sm font-medium ${
                        isActive ? 'text-brand-cyan' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBackground"
                          className="absolute inset-0 bg-brand-cyan/8 border-l-2 border-brand-cyan rounded-xl shadow-[inset_0_0_12px_rgba(0,240,255,0.05)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className="w-5 h-5 relative z-10 shrink-0" />
                      <span className="hidden lg:block relative z-10">{item.label}</span>
                      {item.badge && (
                        <span className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 items-center justify-center w-5 h-5 rounded-full bg-brand-purple text-[10px] font-bold text-white relative z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* LEARN SECTION */}
          <div className="space-y-2">
            <span className="hidden lg:block text-[9px] font-extrabold text-slate-500 uppercase tracking-widest px-4 mb-2">
              Learn
            </span>
            <ul className="space-y-1.5">
              {learnNavs.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTabClick(item.id)}
                      className={`w-full relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors duration-300 text-sm font-medium ${
                        isActive ? 'text-brand-cyan' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBackground"
                          className="absolute inset-0 bg-brand-cyan/8 border-l-2 border-brand-cyan rounded-xl shadow-[inset_0_0_12px_rgba(0,240,255,0.05)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className="w-5 h-5 relative z-10 shrink-0" />
                      <span className="hidden lg:block relative z-10">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="p-3 lg:p-4 border-t border-slate-900/60 space-y-4">
          {/* SETTINGS */}
          <button
            onClick={() => handleTabClick('Settings')}
            className={`w-full relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors duration-300 text-sm font-medium ${
              activeTab === 'Settings' ? 'text-brand-cyan' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeTab === 'Settings' && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-brand-cyan/8 border-l-2 border-brand-cyan rounded-xl shadow-[inset_0_0_12px_rgba(0,240,255,0.05)]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <Settings className="w-5 h-5 relative z-10 shrink-0" />
            <span className="hidden lg:block relative z-10">Settings</span>
          </button>

          {/* USER PROFILE */}
          <div className="flex items-center gap-3 px-3 py-2 border-t border-slate-900/40 pt-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/30 text-brand-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0">
              AK
            </div>
            <div className="hidden lg:block min-w-0">
              <p className="text-xs font-semibold text-slate-200 truncate">Arjun Kumar</p>
              <p className="text-[10px] text-slate-500 font-bold truncate">Student - Pro</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#05060d]/90 border-t border-slate-900/60 backdrop-blur-xl z-40 flex items-center justify-around px-2 shadow-[0_-5px_25px_rgba(0,0,0,0.6)]">
        {mainNavs.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-colors ${
                isActive ? 'text-brand-cyan' : 'text-slate-500'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute inset-0 bg-brand-cyan/5 rounded-xl border-t border-brand-cyan/40"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-5.5 h-5.5 relative z-10" />
              {item.badge && (
                <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-brand-purple text-[8px] font-bold text-white relative z-10 shadow-[0_0_6px_rgba(139,92,246,0.6)]">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
        
        {/* Profile Avatar Trigger on Mobile */}
        <button 
          onClick={() => handleTabClick('Settings')}
          className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
            activeTab === 'Settings' ? 'border-brand-cyan ring-2 ring-brand-cyan/20' : 'border-slate-800'
          }`}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-cyan/30 to-brand-purple/30 text-brand-cyan font-bold text-xs flex items-center justify-center">
            AK
          </div>
        </button>
      </nav>
    </>
  );
}
