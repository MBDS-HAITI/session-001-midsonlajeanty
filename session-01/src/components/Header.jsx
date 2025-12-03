import logo from '../assets/mbds.png';

export default function Header() {
  return (
    <header>
        <img src={logo} alt="Logo MBDS" />
        <h1>Introduction à React</h1>
        <p>A la découverte des premières notions de React</p>
    </header>
  )
}
