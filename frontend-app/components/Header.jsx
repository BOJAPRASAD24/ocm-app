'use client';
import Link from 'next/link';

export default function Header() {

  return (

    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Course Tracker</h1>
      <div className="space-x-4">

        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/courses" className="hover:underline">Courses</Link>
        <Link href="/students" className="hover:underline">Students</Link>
        <Link href="/enrollments" className="hover:underline">Enrollments</Link>
        <Link href="/instructor" className="hover:underline">Instructors</Link>
        <Link href="/user" className="hover:underline">User</Link>
        <Link href="/login" className="hover:underline">Login</Link>
        
      </div>
    </header>
  );
}
