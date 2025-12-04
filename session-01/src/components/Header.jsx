import "./Header.css";
import logo from "../assets/mbds.png";

export default function Header() {
  function handleClick(item) {
    alert(item);
  }

  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo MBDS" />
      </a>
      <nav>
        <a href="#" onClick={() => handleClick("Notes")}>
          Notes
        </a>
        <a href="#" onClick={() => handleClick("Etudiants")}>
          Etudiants
        </a>
        <a href="#" onClick={() => handleClick("Matières")}>
          Matières
        </a>
        <a href="#" onClick={() => handleClick("A propos")}>
          A propos
        </a>
      </nav>
    </header>
  );
}
