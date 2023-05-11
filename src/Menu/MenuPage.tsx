import { FC } from 'react'
import MenuNav from './MenuNav'
import ACourse from './ACourse'
import Lunch from './Lunch'
import BCourse from './BCourse'
import CCourse from './CCourse'


interface MenuPageProps {

}

const MenuPage: FC<MenuPageProps> = ({ }) => {
    return (
        <div id='menu-page' className='flex gap-5 md:gap-20 w-full text-[16px] mb-20'>
            <MenuNav />
            <div className='flex-grow flex flex-col gap-20 py-40'>
               
                <Lunch/>
                <ACourse />
                <BCourse/>
                <CCourse/>
            </div>
        </div>
    )
}

export default MenuPage