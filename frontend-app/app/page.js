
export default function HomePage() {

  const exampleCourse = {

    title: 'Full Stack Web Development',
    description: 'Learn to build modern web applications.',
    instructor: 'Jane Smith',
    studentCount: 42,
    enrolledOn: '2025-07-10'
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Course Tracker</h1>
      <CourseCard {...exampleCourse} />
    </div>
  );
}