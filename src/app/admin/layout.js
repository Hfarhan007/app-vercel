import React from "react";
import style from "./styles.module.css";
export default function DashbordLayout({ children }) {
  return (
    <div>
      <nav className={style.mainnev}>
        <ul>
          <li>Dashbord</li>
          <li>Products</li>
          <li>Category</li>
        </ul>
      </nav>
      {children}
      <footer>
        <h3>Hafiz Farhan</h3>
      </footer>
    </div>
  );
}
