import React, { useEffect } from "react";
import Header2 from "../components/Header2";

import plumber from "../assets/plimber.jpg";
import RajMistri from "../assets/raj-mistri.jpg";
import carpenter from "../assets/carpenter.jpg";
import Electric from "../assets/electician.jpg";
import Construction from "../assets/Construction.png";
import Carservices from "../assets/Car-and-bike-services.png";
import ReparingServices from "../assets/Reparing-Services.png";
import { GoDotFill } from "react-icons/go";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Comprehensive IT Services – Web, Apps, Marketing & More</title>
        <meta
          name="description"
          content="Discover our diverse IT services, including website and app development, social media marketing, software solutions, and electronics-related projects. We craft custom strategies to meet your unique business needs"
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="pagepadding">
        <Header2 heading="Our Services" />

        {/* <div className=''>
            <img style={{ width: "100%" }} src={banner} alt="" />

          </div> */}

        <div style={{ width: "90%", margin: "auto" }}>
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "80%" }} src={Construction} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">Website Development</h1>
              <h3>
                Transform Your Online Presence with Expert Web Development
              </h3>
              <p>
                Our website development services are tailored to create fast,
                responsive, and visually stunning websites. Whether it's an
                e-commerce platform, a corporate website, or a personal blog, we
                deliver solutions that enhance your brand and attract more
                visitors.
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Custom design to match your brand</span>{" "}
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> SEO-friendly structures for better rankings</span>{" "}
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Fully responsive for mobile, tablet, and desktop</span>{" "}
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">Social Media Marketing</h1>
              <h3>Boost Your Brand Visibility with Digital Marketing</h3>
              <p>
                Our social media marketing strategies are designed to increase
                your brand's reach and engagement. We create targeted campaigns
                that drive traffic and generate leads.
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Tailored campaigns for different platforms</span>{" "}
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Creative content creation</span>{" "}
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Data-driven strategies for measurable results</span>{" "}
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "80%" }} src={ReparingServices} alt="" />
            </div>
          </div>

          {/* ************************************************* */}
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "80%" }} src={Carservices} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">Software Development</h1>
              <h3>Boost Your Brand Visibility with Digital Marketing</h3>
              <p>
                Our social media marketing strategies are designed to increase
                your brand's reach and engagement. We create targeted campaigns
                that drive traffic and generate leads.
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Tailored campaigns for different platforms</span>{" "}
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Creative content creation</span>{" "}
              </p>
              <p className="m-0">
                <span>
                  <GoDotFill />
                </span>
                <span> Data-driven strategies for measurable results</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
