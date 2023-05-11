import { FC } from 'react'

interface LunchProps {

}

const Lunch: FC<LunchProps> = ({ }) => {
    return (
        <div id='lunch' className='flex-grow flex flex-col gap-8 py-20'>
            <div>
                <h2 className='underline font-bold'>
                    ランチコース（ランチタイムのみ）
                </h2>
                <p className='underline font-bold'>
                    ¥1,800
                </p>
            </div>


            <p>
                季節のスープ ＆ ミニサラダ
            </p>
            <div>
                <p>
                    メイン料理 お選び（以下３点からお選びください）
                </p>
                <ul>
                    <li>
                        ・ 季節のお魚料理
                    </li>
                    <li>
                        ・ モモ肉のきのこクリーム煮
                    </li>
                    <li>
                        <div>
                            <p>
                                人気のせた亭 オリジナルメニュー
                            </p>
                            <p>
                                ・  ロールキャベツ トマトソースグラタン
                            </p>
                        </div>

                    </li>
                </ul>
            </div>
            <div>
                <p>
                    ＊プラス￥450 でコースのデザートに変更できます。
                </p>
                <p>
                    （下記からひとつお選びください）
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
                <p>
                    コースデザートと飲み物のセット・・・￥650
                </p>
            </div>


            <p>
                信州安曇野そば・・・¥550
            </p>


            <p>
                コーヒー、紅茶、ハーブティー・・・￥400
            </p>
        </div>
    )
}

export default Lunch