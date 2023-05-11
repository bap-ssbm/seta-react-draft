import { FC } from 'react'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

interface AppealProps {

}

const Appeal: FC<AppealProps> = ({ }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='w-full md:hidden flex flex-col gap-10 mt-14 items-center'>
            <Link to='/menu' className='w-full max-w-[500px]'>
                <Button addClass='w-full'>
                    {t('homePage.appeal.menu')}
                </Button>
            </Link>
            <Link to='/reserve' className='w-full max-w-[500px]'>
                <Button addClass='w-full'>
                    {t('homePage.appeal.reservation')}
                </Button>
            </Link>


        </div>)
}

export default Appeal