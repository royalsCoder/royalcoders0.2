import React, { useEffect } from "react";
import Header2 from "../components/Header2";

import image from "../assets/servicefirstbanner.png";
import banner from "../assets/home-banner-01.jpg";
import plumber from "../assets/plimber.jpg";
import RajMistri from "../assets/raj-mistri.jpg";
import carpenter from "../assets/carpenter.jpg";
import Electric from "../assets/electician.jpg";
import Solar from "../assets/Solar-panel-services.png";
import legal from "../assets/legal-services.png";
import Construction from "../assets/Construction.png";
import Carservices from "../assets/Car-and-bike-services.png";
import CCTVInstalation from "../assets/CCTV-Instalation.png";
import ReparingServices from "../assets/Reparing-Services.png";
import corporate from "../assets/corporate.jpg";
import { GoDotFill } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      heading: "प्लंबिंग समाधान (प्लंबिंग सेवाएं)",
      pera: `लीक, क्लॉग या नई स्थापना - हमारे प्लंबर विशेषज्ञता के साथ किसी भी  प्लंबिंग चुनौती से निपटने के लिए तैयार हैं। बाथरूम और रसोई से लेकर जटिल जल प्रणाली सेटअप तक, हमारे पेशेवर हर बार सुचारू, सुरक्षित और कुशल सेवा सुनिश्चित करते हैं।`,
      image: plumber,
    },
    {
      heading: "विशेषज्ञ राजमिस्त्री सेवाएं:",
      pera: ` हमारे राजमिस्त्री पत्थर के काम, ईंट के काम और कंक्रीट के काम में
            कुशल हैं। चाहे वह नींव का समर्थन हो, दीवार निर्माण हो या विस्तृत
            नवीनीकरण परियोजना हो, हमारे राजमिस्त्री हर संरचना में सटीकता और
            स्थायित्व लाते हैं।`,
      image: RajMistri,
    },
    {
      heading: "प्रेसिजन कारपेंटरी (बढ़ई सेवाएं)",
      pera: ` हमारे अनुभवी बढ़ई कस्टम फर्नीचर, मरम्मत, कैबिनेटरी और बहुत कुछ
            संभालते हैं, किसी भी लकड़ी के काम की परियोजना में शिल्प कौशल और
            गुणवत्ता जोड़ते हैं। विस्तार पर नज़र रखने के साथ, वे ऐसे टुकड़े
            बनाते हैं जो कार्यात्मक और खूबसूरती से तैयार किए गए दोनों हैं।`,
      image: carpenter,
    },
    {
      heading: "इलेक्ट्रिकल सेवाएँ",
      pera: `  सुरक्षित, विश्वसनीय इलेक्ट्रिकल इंस्टॉलेशन, मरम्मत और रखरखाव के लिए,
            हमारे इलेक्ट्रीशियन आपके घर या व्यवसाय में विशेषज्ञता लाते हैं।
            वायरिंग और लाइटिंग से लेकर इलेक्ट्रिकल समस्याओं के निवारण तक, हम
            सुरक्षित और कुशल समाधान प्रदान करते हैं।`,
      image: Electric,
    },
  ];

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

        <div style={{width:"90%",margin:"auto"}} className="">
          <a
            href="https://api.whatsapp.com/send?phone=9005286625&text=I want to contact you."
            class="float"
            target="_blank"
          >
            <FaWhatsapp className="my-float" size={40} />
          </a>
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <img style={{ width: "100%" }} src={image} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="color-primary">
              Website Development
              </h5>
              <p>
                ICS पर , हम आपको आपके घर और व्यवसाय की सभी ज़रूरतों के लिए
                सत्यापित, स्थानीय श्रम सेवाओं से जोड़ने में माहिर हैं। हमारे
                कुशल पेशेवर हर प्रोजेक्ट में विशेषज्ञता,
              </p>
              <p>
                विश्वसनीयता और प्रतिबद्धता लाते हैं, यह सुनिश्चित करते हुए कि
                आपको जब और जहाँ भी ज़रूरत हो, गुणवत्तापूर्ण सेवाएँ मिलें। चाहे
                वह टपकती पाइप को ठीक करना हो या किसी कमरे का नवीनीकरण करना हो,
                हमारे कर्मचारी समर्पण और देखभाल के साथ आपकी सेवा करने के लिए
                तैयार हैं।
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-center heading ">
              Trusted Legal Guidance Across{" "}
              <span className="color-primary"> All Domains.</span>{" "}
            </h3>

            <p className="text-center">
              Legal solutions tailored to you—covering contracts, family,
              property, marriage, and more.
            </p>
          </div>
        </div>

        <div style={{width:"90%",margin:"auto"}}>
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "80%" }} src={Construction} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">Website Development</h1>
             <h3>Transform Your Online Presence with Expert Web Development</h3>
             <p>Our website development services are tailored to create fast, responsive, and visually stunning websites. Whether it's an e-commerce platform, a corporate website, or a personal blog, we deliver solutions that enhance your brand and attract more visitors.</p>
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
             <p>Our social media marketing strategies are designed to increase your brand's reach and engagement. We create targeted campaigns that drive traffic and generate leads.</p>
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
             <p>Our social media marketing strategies are designed to increase your brand's reach and engagement. We create targeted campaigns that drive traffic and generate leads.</p>
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

          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">CCTV Installation</h1>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span>New CCTV Installation </span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> CCTV Servicing & Repairing </span>{" "}
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "100%" }} src={CCTVInstalation} alt="" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "100%" }} src={Solar} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">Solar panel Installation</h1>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> New Solar Panel Installation </span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Solar Panel Servicing & Repairing </span>{" "}
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="color-primary">Legal Services</h1>
              <h5 className="color-primary">Legal:-</h5>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Civil Matters</span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Criminal Matters</span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Family Matters</span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Service Matters</span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Consumer Redressal</span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Negotiable Instruments</span>{" "}
              </p>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Property Matters</span>{" "}
              </p>
              <h5 className="color-primary">Service Specialized:-</h5>
              <p className="m-0 d-flex gap-1">
                <span>
                  <GoDotFill />
                </span>
                <span> Property Matters</span>{" "}
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img style={{ width: "100%" }} src={legal} alt="" />
            </div>
          </div>
          {/* ************************************************* */}

          {services?.map((item, index) => {
            return (
              <>
                <div key={index} className="row bg-green my-3 py-4 px-3">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <img style={{ width: "100%" }} src={item?.image} alt="" />
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-12 p-4">
                    <h1>{item?.heading}</h1>
                    <p className="text-white fs-5 "> {item?.pera}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
