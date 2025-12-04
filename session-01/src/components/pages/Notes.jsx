import CourseCard from "../ui/CourseCard/CourseCard";

export default function Notes({ data }) {
  return (
    <div>
      <h2>Notes</h2>
      <div>
        {data.map((item) => (
          <CourseCard key={item.unique_id} item={item} />
        ))}
      </div>
    </div>
  );
}
