import React from "react";
import { navLinks } from "../utils/nav.utils";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const NavLink = navLinks.map((link, i) => (
    <li className={styles.nav__link} key={i}>
      {link}
    </li>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li className={styles.nav__logo}>
            <span>Apple</span>
          </li>
          {NavLink}
          <li className={styles.nav__search}>
            <span>Search</span>
          </li>
          <li className={styles.nav__cart}>
            <span>Cart</span>
          </li>
        </ul>
        <section className={styles.nav__stream}>
            <p className={styles.nav__stream__text}>Apple TV+</p>
            <button className={styles.nav__stream__button}>
                Stream now
            </button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
