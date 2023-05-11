import { FC } from 'react'

interface ConceptNavProps {

}

const MenuNav: FC<ConceptNavProps> = ({ }) => {
    return (
        <div className=' border-r pr-4 md:pr-20 pt-20 mt-20 '>
            <ul className='flex flex-col gap-10 sticky top-36 h-fit'>
                <li>
                    <a className='hover:underline' href='#lunch'>
                        Lunch
                    </a>
                </li>
                <li>
                    <a className='hover:underline' href='#acourse'>
                        A Course
                    </a>

                </li>
                <li>
                    <a className='hover:underline' href='#bcourse'>
                        B Course
                    </a>
                </li>
                <li>
                    <a className='hover:underline' href='#ccourse'>
                        C Course
                    </a>
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