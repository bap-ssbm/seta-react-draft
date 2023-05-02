import { FC } from 'react'
import Button from '../ui/Button'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import MenuSectionBottom from './MenuSectionBottom';
interface MenuSectionProps {}
 

const MenuSection: FC<MenuSectionProps> = ({  }) => {
    const { t} = useTranslation();
    
    return (
        <div className='px-[5%] md:px-0  place-content-center  flex flex-col gap-20'>
            <div className=' flex flex-col gap-10 items-center relative'>
                <div className='text-center flex flex-col gap-10 items-center mb-10 lg:absolute lg:top-[50%] lg:translate-y-[-50%] z-30'>
                    <h1 className='text-[23px] italic tracking-[3px] lg:w-full underline '>
                        Concept
                    </h1>
                    <p>
                    {t('homePage.menu.concept')}
                    <br/>
                    {t('homePage.menu.concept2')}
                    <br/>
                    {t('homePage.menu.concept3')}
                    <br/>
                    {t('homePage.menu.concept4')}
                    </p>
                    

                    <div className='md:w-[50%] w-full'>
                        <Link to='/menu'>
                        <Button addClass='w-fit px-10'>
                        {t('homePage.menu.button')}
                        </Button>
                        </Link>
                        
                    </div>
                    {/* <MenuSectionBottom/> */}

                </div>
                <img className=' hidden lg:flex opacity-20 ' width={1920} height={1080} src='/images/hayama.jpg' alt='' />
                
            </div>
            
            
        </div>
    )
}

export default MenuSection