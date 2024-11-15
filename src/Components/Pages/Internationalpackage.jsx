import React from 'react'
import Bangkok from '../Images/Bangkok.jpg'
import Idubai from '../Images/Idubai.jpg'
import Isingapore from '../Images/Isingapore.png'
import Malaysia from '../Images/Malaysia.png'


const Internationalpackage = () => {
  return (
    <>
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
                  <p class="card-text">From 40,000/-</p>
                  <button href="#" class="btn btn-primary">Explore now</button>
                </div>
              </div>
              </div>
              <div className="col-md-3">

              <div class="card h-100">
            <img src={Idubai} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Dubai</h5>
                  <p class="card-text">From 35,000/-</p>
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
    </>
  )
}

export default Internationalpackage
