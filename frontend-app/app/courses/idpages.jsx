'use client';
import { useParams } from 'next/navigation';

{
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Course Detail</h1>
      <p className="text-lg text-blue-600">Course ID: <span className="font-mono">{id}</span></p>
    </div>
  );
}

export default CourseDetailPage();