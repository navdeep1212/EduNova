'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';
import BentoGrid from './BentoGrid';
import MyCoursesView from './MyCoursesView';
import ScheduleView from './ScheduleView';
import NotificationsView from './NotificationsView';
import AchievementsView from './AchievementsView';
import ResourcesView from './ResourcesView';
import CommunityView from './CommunityView';
import SettingsView from './SettingsView';
import { Course } from '@/lib/types';

interface DashboardContainerProps {
  initialCourses: Course[];
  errorMsg: string | null;
}

export default function DashboardContainer({ initialCourses, errorMsg }: DashboardContainerProps) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showBanner, setShowBanner] = useState(!!errorMsg);

  // Animation settings for tab switching
  const tabContentVariants = {
    hidden: { opacity: 0, scale: 0.99, y: 8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 18 }
    },
    exit: { opacity: 0, scale: 0.99, y: -8, transition: { duration: 0.15 } }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <BentoGrid courses={initialCourses} />;
      case 'My Courses':
        return <MyCoursesView courses={initialCourses} />;
      case 'Schedule':
        return <ScheduleView />;
      case 'Notifications':
        return <NotificationsView />;
      case 'Achievements':
        return <AchievementsView />;
      case 'Resources':
        return <ResourcesView />;
      case 'Community':
        return <CommunityView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h2 className="text-xl font-bold text-white uppercase">{activeTab} Workspace</h2>
            <p className="text-slate-500 text-xs mt-1">This panel is currently offline.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#070913]">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} onChangeTab={setActiveTab} />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0">
        {/* Header (Search, profile, theme) */}
        <Header />

        {/* Supabase connection warning banner (graceful error handling) */}
        <AnimatePresence>
          {showBanner && errorMsg && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-orange/10 border-b border-brand-orange/20 text-brand-orange text-xs py-3 px-6 lg:px-10 flex items-center justify-between gap-4 z-10 backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="font-semibold text-slate-300">
                  Database Notice: <span className="text-brand-orange">{errorMsg}</span>
                </span>
              </div>
              <button 
                onClick={() => setShowBanner(false)}
                className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View switching panel */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
