//! Setting router itu disini, jangan gunakan file terpisah lagi

import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <main>
      <HeaderNavigation />
      <Hero/>
      <Footer/>
    </main>
  )
}

export default App