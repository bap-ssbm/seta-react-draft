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
                    
                    <div className='w-full'>
                        {i18n.language === "ja" ? <img src='/images/date.png' alt='' /> : <img src='/images/timeenglish.jpg' alt='' />}
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>

                        <p className='font-bold  text-center md:text-start md:whitespace-nowrap'>
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

                    <a href='tel:046-887-0099' className='w-full'>
                        <Button addClass='w-full'>
                            <p className='text-[14px]'>
                                {t('homePage.reservation.button')}
                            </p>
                            <p className='text-[20px]'>
                                046-887-0099
                            </p>
                        </Button>
                    </a>
                    

                </div>





            </div>
            <div className='flex flex-col gap-5 '>
                <div>
                    {t('homePage.reservation.warning')}

                </div>
                
                <div className='flex gap-5 justify-center mt-4'>
                    <a href='https://www.instagram.com/hayama_setatei/' className='flex-grow'>
                        <Button addClass='flex justify-center items-center gap-3 w-full'>
                            <BsInstagram style={{ display: 'inline-block' }} /> <span>Instagram</span>
                        </Button>
                    </a>
                    <a href='https://www.facebook.com/hayamasetatei/' className='flex-grow'>
                        <Button addClass='flex justify-center items-center gap-3 w-full'>
                            <BsFacebook /><span>Facebook</span>
                        </Button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Reservation