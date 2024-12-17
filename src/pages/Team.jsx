import React from 'react';
import Header2 from '../components/Header2';
import { Helmet } from 'react-helmet';
import './Team.css';
import Team2 from './Team2';

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>Meet Our Expert IT Professionals – Innovators Behind Success</title>
        <meta
          name="description"
          content="Get to know the talented and passionate professionals driving our IT solutions. Our team combines creativity, technical expertise, and industry experience to deliver outstanding results for our clients."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="pagepadding">
        <Header2 heading="Our Team" />

        <section className="our-team-section">
          <div className="container">
            <div className="row">
              {/* Team Member 1 */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Team 1" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">Rahul Gautam</h3>
                    <span className="post">MARN Stack Developer</span>
                  </div>
                  <ul className="social">
                    <li><a href="#" target="_blank" className="fa fa-facebook"></a></li>
                    <li><a href="#" className="fa fa-twitter"></a></li>
                    <li><a href="#" className="fa fa-google-plus"></a></li>
                    <li><a href="#" className="fa fa-linkedin"></a></li>
                  </ul>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Team 2" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">Ankit Roy</h3>
                    <span className="post"> Digital Marketing </span>
                  </div>
                  <ul className="social">
                    <li><a href="#" className="fa fa-facebook"></a></li>
                    <li><a href="#" className="fa fa-twitter"></a></li>
                    <li><a href="#" className="fa fa-google-plus"></a></li>
                    <li><a href="#" className="fa fa-linkedin"></a></li>
                  </ul>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Team 3" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">Akash Nag</h3>
                    <span className="post">Server Engineer</span>
                  </div>
                  <ul className="social">
                    <li><a href="#" className="fa fa-facebook"></a></li>
                    <li><a href="#" className="fa fa-twitter"></a></li>
                    <li><a href="#" className="fa fa-google-plus"></a></li>
                    <li><a href="#" className="fa fa-linkedin"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

     <Team2/>
      </div>
    </div>
  );
};

export default Team;
