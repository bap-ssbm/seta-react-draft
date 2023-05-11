import { FC } from 'react'

interface BCourseProps {

}

const BCourse: FC<BCourseProps> = ({ }) => {
    return (
        <div id='bcourse' className='flex-grow flex flex-col gap-8 py-16'>
            <div>
                <h2 className='underline font-bold'>
                    B コース
                </h2>
                <p className='underline font-bold'>
                    ¥4,300
                </p>
            </div>


            <p>
                一口オードブル
            </p>
            <p>
                前菜：本日の魚介のマリネ レムドレソース
            </p>
            <p>
                季節のスープ
            </p>
            <div>
                <p>
                    メイン お選び（以下 3 点からお選びください）
                </p>
                <ul>
                    <li>
                        ・ 季節のお魚のポワレ
                    </li>
                    <li>
                        ・ 牛ほほ肉の赤ワイン煮
                    </li>
                    <li>
                    ・ 和牛ヒレ肉のステーキ ポルト酒のソース（＋１８００円）
                    </li>
                </ul>
            </div>
            <p>
                ＊信州安曇野そば （＋５５０円）
            </p>
            <div>
                <p>
                    デザートお選び（以下３点のいずれか）
                </p>
                <ul>
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

export default BCourse