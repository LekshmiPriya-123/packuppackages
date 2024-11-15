import React from 'react';
import '../css/Home.css';
import Contactus from '../Images/Contactus.png'; 

const Contact = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <img src={Contactus} alt="Contact Us" />
          </div>
        </div>
      </section><br /><br />

      <section className='next'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <i><b><h3 className="card-title"><strong>Special Packages</strong></h3></b></i><br />
                  <h5 className="card-text">
                    <i><b>Thailand <br /> Goa <br /> Malaysia <br /> Singapore <br /> Bali <br /> Maldives</b></i>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                <i><b><h3 className="card-title"><strong>Weekend Packages</strong></h3></b></i><br />
                  <h5 className="card-text">
                    <i><b>Bangalore <br /> Mumbai <br /> Chennai <br /> Delhi <br /> Hyderabad <br /> Pune</b></i>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                <i><b><h3 className="card-title"><strong>Main Packages</strong></h3></b></i><br />
                  <h5 className="card-text">
                    <i><b>Kashmir <br /> Kerala <br /> Thailand <br /> Delhi <br /> Goa <br /> Maldives</b></i>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <i><b><h3 className="card-title"><strong>Our Packages</strong></h3></b></i><br />
                  <h5 className="card-text">
                    <i><b>International Package <br /> National Package <br /> Domestic <br /><br /><br /><br /></b></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <form>
                  <h2 className='card-texts'><strong>Let's Connect</strong></h2>
                  <div className="form-group">
                    <i><b><h5><label htmlFor="uname" className='label'>Name:</label></h5></b></i>
                    <input type="text" name="uname" id="uname" placeholder="Enter your name" className="form-control" />
                  </div>
                  <div className="form-group">
                  <i><b><h5><label htmlFor="contact-number" className='label'>Contact Number:</label></h5></b></i>
                    <input type="text" name="contact-number" id="contact-number" placeholder="Enter your number" className="form-control" />
                  </div>
                  <div className="form-group">
                  <i><b><h5><label htmlFor="email" className='label'>Email:</label></h5></b></i>
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" />
                  </div>
                  <div className="form-group">
                  <i><b><h5><label htmlFor="enquiries" className='label'>Enquiries:</label></h5></b></i>
                    <textarea name="enquiries" id="enquiries" cols="20" rows="5" placeholder="Your enquiries" className="form-control"></textarea>
                  </div>
                  <input type="submit" value="Submit" id="submit" className="btn btn-primary" />
                </form>
              </div>
            </div>
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89285.8681985265!2d76.92595301957509!3d8.507616669071883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1731497750975!5m2!1sen!2sin" width={500} height={500} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
          </div>
        </div>
      </section><br /><br />
    </>
  );
};

export default Contact;
