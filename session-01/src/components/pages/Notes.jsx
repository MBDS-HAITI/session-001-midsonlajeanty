import CourseCard from "../ui/CourseCard/CourseCard";
import { useEffect, useState } from "react";

export default function Notes() {

  const [grades, setGrades] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8010/api/grades")
        .then((response) => response.json())
        .then((data) => setGrades(data))
        .catch((error) => console.error("Error fetching students:", error));
    }, []);
  
  return (
    <div>
      <h2>Notes</h2>
      <div>
        {grades.map((grade) => (
          <CourseCard key={grade._id} grade={grade} />
        ))}
      </div>
    </div>
  );
}
