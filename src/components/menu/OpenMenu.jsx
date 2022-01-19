export default function NavTabs({
  currentPage,
  handlePageChange,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => handlePageChange("Home")}>
          <a>Home</a>
        </li>
        <li
          onClick={() => {
            handlePageChange("Portfolio");
            setMenuOpen(false);
          }}
        >
          <a>Portfolio</a>
        </li>
        <li
          onClick={() => {
            handlePageChange("About");
            setMenuOpen(false);
          }}
        >
          <a>About Me</a>
        </li>
        <li onClick={() => handlePageChange("Contact")}>
          <a>Contact</a>
        </li>
        <li onClick={() => handlePageChange("Resume")}>
          <a>Resume</a>
        </li>
      </ul>
    </div>
  );
}
