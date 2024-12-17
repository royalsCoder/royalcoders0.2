import React from 'react'
import './Team2.css'
const Team2 = () => {
  return (
    <div>
         <section className="other-team-members">
          <div className="" style={{width:"90%",margin:"auto"}}>
            <div className="row">
              {/* Team Member Card */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="col-sm-6 col-lg-3 my-auto">
                  <div className="box shadow-sm p-4">
                    <div className="image-wrapper mb-3">
                      <img
                        className="img-fluid"
                        src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                        alt="Team Member"
                      />
                    </div>
                    <div className="box-desc">
                      <h5>Jon Doe</h5>
                      <p>FrontEnd Developer</p>
                    </div>
                    {/* <ul className="social">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Team2
