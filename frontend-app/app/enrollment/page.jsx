'use client';
import { useState, useEffect } from 'react';

export default function EnrollmentsPage() {

  const [enrollments, setEnrollments] = useState([
    {
      id: 1,
      student: 'Alice',
      course: 'Full Stack Web Development',
      enrolledOn: '2025-07-10'
    },
    {
      id: 2,
      student: 'Bob',
      course: 'Data Science Fundamentals',
      enrolledOn: '2025-07-11'
    }
  ]);

  return (

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Enrollments</h1>
      <ul className="space-y-4">{enrollments.map((enrollment) => (
          <li key={enrollment.id} className="p-4 bg-gray-100 rounded">
            <p><strong>Student:</strong> {enrollment.student}</p>
            <p><strong>Course:</strong> {enrollment.course}</p>
            <p><strong>Enrolled On:</strong> {enrollment.enrolledOn}</p>
          </li>
        ))}

      </ul>
      
    </div>
  );
}
