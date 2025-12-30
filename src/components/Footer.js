import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">
          <h3>NEWS PORTAL</h3>
          <p>
            Your trusted source for the latest breaking news, politics,
            technology, business, sports, and entertainment updates.
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h4>Categories</h4>
          <Link to="/category/politics">Politics</Link>
          <Link to="/category/technology">Technology</Link>
          <Link to="/category/business">Business</Link>
          <Link to="/category/sports">Sports</Link>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <Link to="#">About Us</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} News Portal. All rights reserved.
      </div>
    </footer>
  )
}
