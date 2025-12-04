import CourseCard from "./ui/CourseCard/CourseCard";
import data from "../data/data.json";
const randomIndex = Math.floor(Math.random() * data.length);

export default function MainContent() {
  const item = data[randomIndex];
  return (
    <main id="core-concepts">
      <CourseCard item={item} />
    </main>
  );
}
