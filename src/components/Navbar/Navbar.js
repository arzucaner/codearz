import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md"; 
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <li><Link to="/">Baker Street</Link></li>
        <li><Link to="/about">Case Files</Link></li>
        <li><Link to="/blog">Journal</Link></li>
        <li><Link to="/projects">Solved Cases</Link></li>
        <li><Link to="/opensource">Clues Shared</Link></li>
        <li><Link to="/products">Inventor's Lab</Link></li>
        <li><Link to="/speaking">Public Cases</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
