import Header2 from "../components/Header2";

import about1 from "../assets/about-3.png";
import about2 from "../assets/approch-3.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>About Us – Your Trusted IT Partner</title>
        <meta
          name="description"
          content="Learn about our journey, expertise, and commitment to delivering exceptional IT services. We specialize in website development, app solutions, marketing strategies, and innovative tech projects to empower businesses worldwide."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="pagepadding">
        <Header2 heading="About Us" />

        <div className="container">
          <div className="my-3">
            <div
              id="rs-about"
              className="rs-about about-style2 pt-120 pb-120 md-pt-80 md-pb-70 my-5"
            >
              <div className="container">
                <a
                  href="https://api.whatsapp.com/send?phone=9005286625&text=I want to contact you."
                  class="float"
                  target="_blank"
                >
                  <FaWhatsapp className="my-float" size={40} />
                </a>
                <div className="row y-middle">
                  <div className="col-lg-6 pr-42 md-pr-15 md-mb-50">
                    <img
                      style={{ width: "100%" }}
                      src={about1}
                      alt="About Company"
                    />
                  </div>
                  <div className="col-lg-6 pr-38 md-pr-15 pl-30 md-pl-15">
                    <div className="sec-title mb-45 md-mb-25">
                      <h2 className="title title2 color-primary title-color pb-20">
                        About Royal Coders - Your Trusted IT Partner
                      </h2>
                      <p className="desc small2 text-justify">
                        Welcome to Royal Coders, a leading IT service provider
                        specializing in **Web Development**, **Software
                        Development**, and **Social Media Marketing**. We
                        understand the needs of businesses in today’s digital
                        age, and our expert team is dedicated to providing
                        custom, scalable solutions tailored to your unique
                        business requirements.
                        <br />
                        <br />
                        From designing responsive websites to building custom
                        software applications, our services are designed to
                        empower your business. We also help you enhance your
                        brand presence through effective social media marketing
                        strategies, increasing engagement and driving growth.
                        <br />
                        <br />
                        At Royal Coders, our mission is to bridge the gap
                        between businesses and technology, ensuring seamless,
                        secure, and efficient solutions that drive success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rs-about about-style2 pb-120 md-pt-80 md-pb-80 my-4">
              <div className="container">
                <div className="row y-middle">
                  <div className="col-lg-6 pr-65 md-pr-15 md-mb-50 order-md-1 order-2">
                    <div className="sec-title mb-30">
                      <h2 className="title title2 color-primary title-color pb-20">
                        Our Services
                      </h2>
                      <ul className="desc small2 text-justify">
                        <li>
                          <strong>Web Development:</strong> We design and
                          develop responsive websites, e-commerce platforms, and
                          custom web solutions that ensure seamless user
                          experiences.
                        </li>
                        <li>
                          <strong>Software Development:</strong> Our team builds
                          custom software applications tailored to streamline
                          your business operations and improve efficiency.
                        </li>
                        <li>
                          <strong>Social Media Marketing:</strong> We create
                          targeted social media campaigns to increase your
                          brand’s online presence, boost customer engagement,
                          and drive sales.
                        </li>
                      </ul>
                      <p className="desc small2 text-justify">
                        Our solutions are designed to help you grow in the
                        digital world with cutting-edge technology and
                        exceptional service.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 order-md-2 order-1">
                    <img
                      style={{ width: "100%" }}
                      src={about2}
                      alt="Royal Coders Services"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
