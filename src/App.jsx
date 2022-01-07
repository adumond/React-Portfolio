import Topbar from "./components/topbar/Topbar.jsx";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";
import PortfolioContainer from "./components/PortfolioContainer.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <PortfolioContainer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
      </div>
    </div>
  );
}

export default App;
