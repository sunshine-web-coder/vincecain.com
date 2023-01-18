import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PrimaryLayout = ({children}) => {
  return (
    <main className='overflow-hidden'>
        <Header />
        <div className="main-container">
            {children}
        </div>
        <Footer />
    </main>
  )
}

export default PrimaryLayout