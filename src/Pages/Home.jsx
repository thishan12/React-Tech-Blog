import { About, Blognews, Footer, Hero, Navbar, Pdfs, StartJ, Technologies } from '../components';
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pdfs />
      <Technologies />
      <Blognews />
      <StartJ />
      <Footer />
    </div>
  )
}

