import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <p>&copy; {currentYear} Feng Wei. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
              🐙
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              💼
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" title="Twitter">
              🐦
            </a>
            <a href="mailto:your.email@example.com" title="Email">
              ✉️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
