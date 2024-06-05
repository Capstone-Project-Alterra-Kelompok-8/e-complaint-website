//! Setting router itu disini, jangan gunakan file terpisah lagi

import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Benefit from './components/Benefit/Benefit.jsx'

function App() {

  return (
    <main>
      <HeaderNavigation />
      <Hero />
      <Benefit/>
    </main>
  )
}

export default App