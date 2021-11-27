import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';

import './Home.css';

import Vehicle from '../Vehicle/Vehicle';
import vehicles from '../../Data/Data.json'

const Home = () => {

    const [ride, setRide] = useState([]);
    useEffect(() =>{
        setRide(vehicles)

    }, [])

    return (

       
        <div className = "custom-bg py-5 home">
            <div>
            <div className="row d-flex align-items-center d-flex justify-content-center  ms-5  ">
                <div className="col-lg-7">
                  <img src="https://cdn-icons-png.flaticon.com/512/822/822163.png" className="d-block w-50 ms-5" alt="..."/>
                </div>
                <div className="col-lg-5  pt-3"> 
                    <h1 >Hill View Hospital</h1>
                    <h1 >and Diagnostic Ceter</h1>
                    <p>Best Hospital in the town</p>
                    <button className="btn btn-danger">
                      Check in
                    </button>
  
                  </div>
            </div> <br /> <br />
            <div className='container'>
             
            <div className='row'>
                {ride.map((vehicle) => (
                    <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>
                ))}
            </div>
        </div>

        <div> <br />
        <div className="py-5 mt-5 team4">
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div className="col-md-7 text-center">
        <h3 className="mb-3">Meet Our Experienced  Professional Team</h3>
        <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
      </div>
    </div>
    <div className="row">
      
      <div className="col-lg-3 mb-4">
        
        <div className="row">
          <div className="col-md-12">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 className="subtitle mb-3">Teeth Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="col-lg-3 mb-4">
       
        <div className="row">
          <div className="col-md-12">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 className="subtitle mb-3">Eye Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
     
      </div>
      
      <div className="col-lg-3 mb-4">
        {/* <!-- column  --> */}
        <div className="row">
          <div className="col-md-12">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 className="subtitle mb-3">Heart Specialist</h6>
              <p>We have amazing Doctors</p>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
      
      <div className="col-lg-3 mb-4">
        
        <div className="row">
          <div className="col-md-12">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 className="subtitle mb-3">Cardiac Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
        </div>
























     </div>
     
     {/* footer */}
     <footer>
      <div className="footer-box container bg-info text-center text-white pb-2 pt-5 mt-5" >
          <div className="social-icon">
          <h5>
          <i className="fab fa-instagram p-2"></i>
          <i className="fab fa-facebook p-2"></i>
          <i className="fab fa-youtube p-2"></i>
          <i className="fab fa-linkedin p-2"></i>
          </h5>
        </div>
        <h4><img src="https://cdn.shopify.com/s/files/1/0320/8714/6541/files/SSLCommerz-Pay-With-logo-All-Size-01.png?v=1591818826" className="w-50" alt="" /></h4>
        <h5 className="pt-2">&copy; All Rights Reserved by    HVH LTD</h5>
      </div>
    </footer>






     </div>
    );
};

export default Home;