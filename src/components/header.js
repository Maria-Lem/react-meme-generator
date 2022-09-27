import logo from "../images/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo__img" src={logo} alt="logo" />
        <h1 className="logo__title">Meme Generator</h1>
      </div>
      <h3 className="header__subtitle">React Course - Project 3</h3>
    </header>
  )
}