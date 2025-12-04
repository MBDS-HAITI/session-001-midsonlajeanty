export default function Students({ data }) {

  return (
    <div>
      <h2>Étudiants</h2>
      <ul>
        {data.map((item) => (
          <li key={item.student.firstname + item.student.lastname}>
            <h3>{item.student.firstname} {item.student.lastname}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
