import Search from "./Search";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Alchemy Lab</h1>
      <Search />
    </header>
  );
}

export default Header;
