export default function MainContent() {
  const now = new Date();
  return (
    <main id="core-concepts">
      Bonjour, on est le {now.getDate()} / {now.getMonth() + 1} / {now.getFullYear()} et il est {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
    </main>
  );
}
