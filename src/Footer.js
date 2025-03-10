// src/Footer.js

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Mitchell Hudson &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
