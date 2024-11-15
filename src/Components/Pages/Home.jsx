import React from 'react'
import Travel from '../Images/Travel.png'
import Tour from '../Images/Tour.png'
import Trip from '../Images/Trip.png'
import '../css/Home.css'
import Kashmir from '../Images/Kashmir.png'
import Thailand from '../Images/Thailand.png'
import Kerala from '../Images/Kerala.png'
import Goa from '../Images/Goa.png'
import Dubai from '../Images/Dubai.png'
import Thai from '../Images/Thai.png'
import Singapore from '../Images/Singapore.png'
import Bali from '../Images/Bali.png'
import Bangkok from '../Images/Bangkok.jpg'
import Idubai from '../Images/Idubai.jpg'
import Isingapore from '../Images/Isingapore.png'
import Malaysia from '../Images/Malaysia.png'
import Ibangkok from '../Images/Ibangkok.jpg'
import Ikerala from '../Images/Ikerala.jpg'
import Nkashmir from '../Images/Nkashmir.jpg'
import Ngoa from '../Images/Ngoa.jpg'
const Home = () => {
  return (
    <>
    <section className='banner'>
    <div className="container-fluid">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Travel} class="d-block w-100" alt="..."  />
    </div>
    <div class="carousel-item">
      <img src={Tour} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Trip} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div><br /><br />
    </section>
    <section className='sect'>
    <div className="container">

      <div className="row bg-success">
        <b><i><h2 className='head'>welcome to packup Package</h2></i></b>
      </div>
      <div>
        <b><i><p><h4 className='para'>Welcome to the Packup Experience! <br /><br />

Thank you for choosing the Packup Package your ultimate gateway to unforgettable adventures and seamless travel experiences! We’re excited to be a part of your journey and can't wait to share the wonders we have in store. Whether you're here to unwind, explore, or simply escape, our team is dedicated to making this trip exceptional. <br /><br />

With handpicked destinations, curated experiences, and top-notch services, we’re here to ensure that every moment of your journey is unforgettable. So sit back, relax, and let us handle the details, while you focus on creating lasting memories. <br /><br />

Welcome aboard, and let’s make this an adventure to remember! <br /><br />



Let me know if you'd like any adjustments to better suit your brand's voice or any specific features of the Packup package.</h4></p></i></b></div>
      </div>
    </section>
    <section className='sec'>
      <div className="container-fluid">
      <div className="row bg-success">
        <h2 className='heading'>Our Main Packages</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Kashmir} class="card-img-top" alt="..." />
       </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Thailand} class="card-img-top" alt="..." />
       </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Kerala} class="card-img-top" alt="..." />
       </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Goa} class="card-img-top" alt="..." />
       </div>
        </div>
        
      </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
        <h4 className='dest'>DESTINATION</h4>
        <b><i><h3 className='desire'>Your Desired Destination</h3></i></b>
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Dubai} class="card-img-top" alt="..." />
       </div>
        </div> <br /> <br />
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Thai} class="card-img-top" alt="..." />
       </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Singapore} class="card-img-top" alt="..." />
       </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:300}}>
       <img src={Bali} class="card-img-top" alt="..." />
       </div>
        </div>
        </div>
      </div>
      </section>
      <section className='sec'>
        <div className="container">
          <div className="row">
            <h4
            className='dest'>TOURS</h4>
            <b><i><h3 className='desire'>International</h3></i></b>
            <div className="col-md-3">
            <div class="card h-100">
            <img src={Bangkok} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Bangkok</h5>
                  <p class="card-text">From 40,000/-</p><br /><br />
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">

              <div class="card h-100">
            <img src={Idubai} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Dubai</h5>
                  <p class="card-text">From 35,000/-</p><br /><br /><br />
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">

              <div class="card h-100">
            <img src={Isingapore} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Singapore</h5>
                  <p class="card-text">From 35,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">

              <div class="card h-100">
            <img src={Malaysia} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Malaysia</h5>
                  <p class="card-text">From 30,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      <section className='sec'>
        <div className="container">
          <div className="row">
            <b><i><h3 className='desire'>National</h3></i></b>
            <div className="col-md-3">
              <div class="card h-100" >
            <img src={Ibangkok} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Bangkok</h5>
                  <p class="card-text">From 40,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card h-100" >
            <img src={Ikerala} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Kerala</h5>
                  <p class="card-text">From 60,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card h-100" >
            <img src={Nkashmir} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Kashmir</h5>
                  <p class="card-text">From 45,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card h-100" >
            <img src={Ngoa} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Goa</h5>
                  <p class="card-text">From 45,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home
