
import { FC, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import NavMenu from './NavMenu'
import Hamburg from './Hamburg'
import MobileMenu from './MobileMenu'
import Call from './Call'
import { Link } from 'react-router-dom'




interface NavbarProps {
}

const Navbar: FC<NavbarProps> = ({ }) => {

    const [openMenu, setOpenMenu] = useState(false);




    return (
        <nav className=' w-full flex-col items-center flex justify-center gap-10 pt-5 z-50 bg-white  duration-300 transition-all mb-10'>
            <div className='fixed left-0'>
                <Call />
            </div>

            <Link
                to='/'
                className='max-w-[60%]'>
                <motion.img

                    src='/images/logo.png' />
            </Link>

            <NavMenu />
            <Hamburg openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <AnimatePresence>
                {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
            </AnimatePresence>


        </nav>
    )
}

export default Navbar