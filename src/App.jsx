import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedEvents from './components/FeaturedEvents'
import TeamFinder from './components/TeamFinder'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedEvents />
        <TeamFinder />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
