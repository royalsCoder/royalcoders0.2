import React from 'react'
import Header2 from '../components/Header2'
import { Helmet } from 'react-helmet'

const Team = () => {
  return (
    <div>

<Helmet>
        <title>Meet Our Expert IT Professionals – Innovators Behind Success</title>
        <meta
          name="description"
          content="Get to know the talented and passionate professionals driving our IT solutions. Our team combines creativity, technical expertise, and industry experience to deliver outstanding results for our clients."

        />
        <link rel="canonical" href="/about" />

      </Helmet>



        <div className="pagepadding">
        <Header2 heading="Our Team" />

        <div>
          


        </div>
     
      </div>
    </div>
  )
}

export default Team
