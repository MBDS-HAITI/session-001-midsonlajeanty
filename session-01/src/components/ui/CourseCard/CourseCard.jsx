import "./CourseCard.css";

export default function CourseCard({ item }) {
  const { course, student, date, grade, unique_id } = item;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="course-card">
      <h2 className="course-card-course">{course}</h2>
      <h3 className="course-card-student-name">
        {student.firstname} {student.lastname}
      </h3>

      <div className="course-card-content">
        <div>
          <p className="course-card-detail">
            <strong>Date:</strong> {formattedDate}
          </p>
          <p className="course-card-detail">
            <strong>Student ID:</strong> {student.id}
          </p>
          <p className="course-card-detail">
            <strong>Item ID:</strong> {unique_id}
          </p>
        </div>

        <div className="course-card-score">{grade}</div>
      </div>
    </div>
  );
}
