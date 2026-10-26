
function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-icon">R</span>
        <span>{title}</span>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <p className="header-subtitle">{subtitle}</p>
    </header>
  );
}

export default Header;
