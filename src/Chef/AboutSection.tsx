
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

interface AboutSectionProps {
   
}

const AboutSection: FC<AboutSectionProps> = ({ }) => {
 
    const { t } = useTranslation();
  
    return (
        <div className=' w-full py-16 grid place-content-center '>

            <h1 className='text-[23px] italic underline tracking-[2px] mb-5'>
                About The Chef
            </h1>
            <div className='w-full flex gap-20 flex-col lg:flex-row mt-10'>

                <div className='p-5 lg:p-20 h-fit bg-slate-300'>
                    

                    <img className='lg:translate-x-10' src='/images/Rituko Seta - Copy.jpg' alt='' height={500} width={500} />
                </div>

                <div className='max-w-[500px] '>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='font-bold'>瀬田律子</h2>
                            <h3>Ritsuko Seta</h3>
                        </div>
                        <hr/>

                        <p>
                            {t('homePage.about.desc')}
                        </p>
                        <hr />
                        <div>
                            <h2 className='font-bold'>
                            {t('homePage.about.title')}
                            </h2>

                            <ul>
                                <li>
                                    ・ {t('homePage.about.first')}
                                </li>
                                <li>
                                    ・ {t('homePage.about.second')}
                                </li>
                                <li>
                                    ・ {t('homePage.about.third')}
                                </li>
                                <li>
                                    ・ {t('homePage.about.fourth')}
                                </li>
                            </ul>


                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default AboutSection