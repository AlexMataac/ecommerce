import React from 'react'
import Hero from '../hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/newCollections/NewCollection'
import NewsLetter from '../components/newsLetter/NewsLetter'




const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
     
    </div>
  )
}

export default Shop