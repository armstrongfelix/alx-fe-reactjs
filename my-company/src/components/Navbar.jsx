import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#a9cbf2",
        padding: "2%",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "2vh auto 40vh",
      }}
    >
      <Link
        style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}
        to="/about"
      >
        About
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}
        to="/services"
      >
        Services
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
