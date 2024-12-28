import React, { useEffect, useRef, useState } from "react";
import "./home.css";
// import plumber from "../assets/plimber.jpg";
// import image from "../assets/servicefirstbanner.png";
import image from "../assets/testweb.jpg";
import banner from "../assets/all-service-banner.jpg";
import homebanner from "../assets/Royalcodershomewebbanner.png";
import homebannersec from "../assets/Royalcodershomesoftwarebanner.png";
import homebannerfirst from "../assets/Royalcodershomebanner.png";
import whoweare from "../assets/who-we-are.png";
import bestdigitalmarketing from "../assets/royalcoders/best-digital-marketing-company-in-lucknow.jpg";
import homecontact from "../assets/homecontact.jpg";
import legal from "../assets/legal-services.png";
import ITsolution from "../assets/Digital-It-solution.png";
import Solar from "../assets/Solar-panel-services.png";

import WebDevelopmentImage from "../assets/Construction.png";
import SoftwareDevelopmentImage from "../assets/Car-and-bike-services.png";
import SocialMediaMarketingImage from "../assets/CCTV-Instalation.png";
import ReparingServices from "../assets/Reparing-Services.png";
import { FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import safai from "../assets/safai.jpg";
import ac from "../assets/ac.jpg";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });



  const cards = [
    {
      image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Iceland',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Book Now'
    },
    {
      image: 'https://images.pexels.com/photos/1559908/pexels-photo-1559908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Portugal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Book Now'
    },
    {
      image: 'https://images.pexels.com/photos/2032332/pexels-photo-2032332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Austria',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Book Now'
    },
    {
      image: 'https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Czechia',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Book Now'
    },
    {
      image: 'https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Finland',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Book Now'
    },
    {
      image: 'https://images.pexels.com/photos/1680381/pexels-photo-1680381.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Norway',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Book Now'
    }
  ]
  





  const navigation = useNavigate();

  const navigateService = (e) => {
    e.preventDefault();
    navigation("/services");
  };
  const navigateAbout = (e) => {
    e.preventDefault();
    navigation("/about");
  };

  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(null);

  const calculateSlidesPerView = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
        return 4;
      } else if (screenWidth >= 992) {
        return 3;
      } else if (screenWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
    return 1;
  };

  const handleResize = () => {
    setSlidesPerView(calculateSlidesPerView());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSlidesPerView(calculateSlidesPerView());
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, [slidesPerView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };
  return (
    <>
      <Helmet>
        <title>
          Leading IT Solutions – Web Development, App Development & More
        </title>
        <meta
          name="description"
          content="Explore innovative IT solutions with us! From website and app development to social media marketing, software development, and electronics projects, we deliver tailored services to grow your business"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="pagepadding">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img style={{ width: "100%" }} src={homebannerfirst} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={homebanner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={homebannersec} alt="" />
          </SwiperSlide>
        </Swiper>
        <a
          href="https://api.whatsapp.com/send?phone=9005286625&text=I want to contact you."
          class="float"
          target="_blank"
        >
          <FaWhatsapp className="my-float" size={40} />
        </a>
        <div style={{ backgroundColor: "#050321" }} className="py-4">
          <div
            className="container-home-welcome"
            style={{ width: "95%", margin: "auto" }}
          >
            <div className="text-section">
              <h4>Welcome To Royal Coders </h4>
              <h1>
                <h1>
                  Custom Software Development and Digital Marketing Solutions by
                  Royal Coders
                </h1>
              </h1>
              <p style={{ color: "white" }}>
                Royal Coders specializes in personalized software creation and
                internet marketing strategies designed to address your specific
                business objectives. Whether you want to expand your brand’s
                reach or improve workflow, our team delivers inventive and
                efficient solutions.
              </p>
              <button className="service-button" onClick={navigateService}>
                Explore Our Services
              </button>
            </div>
            <div className="image-section">
              <div className="person">
                <img
                  src={bestdigitalmarketing}
                  alt="Person"
                  style={{ height: "300px" }}
                />
              </div>
              {/* <div className="icons">
            <div className="icon icon1">💬</div>
            <div className="icon icon2">🏠</div>
            <div className="icon icon3">💼</div>
          </div> */}
            </div>
          </div>
        </div>

        <div className="row my-4  p-0" style={{ width: "95%", margin: "auto" }}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img style={{ width: "100%" }} src={whoweare} alt="Who We Are" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4>Who We Are</h4>
            <h2>Our Identity - Your Service Commitment</h2>
            <p>
              At Royal Coders, we are dedicated to providing top-notch IT
              services tailored to businesses and individuals who seek
              innovative digital solutions. Whether you require web development,
              software development, social media marketing, or electronics
              gadgets, we bring expertise and experience to deliver impactful
              results that matter to your business.
            </p>
            <br />
            <p>
              we offer expert web development, software development, social
              media marketing, and electronics gadgets to help businesses thrive
              in the digital world. We specialize in creating responsive
              websites, custom applications, and effective social media
              strategies to boost your online presence and drive growth. Our
              team provides tailored solutions that are scalable, secure, and
              efficient, while ensuring high-quality service at competitive
              prices. Whether you're a startup or a large enterprise, we’re here
              to bridge the gap between technology and your needs. Contact us
              today to transform your digital presence!
            </p>
            <button className="service-button my-2" onClick={navigateAbout}>
              Read More
            </button>
          </div>
        </div>

        <div className="my-3" style={{ width: "90%", margin: "auto" }}>
          <div className="my-5">
            <h1 className="text-center mb-5 color-primary">Our Services</h1>
          </div>



          <div>






<CardContainer/>

          
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                style={{ width: "100%" }}
                src={WebDevelopmentImage}
                alt="Web Development Services"
              />
              <h4 className="my-3 color-primary">Web Development</h4>
              <p>
                At Royal Coders, we specialize in custom web development to help
                businesses establish a strong digital presence. Our team creates
                responsive websites, e-commerce platforms, and SEO-optimized
                solutions that drive traffic, enhance user experience, and
                increase conversions. Whether you're launching a new site or
                redesigning an existing one, we provide reliable web development
                services tailored to your business needs.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                style={{ width: "100%" }}
                src={SoftwareDevelopmentImage}
                alt="Software Development Services"
              />
              <h4 className="my-3 color-primary">Software Development</h4>
              <p>
                We offer custom software development services that streamline
                operations and boost productivity. From enterprise software
                solutions to mobile apps, our solutions are secure, scalable,
                and tailored to your business requirements, helping you stay
                ahead of the competition.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                style={{ width: "100%" }}
                src={SocialMediaMarketingImage}
                alt="Social Media Marketing Services"
              />
              <h4 className="my-3 color-primary">Social Media Marketing</h4>
              <p>
                Our social media marketing services enhance brand visibility and
                engagement across platforms like Facebook, Instagram, and
                LinkedIn. We create targeted campaigns that help your business
                connect with your audience, drive traffic, and achieve growth.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h5
              onClick={navigateService}
              style={{ cursor: "pointer", textDecoration: "underLine" }}
              className="color-primary"
            >
              View More
            </h5>
          </div>
        </div>

        {/* <div className="row my-4  p-0" style={{ width: "95%", margin: "auto" }}>
          <div className="col-lg-6 col-md-6 col-sm-12 my-4">
            <h2 className="color-primary">For the Public (जनता के लिए)</h2>
            <p>
              हम आपकी विशिष्ट आवश्यकताओं को पूरा करने के लिए कई तरह के कार्यों
              के लिए सत्यापित और कुशल कर्मचारी प्रदान करते हैं। चाहे वह निर्माण
              हो, प्लंबिंग, बिजली का काम हो या सफाई, हमारे पेशेवर यह सब संभालने
              के लिए सुसज्जित हैं। हम घर की मरम्मत, पेंटिंग और सजावट, बढ़ईगीरी,
              चिनाई, भूनिर्माण और बागवानी, एसी और एचवीएसी स्थापना या मरम्मत, कीट
              नियंत्रण, उपकरण मरम्मत और फर्नीचर असेंबली जैसी सेवाएं प्रदान करते
              हैं।
            </p>

            <h2 className="color-primary">For Workers (वर्कर्स के लिए)</h2>
            <p>
              बिचौलियों के बिना ग्राहकों तक सीधी पहुंच, जिससे आप अपना व्यवसाय और
              प्रतिष्ठा बढ़ा सकेंगे। हमारे मंच के माध्यम से अपने कौशल का
              प्रदर्शन करने और अधिक नौकरी पाने के अवसर। एक ऐसी प्रणाली जो आपकी
              कड़ी मेहनत को महत्व देती है और लगातार नौकरी के अवसरों के साथ
              पुरस्कृत करती है।
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 my-5">
            <img style={{ width: "100%" }} src={image} alt="Our Services" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
