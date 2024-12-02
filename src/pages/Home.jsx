import React, { useEffect, useRef, useState } from "react";
import "./home.css";
// import plumber from "../assets/plimber.jpg";
import image from "../assets/servicefirstbanner.png";
import banner from "../assets/all-service-banner.jpg";
import homebanner from "../assets/home-banner-01.jpg";
import homebannersec from "../assets/home-banner-02.jpg";
import homebannerfirst from "../assets/home-banner-workers.png";
import whoweare from "../assets/who-we-are.png";
import welcomebanner from "../assets/welcome-banner.jpg";
import homecontact from "../assets/homecontact.jpg";
import legal from "../assets/legal-services.png";
import ITsolution from "../assets/Digital-It-solution.png";
import Solar from "../assets/Solar-panel-services.png";

import Construction from "../assets/Construction.png";
import Carservices from "../assets/Car-and-bike-services.png";
import CCTVInstalation from "../assets/CCTV-Instalation.png";
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

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

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
        href="https://api.whatsapp.com/send?phone=7985787895&text=I want to contact you."
        class="float"
        target="_blank"
      >
        <FaWhatsapp className="my-float" size={40} />
      </a>
      <div style={{ backgroundColor: "#014582" }} className="py-4">
        <div
          className="container-home-welcome"
          style={{ width: "95%", margin: "auto" }}
        >
          <div className="text-section">
            <h4>Welcome To ICS - आपकी सेवा में सदैव तत्पर</h4>
            <h1>
              Discover the Best Workers <br />
              <span>Anytime Anywhere</span>
            </h1>
            <p style={{ color: "white" }}>
              A platform built with the mission to bridge the gap between the
              public and skilled workers.
            </p>
            <button className="service-button" onClick={navigateService}>
              Our Services
            </button>
          </div>
          <div className="image-section">
            <div className="person">
              <img
                src={welcomebanner}
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
          <h4>Who We Are (हम कौन हैं)</h4>
          <h2>हमारी पहचान - आपकी सेवा का संकल्प</h2>
          <p>
            ICS - Izzy Cliick Service पर , हम उन चुनौतियों को समझते हैं जिनका
            सामना कर्मचारियों और जनता दोनों को करना पड़ता है जब सही विकल्प खोजने
            की बात आती है। एक ओर, लोग अक्सर अपने घर या व्यावसायिक जरूरतों के लिए
            भरोसेमंद और कुशल श्रमिकों को खोजने के लिए संघर्ष करते हैं।
          </p>
          <br />
          <p>
            दूसरी ओर, कुशल श्रमिकों को अक्सर वास्तविक ग्राहकों से जुड़ना मुश्किल
            होता है जो उनकी विशेषज्ञता को महत्व देते हैं। हमारा उद्देश्य इस अंतर
            को खत्म करना है, ताकि आप बिना किसी समस्या के कुशल और अनुभवी श्रमिकों
            से जुड़े दोस्तों और श्रमिकों को ऐसे ग्राहक मिलें जो उनका काम पूरा
            करें।
          </p>
          <button className="service-button my-2" onClick={navigateAbout}>
            Read More
          </button>
        </div>
      </div>

      <div className="my-3" style={{ width: "90%", margin: "auto" }}>
        <div className="my-5">
          <h1 className="text-center mb-5 color-primary">
            Our Services (हमारी सेवाएं)
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img style={{ width: "100%" }} src={Construction} alt="" />

            <h4 className="my-3 color-primary">Construction Services</h4>
            <p>
              We supply skilled labor for construction, including architects,
              engineers, carpenters, masons, painters, plumbers, electricians,
              and RCC lift operators. Our team ensures quality and efficiency at
              every stage, supporting smooth project execution to meet
              timelines, uphold standards, and deliver reliable results.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img style={{ width: "100%" }} src={ReparingServices} alt="" />

            <h4 className="my-3 color-primary">Reparing Services</h4>
            <p>
              We offer a complete range of home appliances and repair services:
              TVs, fridges, ACs, geysers, washing machines, inverters, RO
              systems, chimneys, and DTH. Expert repair and service are also
              available for computers, laptops, desktops, and mobile phones to
              ensure all your devices and appliances run smoothly.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img style={{ width: "100%" }} src={Carservices} alt="" />

            <h4 className="my-3 color-primary">Car & Bike Services</h4>
            <p>
              We offer comprehensive car and bike services at your doorstep,
              bringing convenience and expertise directly to you. Our skilled
              technicians handle all types of maintenance and repairs, from
              regular servicing, oil changes, and brake inspections to engine
              repairs, tire replacements, battery checks, and more, ensuring
              your vehicle runs smoothly and safely.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img style={{ width: "100%" }} src={legal} alt="" />

            <h4 className="my-3 color-primary">Legal Services</h4>
            <p>
              We specialize in providing expert legal solutions for a range of
              cases, including civil, criminal, family, and service matters. Our
              services also cover consumer redressal, negotiable instruments,
              and property disputes. Trust us for professional and dedicated
              assistance, especially in property matters.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <a href="https://royalcoders.tech/" target="blank">
              <img style={{ width: "100%" }} src={ITsolution} alt="" />
            </a>

            <h4 className="my-3 color-primary">
              IT Solution & Digital Marketing
            </h4>
            <p>
              We provide top-notch services in web and software development,
              digital marketing, and lead generation. Our expertise includes
              e-commerce development, SEO/SEM strategies, Facebook Ads, and
              Google Ads. Partner with us to elevate your online presence and
              achieve exceptional business growth.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img style={{ width: "100%" }} src={Solar} alt="" />

            <h4 className="my-3 color-primary">Solar Panel Installation</h4>
            <p>
              We offer reliable solar solutions, including new solar panel
              installation and comprehensive servicing and repairs. Whether
              you're looking to harness solar energy for the first time or
              maintain your existing system, our expert team ensures efficient,
              cost-effective, and eco-friendly energy solutions tailored to your
              needs.
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

      <div className="row my-4  p-0" style={{ width: "95%", margin: "auto" }}>
        <div className="col-lg-6 col-md-6 col-sm-12 my-4">
          <h2 className="color-primary">For the Public (जनता के लिए)</h2>
          <p>
            हम आपकी विशिष्ट आवश्यकताओं को पूरा करने के लिए कई तरह के कार्यों के
            लिए सत्यापित और कुशल कर्मचारी प्रदान करते हैं। चाहे वह निर्माण हो,
            प्लंबिंग, बिजली का काम हो या सफाई, हमारे पेशेवर यह सब संभालने के लिए
            सुसज्जित हैं। हम घर की मरम्मत, पेंटिंग और सजावट, बढ़ईगीरी, चिनाई,
            भूनिर्माण और बागवानी, एसी और एचवीएसी स्थापना या मरम्मत, कीट
            नियंत्रण, उपकरण मरम्मत और फर्नीचर असेंबली जैसी सेवाएं प्रदान करते
            हैं।
          </p>

          <h2 className="color-primary">For Workers (वर्कर्स के लिए)</h2>
          <p>
            बिचौलियों के बिना ग्राहकों तक सीधी पहुंच, जिससे आप अपना व्यवसाय और
            प्रतिष्ठा बढ़ा सकेंगे। हमारे मंच के माध्यम से अपने कौशल का प्रदर्शन
            करने और अधिक नौकरी पाने के अवसर। एक ऐसी प्रणाली जो आपकी कड़ी मेहनत
            को महत्व देती है और लगातार नौकरी के अवसरों के साथ पुरस्कृत करती है।
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 my-5">
          <img style={{ width: "100%" }} src={image} alt="Our Services" />
        </div>
      </div>
    </div>
  );
};

export default Home;
