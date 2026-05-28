export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at?: string;
  category?: string;
  lessons_count?: number;
  est_hours?: number;
  instructor_name?: string;
  instructor_avatar?: string;
  next_session?: string;
}
