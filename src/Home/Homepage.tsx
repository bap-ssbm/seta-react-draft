


import AccessSection from './components/Access/AccessSection'
import MenuSection from './components/Menu/MenuSection'
import ReservationSection from './components/Reservation/ReservationSection'
import Appeal from './components/appeal/Appeal'
import HeroCarousel from './components/hero/HeroCarousel'



type Params = {

}

export default function Homeage() {
 
  return (
    <div className='flex flex-col items-center gap-20 mb-10'>
      <HeroCarousel />
      <MenuSection />
     
      <ReservationSection />
      
      

      <AccessSection />
    
    </div>
  )
}
