import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageBtnProps {

}

const LanguageBtn: FC<LanguageBtnProps> = ({ }) => {
    const {i18n} = useTranslation()
    return (
        <button className='hidden md:flex z-[100] bg-white py-3 px-5 hover:scale-105 duration-300 shadow-md fixed bottom-5 right-5' onClick={() => i18n.changeLanguage(i18n.language === "ja" ? "en" : "ja")}>
            En/日本語
        </button>
    )
}

export default LanguageBtn