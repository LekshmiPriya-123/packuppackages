import React from 'react'
import Ibangkok from '../Images/Ibangkok.jpg'
import Ikerala from '../Images/Ikerala.jpg'
import Nkashmir from '../Images/Nkashmir.jpg'
import Ngoa from '../Images/Ngoa.jpg'


const Nationalpackage = () => {
  return (
      <>
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

export default Nationalpackage
