import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation'
import Footer from '../components/Footer/Footer'
import Hero from '../components/hero/Hero'
import Benefit from '../components/benefit/benefit'
import Features from '../components/Feature/Feature'
import Testimoni from '../components/Testimoni/Testimoni'



const HomePage = () => {
  return (
    <>
    <HeaderNavigation />
    <Hero/>
    <Benefit/>
    <Features/>
    <Testimoni/>
    <Footer />
    </>
  )
}

export default HomePage