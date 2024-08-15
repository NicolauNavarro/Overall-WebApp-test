import React from "react";
import Link from "next/link";
import styles from "./landingNav.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <h5>
        Overall <span>for students</span>
      </h5>
      <nav>
        <ul>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Notion</Link>
          </li>
          <li>
            <Link href="#">Integration</Link>
          </li>
          <li>
            <Link href="#">Updates</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.action}>
        <button className={styles.special}>Labs</button>
        <a href="/dashboard">
          <button>Dashboard</button>
        </a>
      </div>
    </div>
  );
};
/*
<div className={styles.action}>
  <button className={styles.special}>Labs</button>
  <a href="/dashboard">
    <button>Dashboard</button>
  </a>
</div>
*/
export default Navbar;
