import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homeage from './Home/Homepage'
import Navbar from './Home/components/ui/navbar/Navbar'
import Footer from './Home/components/ui/footer/Footer'
import Chef from './Chef/Chef'
import Menu from './Menu/Menu'
import Access from './Access/Access'
import Reservation from './Reservation/Reservation'

interface AppProps {

}

const App: FC<AppProps> = ({ }) => {
  return (
    <div className='pt-[100px] lg:pt-[150px] font-EB-garamond text-[17px] min-h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homeage />} />
        <Route path='/chef' element={<Chef />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reserve' element={<Reservation/>} />
        <Route path='/access' element={<Access/>} />
      </Routes>
      <Footer />
    </div>
  )

}

export default App