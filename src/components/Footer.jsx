import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <h2>Subscribe to our newsletter</h2>
        <p>
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
