import "./Header.css";
import logo from "../assets/mbds.png";

export default function Header({ items, selectedMenu, setSelectedMenu }) {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo MBDS" />
      </a>
      <nav>
        {items.map((item) => (
          <button
            key={item.key}
            className={item.key === selectedMenu ? "active" : ""}
            onClick={() => setSelectedMenu(item.key)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
