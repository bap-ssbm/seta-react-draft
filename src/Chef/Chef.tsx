import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import AboutSection from './AboutSection';

interface ChefProps {

}

const Chef: FC<ChefProps> = ({ }) => {
    const { t } = useTranslation();
    return (
        <div className='flex-grow p-[5%]'>
           <AboutSection/>


        </div>
    )
}

export default Chef