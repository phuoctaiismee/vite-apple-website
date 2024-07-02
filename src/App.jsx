import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import * as Sentry from '@sentry/react'
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
