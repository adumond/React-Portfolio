import React, { useState } from "react";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact";
import NavTabs from "./menu/OpenMenu.jsx";

export default function PortfolioContainer({ menuOpen, setMenuOpen }) {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    console.log(currentPage);
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
