import React from 'react'
import './Card.css'
import Card from './Card'
import WebDevelopmentImage from "../assets/Construction.png";
import SoftwareDevelopmentImage from "../assets/Car-and-bike-services.png";
import SocialMediaMarketingImage from "../assets/CCTV-Instalation.png";

const CardContainer = () => {



    const cards = [
      
      {
        image:WebDevelopmentImage ,
         title: 'Web Development',
        text: 'At Royal Coders, we specialize in custom web development to help businesses establish a strong digital presence. Our team creates responsive websites, e-commerce platforms, and SEO-optimized solutions that drive traffic, enhance user experience, and increase conversions.',
        button: 'Book Now'
      },
      {
        image: SoftwareDevelopmentImage,
        title: 'Software Development',
        text: 'We offer custom software development services that streamline operations and boost productivity. From enterprise software solutions to mobile apps, our solutions are secure, scalable, and tailored to your business requirements, helping you stay ahead of the competition.',
        button: 'Book Now'
      },
      {
        image: SocialMediaMarketingImage,
        title: 'Social Media Marketing',
        text: 'Our social media marketing services enhance brand visibility and engagement across platforms like Facebook, Instagram, and LinkedIn. We create targeted campaigns that help your business connect with your audience, drive traffic, and achieve growth.',
        button: 'Book Now'
      },
      
     
     
    ]
  return (
    <div>
      <div className="grid-container">
        <div className="row">

        {
           

           cards?.map((card,index)=>{
             return(
               <>
               <div className="col-12 col-lg-4 col-md-4 col-sm-6 mb-4  ">
             
               <Card
               key={index}
               image={card?.image}
               title={card?.title}
               text={card?.text}
               button={card?.button}
             />
             </div>
               </>
             )
           })
         
         
         }




         
        </div>
      </div>
    </div>
  )
}

export default CardContainer
