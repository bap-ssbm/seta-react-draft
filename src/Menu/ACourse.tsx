import { FC } from 'react'

interface ACourseProps {

}

const ACourse: FC<ACourseProps> = ({ }) => {
    return (
        <div id='acourse' className='flex-grow flex flex-col gap-8 py-16 items-center'>
            <div>
                <h2 className='underline font-bold'>
                    A コース
                </h2>
                <p className='underline font-bold'>
                    ¥3,200
                </p>
            </div>


            <p>
                一口オードブル
            </p>
            <p>
                前菜：本日の魚介のマリネ レムドレソース
            </p>
            <div>
                <p className='mb-5'>
                    メイン お選び（以下 2 点からお選びください）
                </p>
                <ul className='text-start w-fit'>
                    <li>
                        ・ 季節のお魚のポワレ
                    </li>
                    <li>
                        ・ 豚ロース肉のグリル マスタード味噌ソース
                    </li>
                </ul>
            </div>
            <p>
                ＊信州安曇野そば （＋５５０円）
            </p>
            <div>
                <p className='mb-5'>
                    デザートお選び（以下３点のいずれか）
                </p>
                <ul className='text-start w-fit'>
                    <li>
                        ・ 小豆のババロア
                    </li>
                    <li>
                        ・ ガトーショコラ
                    </li>
                    <li>
                        ・ マスカルポーネチーズのムース
                    </li>
                </ul>
            </div>
            <p>
                コーヒー/紅茶
            </p>
        </div>
    )
}

export default ACourse