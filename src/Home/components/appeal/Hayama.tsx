import { FC } from 'react'
import { useTranslation } from 'react-i18next';

interface HayamaProps {

}

const Hayama: FC<HayamaProps> = ({ }) => {
  const { t } = useTranslation();
  return (
    <div className='flex gap-10  flex-col text-center  items-center  '>


      <div className='w-full'>
        <div className=' flex flex-col gap-5 absolute z-20'>
          <h2 className='font-bold text-[18px] italic'>
            {t('homePage.menu.hayamaTitle')}
          </h2>
          <hr />
          <p className=''>
            {t('homePage.menu.hayamaDesc')}
          </p>

        </div>
        
      </div>


    </div>
  )
}

export default Hayama