import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Accountability Producer</title>
        <meta property="og:title" content="Central Accountability Producer" />
      </Helmet>
    </div>
  )
}

export default Home
