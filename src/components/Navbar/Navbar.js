import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>CodeArz</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li> 
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/opensource">Open Source</Link></li>
        <li><Link to="/speaking">Speaking</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
