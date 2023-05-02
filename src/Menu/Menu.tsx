import { FC } from 'react'
import { useTranslation } from 'react-i18next';

interface MenuProps {

}

const Menu: FC<MenuProps> = ({ }) => {
    const { t } = useTranslation();
    return (
        <div className='flex-grow p-[5%] pb-56 text-center flex flex-col gap-10 relative'>
            <h1 className='text-[23px] italic underline tracking-[2px]'>
                Menu
            </h1>
          
            <div className='flex flex-col gap-56'>
                <div className='mt-10'>
                    <h2 className='font-semibold mb-10'>
                        {t('menu.a.title')}<br />{t('menu.a.price')}
                        <br />
                        {t('menu.warning')}
                    </h2>
                    <p>
                        {t('menu.course.amuse')}
                        <br />
                        {t('menu.a.appetizer')}
                        <br />
                        {t('menu.a.main')}
                        <br />
                        {t('menu.course.dessert')}
                        <br />
                        {t('menu.course.drink')}
                    </p>
                </div>

                <div>
                    <h2 className='font-semibold mb-10'>
                        {t('menu.b.title')}<br />{t('menu.b.price')}
                        <br />
                        {t('menu.warning')}
                    </h2>
                    <p>
                        {t('menu.course.amuse')}
                        <br />
                        {t('menu.b.appetizer')}
                        <br />
                        {t('menu.course.dessert')}
                        <br />
                        {t('menu.b.soup')}
                        <br />
                        {t('menu.b.main')}
                        <br />
                        {t('menu.course.dessert')}
                        <br />
                        {t('menu.course.drink')}
                    </p>
                </div>
                <div>
                    <h2 className='font-semibold mb-10'>
                        {t('menu.c.title')}<br />{t('menu.c.price')}
                        <br />
                        {t('menu.warning')}
                    </h2>
                    <p>
                        {t('menu.course.amuse')}
                        <br />
                        {t('menu.c.appetizer')}
                        <br />
                        {t('menu.c.soup')}
                        <br />
                        {t('menu.c.seafood')}
                        <br />
                        {t('menu.c.main')}
                        <br />
                        {t('menu.c.soba')}
                        <br />
                        {t('menu.course.dessert')}
                        <br />
                        {t('menu.course.drink')}
                    </p>
                </div>
                <div>
                    <h2 className='font-semibold mb-10'>
                        {t('menu.lunch.title')}<br />{t('menu.lunch.price')}
                        <br />
                        {t('menu.warning')}
                    </h2>
                    <p>
                        {t('menu.lunch.soup')}
                        <br />
                        {t('menu.lunch.salad')}
                        <br />
                        {t('menu.lunch.mainTitle')}
                        <br />
                        {t('menu.lunch.main')}
                        <br />
                        {t('menu.lunch.sorbet')}
                    </p>
                </div>
            </div>

            <div className='absolute opacity-10 right-0 top-[40%]'>
                <img height={700} width={700} className='' src='/images/１３.jpg' />
            </div>
            <div className='absolute opacity-10 top-[13%]'>
                <img height={700} width={700} className='' src='/images/3.jpg' />
            </div>
            <div className='absolute opacity-10 bottom-[13%]'>
                <img height={700} width={700} className='' src='/images/8.jpg' />
            </div>

        </div>)
}

export default Menu