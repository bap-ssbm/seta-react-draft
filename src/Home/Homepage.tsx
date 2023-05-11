import Appeal from './components/appeal/Appeal'
import HeroCarousel from './components/hero/HeroCarousel'



type Params = {

}

export default function Homeage() {
 
  return (
    <div className='gap-20 mb-10  h-fit'>
      <HeroCarousel />
      <Appeal/>
    </div>
  )
}
