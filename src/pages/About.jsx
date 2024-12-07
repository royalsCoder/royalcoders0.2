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
            {/* <div className='row'>
              <div className='col-6'>

                <img style={{ width: "100%" }} src={about1} alt="Images" />
              </div>
              <div className='col-6'>

                <img style={{ width: "100%" }} src={about1} alt="Images" />

              </div>

            </div> */}

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
                    <img style={{ width: "100%" }} src={about1} alt="Images" />
                  </div>
                  <div className="col-lg-6 pr-38 md-pr-15 pl-30 md-pl-15">
                    <div className="sec-title mb-45 md-mb-25">
                      <h2 className="title title2 color-primary title-color pb-20">
                        Simplifying Connections, Enabling Opportunities
                      </h2>
                      <p className="desc small2 text-justify">
                        ICS में आपका स्वागत है, जहाँ हम कुशल पेशेवरों और
                        ग्राहकों को एक साथ लाते हैं, जिससे हर काम और प्रोजेक्ट
                        के लिए एक सहज और भरोसेमंद जगह बनती है। हमारी कहानी एक
                        साधारण अवलोकन से शुरू हुई.
                        <br />
                        <br />
                        कुशल श्रमिकों के पास अक्सर सही ग्राहकों तक पहुँच नहीं
                        होती है, और जनता को विश्वसनीय पेशेवरों को खोजने में
                        चुनौती का सामना करना पड़ता है। हमने इस समस्या को हल करने
                        और एक समर्पित मंच प्रदान करने के लिए ICS बनाया है जहाँ
                        नौकरी के लिए सही व्यक्ति को ढूंढना आसान, सुरक्षित और
                        सुलभ है।
                        <br />
                        <br />
                        घर की मरम्मत से लेकर विशेष सेवाओं तक हर काम के लिए एक
                        कुशल हाथ की जरूरत होती है, और हर कुशल कर्मचारी ऐसे
                        ग्राहकों का हकदार होता है जो उनकी विशेषज्ञता का सम्मान
                        करते हैं। हमारा प्लेटफ़ॉर्म एक पुल बनने के लिए बनाया गया
                        है - एक ऐसा स्थान प्रदान करना जहाँ ग्राहक अपनी ज़रूरतों
                        को पूरा करने के लिए सही पेशेवर पा सकें, और जहाँ कर्मचारी
                        अपनी विशेषज्ञता का प्रदर्शन कर सकें, अपनी प्रतिष्ठा बढ़ा
                        सकें और उचित नौकरी के अवसरों तक पहुँच सकें।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rs-about about-style2 pb-120 md-pt-80 md-pb-80 my-4">
              <div className="container">
                <div className="row y-middle">
                  <div className="col-lg-6 pr-65 md-pr-15 md-mb-50">
                    <div className="sec-title mb-30">
                      <h2 className="title title2 color-primary title-color pb-20">
                        हमारा उद्देश्य
                      </h2>
                      <h2 className="title title2 color-primary title-color pb-20">
                        श्रमिकों को <span>सशक्त</span> बनाना
                      </h2>
                      <p className="desc small2 text-justify">
                        हमारा उद्देश्य केवल सेवाएँ प्रदान करने से कहीं आगे जाता
                        है। [आपकी वेबसाइट का नाम] पर , हम अवसर पैदा करने के बारे
                        में भावुक हैं। हमारा मानना ​​है कि हर किसी को कुशल
                        पेशेवरों के साथ काम करने का मौका मिलना चाहिए, और हर
                        कार्यकर्ता के पास वे संसाधन और दृश्यता होनी चाहिए जिनकी
                        उन्हें सफलता के लिए ज़रूरत है। हमारा प्लेटफ़ॉर्म क्लाइंट
                        और श्रमिकों दोनों को सशक्त बनाने के लिए डिज़ाइन किया गया
                        है, यह सुनिश्चित करते हुए कि उन्हें बिना किसी बिचौलिए की
                        जटिलताओं के एक-दूसरे तक पहुँच प्राप्त हो।
                      </p>
                    </div>
                    {/* <div className="row">
                      <div className="col-lg-6">
                        <ul className="check-lists">
                          <li>Strategy & Planning</li>
                          <li>IT & ITeS</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="check-lists">
                          <li>Finance Services</li>
                          <li>Business Analytics</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="check-lists">
                          <li>Insurance Solutions</li>
                          <li>Mutual Funds & Investment</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="check-lists">
                          <li>Real Estate Services</li>
                          <li>Online Reputation Management (ORM)</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="check-lists">
                          <li>Omni-Channel Customer Experience Management</li>
                          <li>Chat Bots & Process Automation</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="check-lists">
                          <li>Lead Generation</li>
                          <li>Creative Content Management</li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-lg-6">
                    <img style={{ width: "100%" }} src={about2} alt="Images" />
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
