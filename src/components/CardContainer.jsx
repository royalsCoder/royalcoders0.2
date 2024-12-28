import React from 'react'
import './Card.css'
import Card from './Card'
const CardContainer = () => {



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
  return (
    <div>
      <div className="grid-container">
        <div className="row">

        {
           

           cards?.map((card,index)=>{
             return(
               <>
               <div className="col-4">
             
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
