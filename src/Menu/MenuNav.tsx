import { FC } from 'react'

interface ConceptNavProps {

}

const MenuNav: FC<ConceptNavProps> = ({ }) => {
    return (
        <div className='border-b  md:border-r md:border-b-0 pr-4 md:pr-20 py-10 md:pt-20  '>
            <ul className='flex flex-col gap-4 md:gap-10 md:sticky md:top-36 h-fit text-center items-center md:items-start md:text-start'>
                <li>
                    <a className='hover:underline' href='#lunch'>
                        Lunch
                    </a>
                </li>
                <li>
                    <div className='flex md:flex-col gap-9 md:gap-10 w-full'>
                        <a className='hover:underline' href='#acourse'>
                            A Course
                        </a>
                        <a className='hover:underline' href='#bcourse'>
                            B Course
                        </a>
                        <a className='hover:underline' href='#ccourse'>
                            C Course
                        </a>
                    </div>


                </li>
          

                <li>
                    <a href="/menu/jp_menu.pdf" className='hover:underline' download>
                        メニュー PDF
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuNav