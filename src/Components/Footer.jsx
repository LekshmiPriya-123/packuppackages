import React from 'react';
import './css/Footer.css';
import Lock from '../Components/Images/Lock.png'
import Mails from '../Components/Images/Mails.png'
import Call from '../Components/Images/Call.png'
const Footer = () => {
  return (
    <>
      <section className="sect">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <b><i><h2 className="contact">Contact Us</h2></i></b>
              <div className="contact-details">
               <b><i><h6><img src={Call} alt="" width={20} height={20}/>Trivandrum: +91 8900250011</h6></i></b>
                <b><i><h6><img src={Call} alt="" width={20} height={20}/>Kollam: +91 8900250012</h6></i></b>
                <b><i><h6><img src={Call} alt="" width={20} height={20}/>Eranakulam: +91 8500002001</h6></i></b><br />
                <b><i><h6> <img src={Lock} alt="" width={30} height={30} />Trivandrum Junction, Kerala, India</h6></i></b><br />
                <b><i><h6> <img src={Lock} alt="" width={30} height={30} />Kollam Mainroad, Kerala, India</h6></i></b><br />
                <b><i><h6> <img src={Lock} alt="" width={30} height={30} />Carmel Centre New Bus Stand, Eranakulam, Kerala, India</h6></i></b><br />
                <h6> <img src={Mails} alt="" width={20} height={20}/> PackupPackage@gmail.com</h6>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <b><i><h2 className='style'>Destinations</h2></i></b>
              <div className="destination">
                <b><i><h4 className='style'>Dubai</h4></i></b>
                <b><i><h4 className='style'>Singapore</h4></i></b>
                <b><i><h4 className='style'>Thailand</h4></i></b>
                <b><i><h4 className='style'>Goa</h4></i></b>
                <b><i><h4 className='style'>Kashmir</h4></i></b>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <b><i><h2 className="head">Our Social Media Platforms</h2></i></b>
              <div className="social">
                <b><p aria-label="WhatsApp contact" className='style'><i className="fa-brands fa-whatsapp"></i> 890005420</p></b>
                <b><p aria-label="Facebook page" className='style'><i className="fa-brands fa-facebook"></i> Packup Package</p></b>
                <b><p aria-label="Instagram profile" className='style'><i className="fa-brands fa-instagram"></i> Packup_Package_Holidays</p></b>
                <b><p aria-label="Twitter profile" className='style'><i className="fa-brands fa-twitter"></i> Packup Package</p></b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <footer>
          <div className="copy">
            <b><i className="fa-regular fa-copyright"></i></b>
            <b><i><span className="copy-cont">Copyright 2024: Packup Package | All rights reserved</span></i></b>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
