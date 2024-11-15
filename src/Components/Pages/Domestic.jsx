import React from 'react'
import Keralapac from '../Images/Keralapac.png'
import Wayand from '../Images/Wayand.png'
import Vagamon from '../Images/Vagamon.png'
import Munnar from '../Images/Munnar.png'
import Alappuzha from '../Images/Alappuzha.png'
import '../css/Home.css'

const Domestic = () => {
  return (
   <>
   <section>
    <div className="container">
        <div className="row">
            <img src={Keralapac} alt="" />
        </div>
    </div><br /><br />
    <div className="container-fluid">
        <div className="row">
            <i><b><h2 className='domain'>Our Kerala Packages</h2></b></i>
        </div>
    </div> <br /><br />
    <div className="container">
        <div className="row">
        <div className="col-md-3">
              <div class="card h-100" >
            <img src={Wayand} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Wayanad</h5>
                  <p class="card-text">From 20,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card h-100" >
            <img src={Vagamon} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Vagamon</h5>
                  <p class="card-text">From 25,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card h-100" >
            <img src={Munnar} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Munnar</h5>
                  <p class="card-text">From 20,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card h-100" >
            <img src={Alappuzha} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Alappuzha</h5>
                  <p class="card-text">From 20,000/-</p>
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

export default Domestic
