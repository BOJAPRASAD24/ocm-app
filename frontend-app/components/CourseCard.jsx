
export default function CourseCard({

  title = "Full Stack Web Development",
  description = "Learn to build modern web applications.",
  instructor = "John Doe",
  studentCount = 25,
  enrolledOn = "2025-07-10"
}) {
  return (

    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">{description}</p>
      <p className="text-sm text-gray-700">Instructor: {instructor}</p>
      <p className="text-sm text-gray-700">Students Enrolled: {studentCount}</p>
      <p className="text-xs text-gray-500">Enrolled On: {enrolledOn}</p>
    </div>
  );
}
