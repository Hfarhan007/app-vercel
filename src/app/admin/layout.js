import React from "react";

export default function DashbordLayout({ children }) {
  return (
    <div>
      <nav>
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
