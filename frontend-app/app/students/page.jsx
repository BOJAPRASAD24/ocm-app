'use client';
import { useState, useEffect } from 'react';

export default function StudentsPage() {

  const [students, setStudents] = useState([

    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }

  ]);

  return (

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Enrolled Students</h1>
      <ul className="space-y-2">{students.map(student => (
          <li key={student.id} className="p-4 bg-gray-100 rounded">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
          </li>
        ))}

      </ul>
      
    </div>
  );
}
