import React from 'react'
import './Card.css'
import Card from './Card'
const CardContainer = () => {



    const cards = [
      
      {
        image: 'https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600',
        title: 'Finland',
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
        image: 'https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600',
        title: 'Finland',
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
        image: 'https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600',
        title: 'Finland',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button: 'Book Now'
      },
      {
        image: 'https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600',
        title: 'Finland',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
               <div className="col-12 col-lg-4 col-md-4 mb-4  ">
             
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
