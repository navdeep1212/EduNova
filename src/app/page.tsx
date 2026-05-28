import React from 'react';
import { supabase } from '@/lib/supabase';
import DashboardContainer from '@/components/DashboardContainer';
import { Course } from '@/lib/types';

// Force dynamic rendering to ensure fresh database queries on request
export const revalidate = 0;
export const dynamic = 'force-dynamic';

const MOCK_COURSES: Course[] = [
  {
    id: 'react-101',
    title: 'Advanced React Patterns & Architecture',
    progress: 72,
    icon_name: 'Atom',
  },
  {
    id: 'python-101',
    title: 'Data Structures & Algorithms',
    progress: 41,
    icon_name: 'Code',
  },
  {
    id: 'uiux-101',
    title: 'UI/UX Foundations & Systems',
    progress: 88,
    icon_name: 'Palette',
  },
];

export default async function Page() {
  let courses: Course[] = [];
  let errorMsg: string | null = null;

  if (!supabase) {
    courses = MOCK_COURSES;
    errorMsg = "Supabase project URL & Anon Key are not configured in environment variables. Showing simulated seed data.";
  } else {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Supabase error:', error.message);
        courses = MOCK_COURSES;
        errorMsg = `Failed to fetch from 'courses' table: ${error.message}. Showing simulated seed data.`;
      } else if (!data || data.length === 0) {
        courses = MOCK_COURSES;
        errorMsg = "The 'courses' table was fetched successfully but is empty. Showing simulated seed data.";
      } else {
        courses = data as Course[];
      }
    } catch (err: any) {
      console.error('Supabase connection exception:', err);
      courses = MOCK_COURSES;
      errorMsg = `Supabase connection failed: ${err.message || 'Unknown network error'}. Showing simulated seed data.`;
    }
  }

  return <DashboardContainer initialCourses={courses} errorMsg={errorMsg} />;
}
