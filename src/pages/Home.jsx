import React from 'react'
import Cta from '../components/Cta'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Partners from '../components/Partners'
import Marketplace from '../components/Marketplace'
import Ecosystem from '../components/Ecosystem'
import LatestBlog from '../components/LatestBlog'
import About from '../components/About'
import Features from '../components/Features'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <PrimaryLayout>
      <Hero />
      <Features />
      <Marketplace />
      <Partners />
      <About />
      <Ecosystem />
      <Cta />
      <LatestBlog />
    </PrimaryLayout>
  )
}

export default Home