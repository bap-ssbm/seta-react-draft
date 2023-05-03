import { FC } from 'react'
import Button from '../Home/components/ui/Button'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

interface ReservationProps { }

const Reservation: FC<ReservationProps> = ({ }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='flex-grow p-[5%] grid place-content-center '>
            <div className='w-full mb-5'>
                        <h1 className='text-[20px] italic'>Reservation</h1>
                        <hr className='' />
                    </div>


            <div className='flex flex-col lg:flex-row gap-20 items-center'>
               


                <div className=' flex flex-col gap-5  w-full'>

                    
                    <p>
                    {t('reservationPage.please')}
                    </p>
                    <a href='tel:046-887-0099' className='w-fit'>
                        <Button addClass='px-5 flex gap-5 w-full justify-center items-center'>
                            <FaPhoneAlt /> <p> 046-887-0099 </p>
                        </Button>
                    </a>
                    <p>
                    {t('reservationPage.warning')}
                        <br />
                        {t('reservationPage.warning2')}
                    </p>
                    <div className='flex gap-5 w-full justify-center mt-4'>
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
                <div className='max-w-[600px] p-8 bg-blue-950'>
                    {i18n.language === "ja" ? <img src='/images/date.png' alt='' /> : <img src='/images/timeenglish.jpg' alt='' />}
                    
                        <div className='text-white mt-5'>
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
    )
}

export default Reservation