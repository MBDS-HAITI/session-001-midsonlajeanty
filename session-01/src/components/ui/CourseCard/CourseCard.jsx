import "./CourseCard.css";

export default function CourseCard({ grade }) {

  const formattedDate = new Date(grade.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="course-card">
      <h2 className="course-card-course">{grade.course.name}</h2>
      <h3 className="course-card-student-name">
        {grade.student.firstName} {grade.student.lastName}
      </h3>

      <div className="course-card-content">
        <div>
          <p className="course-card-detail">
            <strong>Date:</strong> {formattedDate}
          </p>
          <p className="course-card-detail">
            <strong>Student ID:</strong> {grade.student._id}
          </p>
          <p className="course-card-detail">
            <strong>Item ID:</strong> {grade._id}
          </p>
        </div>

        <div className="course-card-score">{grade.grade}</div>
      </div>
    </div>
  );
}
