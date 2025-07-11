'use client';
import { useState, useEffect } from 'react';

export default function InstructorPage() {
  const [instructors, setInstructors] = useState([

    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      course: 'Full Stack Web Development'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      course: 'Data Science Fundamentals'
    }
  ]);

  return (

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Instructors</h1>
      <ul className="space-y-4">{instructors.map(instructor => (
          <li key={instructor.id} className="p-4 bg-gray-100 rounded shadow">
            <p><strong>Name:</strong> {instructor.name}</p>
            <p><strong>Email:</strong> {instructor.email}</p>
            <p><strong>Course:</strong> {instructor.course}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
