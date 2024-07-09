import React from 'react'
import  '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="foter_item_con">
        <div className="footer_item_one">
          <h2>LUXESTRIDE</h2>
          <p>FOLLOW US</p>
          <div className="footer_social">
            <a href="#"><FontAwesomeIcon icon={faFacebook}  className="footer_icon"/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}  className="footer_icon"/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}  className="footer_icon"/></a>
          </div>
        </div>
        <div className="footer_item_two">
          <div className="footer_item">
            <h2>Company</h2>
            <ul>
              <li><a href="#" className="footer_link">About</a></li>
              <li><a href="#" className="footer_link">Careers</a></li>
              <li><a href="#" className="footer_link">Mobile</a></li>
            </ul>
          </div>

          <div className="footer_item">
            <h2>Contact</h2>
            <ul>
              <li><a href="#" className="footer_link">Help/FAQ</a></li>
              <li><a href="#" className="footer_link">Press</a></li>
              <li><a href="#" className="footer_link">Affiliates</a></li>
              <li><a href="#" className="footer_link">Addresses</a></li>
            </ul>
          </div>

          <div className="footer_item">
            <h2>Company</h2>
            <ul>
              <li><a href="#" className="footer_link">Luxestride</a></li>
              <li><a href="#" className="footer_link">United States</a></li>
              <li><a href="#" className="footer_support">support@luxestride.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className='copyright'> &#169; <span>developed by <a href="#">HiiDev</a></span> : <span>design by <a href="#">Daine</a></span></p>
    </div>
  )
}

export default Footer
