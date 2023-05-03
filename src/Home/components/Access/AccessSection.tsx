
import { FC } from 'react'
import Button from '../ui/Button'
import { BiMap } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

interface AccessSectionProps {
   
}

const AccessSection: FC<AccessSectionProps> = ({  }) => {
    const { t, i18n} = useTranslation();
    return (
        <div className='grid place-content-center w-full my-10'>
            <div className='flex flex-col gap-10 items-center'>
                <div className='w-full px-[5%]'>
                <h1 className='text-[23px] italic tracking-[2px] text-center lg:text-start'>
                    Access
                </h1>
                <hr/>
                </div>
                
                {i18n.language==="ja"? <img height={500} width={1000} alt='' src='/images/AO_Map.png' />: <img height={500} width={1000} alt='' src='/images/AO_Map_en.png' />}
               
                <div className='flex gap-10 flex-col md:flex-row p-10 md:border'>
                    <div className='flex gap-5 md:pr-10 pb-10 md:pb-0 border-b md:border-r md:border-b-0 justify-center items-center'>
                        <div className='flex flex-col gap-5'>
                            <div>
                            <p className='font-bold underline'>
                            {t('homePage.access.addressTitle')}
                            </p>
                            <p>
                                〒240-0112
                                <br />
                                {t('homePage.access.address')}
                            </p>
                            </div>
                            
                            <a href='https://www.google.com/maps/place/HAYAMA+%E3%81%9B%E3%81%9F%E4%BA%AD/@35.2782653,139.5714886,17z/data=!3m1!4b1!4m6!3m5!1s0x601846fe07cb3531:0xf8b03366ea9f1814!8m2!3d35.2782653!4d139.5736773!16s%2Fg%2F11bv1m_fqx?hl=en'>
                                <Button addClass='w-full flex gap-2 items-center justify-center'>
                                    <BiMap />Google Maps
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='max-w-[800px]'>
                            <p className='font-bold mb-2 underline text-blue-950'>
                            {t('homePage.access.busTitle')}
                            </p>
                            <p>
                            {t('homePage.access.busDesc')}
                            </p>
                        </div>
                        <div>
                            <p className='font-bold mb-2 underline text-blue-950'>
                            {t('homePage.access.carTitle')}
                            </p>
                            <p>
                            {t('homePage.access.carDesc')}
                                <br />
                                {t('homePage.access.car1')}
                                <br />
                                {t('homePage.access.car2')}


                            </p>
                        </div>


                    </div>

                </div>

            </div>

        </div>)
}

export default AccessSection