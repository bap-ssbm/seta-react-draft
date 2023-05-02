import { FC } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

interface CallProps {

}

const Call: FC<CallProps> = ({ }) => {
    return (
        <a href='tel:046-887-0099' className='w-full lg:hidden'>
            <button className='p-5 text-[18px] '>

                <FaPhoneAlt />

            </button>
        </a>
    )
}

export default Call