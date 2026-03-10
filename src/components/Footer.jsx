import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Sculptor Tech — Crafting software experiences.</p>
        <small>Made with care • Built for results</small>
      </div>
    </footer>
  );
}
