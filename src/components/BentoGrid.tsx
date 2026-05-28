'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WelcomeCard from './WelcomeCard';
import LearningActivity from './LearningActivity';
import CourseCard from './CourseCard';
import WeeklyActivity from './WeeklyActivity';
import UpcomingEvents from './UpcomingEvents';
import { Course } from '@/lib/types';

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({ courses }: BentoGridProps) {
  // Framer Motion Container Animation (staggers children entrance)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Framer Motion Item Animation (translates upward & fades in)
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15
      }
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-12 gap-6 p-6 lg:p-10 pb-24 md:pb-10 w-full max-w-7xl mx-auto"
    >
      {/* ROW 1: WELCOME & ACTIVITY */}
      <motion.section 
        variants={itemVariants} 
        className="col-span-12 md:col-span-6 lg:col-span-7"
        aria-label="Welcome section"
      >
        <WelcomeCard />
      </motion.section>

      <motion.section 
        variants={itemVariants} 
        className="col-span-12 md:col-span-6 lg:col-span-5"
        aria-label="Learning activity section"
      >
        <LearningActivity />
      </motion.section>

      {/* ROW 2: COURSE CARDS */}
      {courses.map((course, idx) => (
        <motion.div
          key={course.id || idx}
          variants={itemVariants}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        >
          <CourseCard course={course} />
        </motion.div>
      ))}

      {/* ROW 3: WEEKLY PERFORMANCE & UPCOMING CALENDAR */}
      <motion.section 
        variants={itemVariants} 
        className="col-span-12 md:col-span-6 lg:col-span-8"
        aria-label="Weekly activity statistics"
      >
        <WeeklyActivity />
      </motion.section>

      <motion.section 
        variants={itemVariants} 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        aria-label="Upcoming calendar events"
      >
        <UpcomingEvents />
      </motion.section>
    </motion.main>
  );
}
