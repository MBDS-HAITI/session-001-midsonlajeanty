export default function Courses({ data }) {
  const cousesSet = new Set(data.map((item) => item.course));
  const uniqueCourses = Array.from(cousesSet);

  return (
    <div>
      <h2>Matières</h2>
      <ul>
        {uniqueCourses.map((item) => (
          <li key={item}>
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
