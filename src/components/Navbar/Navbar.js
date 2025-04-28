import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" className="animated-icon">
          <MdFingerprint size={40} />
        </Link>
        <h1 className={styles.logo}>CodeArz</h1>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Baker Street
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            Case Files
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
            Journal
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Solved Cases
          </Link>
        </li>
        <li>
          <Link to="/opensource" onClick={() => setIsMenuOpen(false)}>
            Clues Shared
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            Inventor's Lab
          </Link>
        </li>
        <li>
          <Link to="/speaking" onClick={() => setIsMenuOpen(false)}>
            Public Cases
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
