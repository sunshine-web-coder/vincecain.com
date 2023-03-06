import React from 'react'
import Cta from '../components/Cta'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Partners from '../components/Partners'
import Marketplace from '../components/Marketplace'
import Ecosystem from '../components/Ecosystem'
import Introducing from '../components/Introducing'
import BuildFuture from '../components/BuildFuture'
import LatestBlog from '../components/LatestBlog'
import About from '../components/About'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Whybuildon from '../components/Whybuildon'

const Home = () => {
  return (
    <PrimaryLayout>
      <Hero />
      <Features />
      <Whybuildon />
      <Marketplace />
      <Partners />
      <About />
      <Ecosystem />
      <Introducing />
      <BuildFuture />
      <Cta />
      <LatestBlog />
    </PrimaryLayout>
  )
}

export default Home