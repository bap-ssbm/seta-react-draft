import { FC } from 'react'

interface LunchProps {

}

const Lunch: FC<LunchProps> = ({ }) => {
    return (
        <div id='lunch' className='flex-grow flex flex-col gap-8 pb-16 items-center'>
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
            <div className='items-center flex flex-col w-fit'>
                <p className='mb-5'>
                    メイン料理 お選び（以下３点からお選びください）
                </p>
                <ul className='text-start w-fit'>
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
            <hr className='border-dashed w-full'/>
            <div className='flex flex-col items-center'>
                <p >
                    ＊プラス￥450 でコースのデザートに変更できます。
                </p>
                <p className='mb-5'>
                    （下記からひとつお選びください）
                </p>
                <ul className='text-start mb-5 w-fit'>
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
            <hr className='border-dashed w-full' />

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