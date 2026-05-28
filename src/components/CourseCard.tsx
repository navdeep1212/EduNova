'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Course } from '@/lib/types';

export interface CourseProps {
  course: Course;
}

// Function to resolve Lucide Icon dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  let IconComponent = LucideIcons.BookOpen;
  
  if (name && name in LucideIcons) {
    IconComponent = (LucideIcons as any)[name];
  } else if (name === 'Atom') {
    IconComponent = LucideIcons.Atom;
  } else if (name === 'Code') {
    IconComponent = LucideIcons.Code;
  } else if (name === 'Palette') {
    IconComponent = LucideIcons.Palette;
  }

  return <IconComponent className={className} />;
};

export default function CourseCard({ course }: CourseProps) {
  const title = course.title || '';
  const isReact = title.toLowerCase().includes('react');
  const isPython = title.toLowerCase().includes('data structure') || title.toLowerCase().includes('python') || title.toLowerCase().includes('algo');
  const isDesign = title.toLowerCase().includes('design') || title.toLowerCase().includes('ui/ux') || title.toLowerCase().includes('foundations');

  const category = course.category || (isReact ? 'REACT' : isPython ? 'PYTHON' : isDesign ? 'DESIGN' : 'LEARN');
  const lessonsCount = course.lessons_count || (isReact ? 14 : isPython ? 22 : isDesign ? 10 : 12);
  const estHours = course.est_hours || (isReact ? 18 : isPython ? 30 : isDesign ? 12 : 15);
  const instructorName = course.instructor_name || (isReact ? 'S. Verma' : isPython ? 'R. Singh' : isDesign ? 'P. Mehta' : 'Instructor');
  const instructorAvatar = course.instructor_avatar || (isReact ? 'SV' : isPython ? 'RS' : isDesign ? 'PM' : 'IN');
  const nextSession = course.next_session || (isReact ? 'Next: Today 3pm' : isPython ? 'Next: Tue 11am' : isDesign ? 'Next: Wed 2pm' : 'Next: TBA');

  // Define thematic colors
  let themeColorClass = 'text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5';
  let progressColorClass = 'bg-brand-cyan';
  let glowColor = 'hover:shadow-[0_0_30px_rgba(0,240,255,0.18)]';
  
  if (isPython) {
    themeColorClass = 'text-brand-teal border-brand-teal/20 bg-brand-teal/5';
    progressColorClass = 'bg-brand-teal';
    glowColor = 'hover:shadow-[0_0_30px_rgba(13,242,201,0.18)]';
  } else if (isDesign) {
    themeColorClass = 'text-brand-purple border-brand-purple/20 bg-brand-purple/5';
    progressColorClass = 'bg-brand-purple';
    glowColor = 'hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]';
  }

  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-3xl glass-panel border border-slate-900/60 p-6 flex flex-col justify-between min-h-[230px] shadow-xl transition-[border-color,box-shadow,background-color] duration-300 ${glowColor} glow-border select-none`}
    >
      {/* Background patterns */}
      <div className="glow-mesh" />
      <div className="card-grain" />

      <div className="relative z-10 w-full">
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-extrabold uppercase tracking-wider ${themeColorClass}`}>
            ✦ {category}
          </span>
          <div className="w-9 h-9 rounded-xl bg-slate-950/80 border border-slate-900 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors duration-300">
            <DynamicIcon name={course.icon_name} className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-brand-cyan transition-colors mb-1">
          {title}
        </h3>
        
        {/* Subtitle lessons count */}
        <span className="text-[11px] font-semibold text-slate-500">
          {lessonsCount} lessons · Est. {estHours}h total
        </span>
      </div>

      {/* Progress & Instructor Footer */}
      <div className="relative z-10 w-full mt-6 space-y-4">
        {/* Progress Bar Container */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-slate-400">
            <span>Progress</span>
            <span className="text-white font-black">{course.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900/40">
            <motion.div
              className={`h-full w-full rounded-full ${progressColorClass} progress-shimmer origin-left`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: course.progress / 100 }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
        </div>

        {/* Footer Details */}
        <div className="flex items-center justify-between pt-3.5 border-t border-slate-900/60">
          {/* Instructor Bubble */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-950 border border-slate-900 flex items-center justify-center text-[9px] font-black text-brand-cyan">
              {instructorAvatar}
            </div>
            <span className="text-xs font-semibold text-slate-400">{instructorName}</span>
          </div>

          {/* Next Session Pill */}
          <div className="px-3 py-1.5 rounded-lg bg-slate-950/70 border border-slate-900/80 text-[10px] font-bold text-slate-500 hover:text-slate-300 transition-colors duration-300">
            {nextSession}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
