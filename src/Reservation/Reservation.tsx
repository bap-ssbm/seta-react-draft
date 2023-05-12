import { FC } from 'react'
import Button from '../Home/components/ui/Button'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'


interface ReservationProps { }

const Reservation: FC<ReservationProps> = ({ }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='py-16 w-full flex flex-col gap-5 mx-auto items-center  px-[5%] '>

            <div className='flex lg:flex-row flex-col w-full justify-center gap-10 '>
               



                <div className=' flex flex-col  gap-5  bg-white rounded-md w-full items-center h-fit'>
                <p className='text-[16px] font-semibold mt-5'>
                    {t('homePage.reservation.button')}
                    </p>
                    <a href='tel:046-887-0099' className='mb-5'>
                        <Button className='w-full text-[18px]'>
                        <FaPhoneAlt /> 046-887-0099
                        </Button>
                    </a>
                    
                    <div className='w-full'>
                        {i18n.language === "ja" ? <img src='/images/date.png' alt='' /> : <img src='/images/timeenglish.jpg' alt='' />}
                    </div>
                    <div className='flex flex-col  gap-5'>

                        <p className='font-bold  text-center md:whitespace-nowrap text-[18px]'>
                            {t('homePage.reservation.timeTitle')}
                        </p>
                        <div>
                            <p className=' md:whitespace-nowrap'>
                                {t('homePage.reservation.lunch')}: 11:30〜13:30 (LO)
                            </p>
                            <p className='md:whitespace-nowrap'>
                                {t('homePage.reservation.dinner')}: 17:30〜19:30 (LO)
                            </p>
                        </div>
                    </div>
                    
                    

                </div>





            </div>
            <hr className='border-dashed w-full'/>
            <div className='flex flex-col gap-5  px-[5%]'>
                <div>
                    {t('homePage.reservation.warning')}

                </div>
                
                <div className='flex gap-10 justify-center mt-4'>
                    <a href='https://www.instagram.com/hayama_setatei/' className=''>
                        <Button className='flex justify-center items-center gap-3 px-4'>
                            <BsInstagram style={{ display: 'inline-block' }} /> <span>Instagram</span>
                        </Button>
                    </a>
                    <a href='https://www.facebook.com/hayamasetatei/' className=''>
                        <Button className='flex gap-3 px-4'>
                            <BsFacebook className='inline-block'/><div className='inline-block'>Facebook</div>
                        </Button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Reservation