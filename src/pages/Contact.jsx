import { useEffect, useState } from "react";
import Header2 from "../components/Header2";
import "./contact.css";
import toast from "react-hot-toast";
import { PostRequest } from "../helper/Helper";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

// import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();

    PostRequest({
      url: `contact/addcontact`,
      cred: {
        ...formData,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Form Submitted successfuly");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });

    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };
  return (
    <div>

<Helmet>
        <title>Get in Touch – Start Your IT Journey Today</title>
        <meta
          name="description"
          content="Ready to transform your ideas into reality? Contact us for expert web and app development, IT services, and more. Let’s collaborate to elevate your business to new heights."

        />
        <link rel="canonical" href="/about" />

      </Helmet>
      <div className="pagepadding">
        <Header2
          heading="Contact Us"
          pera=" हम संचार को महत्व देते हैं और आपकी पूछताछ में आपकी सहायता करने के लिए हमेशा तैयार रहते हैं।।"
        />
      </div>
      <div className="contact-body">
        <section>
          <div className="section-header">
            <div className="container">
              <h2 className="color-primary">Contact Us</h2>
              <p>
                हमारी सेवाओं के बारे में कोई सवाल हो, या आप फ़ीडबैक देना चाहते
                हों, हमारी टीम आपकी सहायता के लिए मौजूद है। नीचे दिए गए किसी भी
                तरीके का उपयोग करके हमसे संपर्क करने में संकोच न करें
              </p>
            </div>
          </div>

          <div className="container">
            <a
              href="https://api.whatsapp.com/send?phone=9005286625&text=I want to contact you."
              class="float"
              target="_blank"
            >
              <FaWhatsapp className="my-float" size={40} />
            </a>
            <div className="row">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-home">
                      <FaLocationDot />
                    </i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Address</h4>
                    <p>
                      A-20 Ashok Vihar Colony, Ismailganj,Chinhat
                      <br /> Lucknow- 226021
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone">
                      <FaPhone />
                    </i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>7985787895</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope">
                      <MdMarkEmailUnread />
                    </i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>izzyclicksupplier@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope">
                      <BsBank2 />
                    </i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Bank Details</h4>
                    <p className="m-0">
                      <span>Bank Name:- </span> <span>State Bank Of India</span>
                    </p>
                    <p className="m-0">
                      <span>Branch :- </span> <span>High Court Lucknow</span>
                    </p>
                    <p className="m-0">
                      <span>Name :- </span>{" "}
                      <span>Izzy Click Supplier (OPC) Private Limted</span>
                    </p>
                    <p className="m-0">
                      <span>Account Number:- </span> <span>43357205640</span>
                    </p>
                    <p className="m-0">
                      <span>IFSC Code :- </span> <span>SBIN0006219</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form onSubmit={submitData} id="contact-form">
                  <h2>Send Message</h2>

                  <div className="input-box">
                    <label className="text-black" for="exampleInputEmail1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required="true"
                      name="name"
                      value={formData?.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="input-box">
                    <label className="text-black" for="exampleInputEmail1">
                      Email
                    </label>

                    <input
                      type="email"
                      required="true"
                      name="email"
                      value={formData?.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-box">
                    <label className="text-black" for="exampleInputEmail1">
                      Phone
                    </label>

                    <input
                      type="phone"
                      placeholder="Phone Number"
                      required="true"
                      name="phone"
                      value={formData?.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-box">
                    <label className="text-black" for="exampleInputEmail1">
                      Message
                    </label>

                    <textarea
                      required="true"
                      placeholder="Type your Message..."
                      name="message"
                      value={formData?.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="input-box">
                    <input type="submit" value="Send" name="" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }} className="my-5 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.9057912751614!2d81.00269947543813!3d26.874734076669846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzI5LjAiTiA4McKwMDAnMTkuMCJF!5e0!3m2!1sen!2sin!4v1731556167250!5m2!1sen!2sin"
              height="450"
              style={{ border: "0", width: "98%", margin: "auto" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
