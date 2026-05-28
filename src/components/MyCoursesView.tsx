'use client';

import React from 'react';
import { BookOpen, Award, CheckCircle, Clock } from 'lucide-react';
import CourseCard from './CourseCard';
import { Course } from '@/lib/types';

interface MyCoursesViewProps {
  courses: Course[];
}

export default function MyCoursesView({ courses }: MyCoursesViewProps) {
  // Aggregate stats
  const totalCourses = courses.length;
  const completedCourses = courses.filter(c => c.progress === 100).length;
  const inProgressCourses = totalCourses - completedCourses;
  const averageProgress = totalCourses > 0 
    ? Math.round(courses.reduce((acc, curr) => acc + curr.progress, 0) / totalCourses) 
    : 0;

  return (
    <div className="p-6 lg:p-10 w-full max-w-7xl mx-auto space-y-8 select-none">
      
      {/* Top Header Panel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">MY COURSES</h2>
          <p className="text-slate-400 text-xs mt-1">Manage and track your active academic curriculum.</p>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-950/40 border border-slate-900/60 p-3.5 rounded-2xl flex flex-col justify-center min-w-[100px]">
            <span className="text-xl font-black text-white">{totalCourses}</span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-wider">Total</span>
          </div>
          <div className="bg-slate-950/40 border border-slate-900/60 p-3.5 rounded-2xl flex flex-col justify-center min-w-[100px]">
            <span className="text-xl font-black text-brand-cyan">{inProgressCourses}</span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-wider">In Progress</span>
          </div>
          <div className="bg-slate-950/40 border border-slate-900/60 p-3.5 rounded-2xl flex flex-col justify-center min-w-[100px]">
            <span className="text-xl font-black text-brand-teal">{completedCourses}</span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-wider">Completed</span>
          </div>
          <div className="bg-slate-950/40 border border-slate-900/60 p-3.5 rounded-2xl flex flex-col justify-center min-w-[100px]">
            <span className="text-xl font-black text-brand-purple">{averageProgress}%</span>
            <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-wider">Avg Progress</span>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
