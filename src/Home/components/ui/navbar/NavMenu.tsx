import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

interface NavMenuProps {

}

const NavMenu: FC<NavMenuProps> = ({ }) => {
    const { t, i18n } = useTranslation();
    
    

    return (
        <div className='w-full lg:flex justify-center hidden '>
            <ul className='flex w-full  gap-10 justify-evenly max-w-[1000px]'>
                <li className='relative underline-hover-effect'>
                    <Link to="/">
                    {t('navbar.home')}
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect '>
                    <Link to="/chef">
                    {t('navbar.about')}
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link to="/menu">
                    {t('navbar.menu')}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link to="/reserve">
                    {t('navbar.reserve')}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link to="/access">
                    {t('navbar.access')}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    
                    <button onClick={() => i18n.changeLanguage(i18n.language==="ja"?"en":"ja")}>
                    {i18n.language==="ja"?"English":"日本語"}
                    </button>
                        
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
            </ul>
        </div>
    )
}

export default NavMenu