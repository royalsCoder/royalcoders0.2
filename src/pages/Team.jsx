import React from 'react'
import Header2 from '../components/Header2'
import { Helmet } from 'react-helmet'

const Team = () => {
  return (
    <div>

<Helmet>
        <title>our team</title>
        <meta
          name="description"
          content="Matra Chhaya Seva Sansthan: Empowering women, supporting poor girls' marriages, education, and offering embroidery training. A dedicated NGO making a positive impact."

        />
        <link rel="canonical" href="/about" />

      </Helmet>



        <div className="pagepadding">
        <Header2 heading="Our Team" />
     
      </div>
    </div>
  )
}

export default Team
