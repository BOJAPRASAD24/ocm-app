'use client';
import { useEffect, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import api from '@/lib/api'; // axios instance

export default function CoursePage() {

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Learn to build web applications.',
      instructor_name: 'John Doe',
      enrolled_students: 30,
      enrolled_on: '2025-07-10'
    }
  ]);
    
  return (

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Full Stack Courses</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            instructor={course.instructor_name}
            studentCount={course.enrolled_students}
            enrolledOn={course.enrolled_on}
          />
        ))}
      </div>
    </div>
  );
}

