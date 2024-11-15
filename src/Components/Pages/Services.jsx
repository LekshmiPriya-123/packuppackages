import React from 'react'
import Hotel from '../Images/Hotel.png'
import '../css/Home.css'
import Airline from '../Images/Airline.png'
import Visa from '../Images/Visa.png'
import Passport from '../Images/Passport.png'
import Tours from '../Images/Tours.png'
import Travels from '../Images/Travels.png'
const Services = () => {
  return (
    <>
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className='hclr'>
          <i><b><h2 className='serve'>Our Services</h2></b></i>
          </div>
        </div><br /><br />
        </div>
        <div className="container">
        <div className='image'>
          <img src={Hotel} alt="" />
        </div><br /><br />
        <div className='image'>
          <img src={Airline} alt="" />
        </div><br /><br />
        <div className='image'>
          <img src={Visa} alt="" />
        </div><br /><br />
        <div className='image'>
          <img src={Passport} alt="" />
        </div><br /><br />
        <div className='image'>
          <img src={Tours} alt="" />
        </div><br /><br />
        <div className='image'>
          <img src={Travels} alt="" />
        </div>
      </div>
    </section><br /><br />
    </>
  )
}

export default Services
