import { FC } from 'react'
import Button from '../Home/components/ui/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

interface ConceptProps {
  
}

const Concept: FC<ConceptProps> = ({}) => {
    const { t} = useTranslation();
  return (
    <div className=' grid place-content-center px-[3%] py-20'>
            <div className=' flex flex-col gap-10 items-center'>
                <div className='text-center flex flex-col gap-5 items-center mb-10 '>
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


                </div>

                <div className='flex flex-col md:flex-row gap-20 items-center'>
                    <div className='flex gap-10  flex-col text-center  items-center  md:w-[30%] lg:max-w-[300px]'>

                        <div className=' flex flex-col gap-5'>
                            <h2 className='font-bold text-[16px] italic'>
                            {t('homePage.menu.hayamaTitle')}
                                </h2>
                            <hr />
                            <p className=''>
                            {t('homePage.menu.hayamaDesc')}
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <img className='translate-x-3 translate-y-3  border border-black' src='/images/hayamaImg.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                    <div className='flex gap-10  flex-col text-center  items-center  md:w-[30%] lg:max-w-[300px]'>
                        <div className=' flex flex-col gap-5 '>
                        <h2 className='font-bold text-[16px] italic'>
                            {t('homePage.menu.vegetableTitle')}
                                </h2>
                            <hr />
                            <p className=''>
                            {t('homePage.menu.vegieDesc')}
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <img className='translate-x-3 translate-y-3  border border-black' src='/images/vegetables.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                    <div className='flex gap-10  flex-col text-center  items-center md:w-[32%] '>
                        <div className=' flex flex-col gap-5 '>
                        <h2 className='font-bold text-[16px] italic'>
                            {t('homePage.menu.fishTitle')}
                                </h2>
                            <hr />
                            <p className=''>
                            {t('homePage.menu.fishDesc')}
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <img className='translate-x-3 translate-y-3 border border-black' src='/images/foodimg.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                </div>
            </div>

        </div>
  )
}

export default Concept