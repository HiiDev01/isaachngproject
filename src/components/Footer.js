import React from 'react'
import  '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="foter_item_con">
        <div className="footer_item_one">
          <h2>LUXESTRIDE</h2>
          <p>FOLLOW US</p>
          <div className="footer_social">
            <Link to="/"><FontAwesomeIcon icon={faFacebook}  className="footer_icon"/></Link>
            <Link to="/"><FontAwesomeIcon icon={faTwitter}  className="footer_icon"/></Link>
            <Link to="/"><FontAwesomeIcon icon={faInstagram}  className="footer_icon"/></Link>
          </div>
        </div>
        <div className="footer_item_two">
          <div className="footer_item">
            <h2>Company</h2>
            <ul>
              <li><Link to="/" className="footer_link">About</Link></li>
              <li><Link to="/" className="footer_link">Careers</Link></li>
              <li><Link to="/" className="footer_link">Mobile</Link></li>
            </ul>
          </div>

          <div className="footer_item">
            <h2>Contact</h2>
            <ul>
              <li><Link to="/" className="footer_link">Help/FAQ</Link></li>
              <li><Link to="/" className="footer_link">Press</Link></li>
              <li><Link href="/" className="footer_link">Affiliates</Link></li>
              <li><Link href="/" className="footer_link">Addresses</Link></li>
            </ul>
          </div>

          <div className="footer_item">
            <h2>Company</h2>
            <ul>
              <li><Link to="/" className="footer_link">Luxestride</Link></li>
              <li><Link to="/" className="footer_link">United States</Link></li>
              <li><Link to="/" className="footer_support">support@luxestride.com</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className='copyright'> &#169; <span>developed by <Link to="/">HiiDev</Link></span> : <span>design by <Link to="/">Daine</Link></span></p>
    </div>
  )
}

export default Footer
