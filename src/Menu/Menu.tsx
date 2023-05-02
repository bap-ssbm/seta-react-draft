import { FC } from 'react'

interface MenuProps {

}

const Menu: FC<MenuProps> = ({ }) => {
    return (
        <div className='flex-grow p-[5%] pb-56 text-center flex flex-col gap-10 relative'>
            <h1 className='text-[23px] italic underline tracking-[2px] mb-5 py-16'>
                Menu
            </h1>
            <hr />
            <div className='flex flex-col gap-56'>
                <div className='mt-10'>
                    <h2 className='font-semibold mb-10'>
                        A コース<br />3,200円
                        <br />
                        ( 税込、サービス料なし )
                    </h2>
                    <p>


                        一口オードブル
                        <br />
                        前菜（魚介のマリネ）

                        <br />本日の魚料理 または 豚ロース肉グリル
                        <br />デザート（３種類からお選び）<br />
                        コーヒーまたは紅茶
                    </p>
                </div>

                <div>
                    <h2 className='font-semibold mb-10'>
                        B コース <br /> 4,300
                        <br />
                        ( 税込、サービス料なし )
                    </h2>
                    <p>


                        一口オードブル
                        <br />
                        前菜（魚介のマリネ）
                        <br />
                        季節のスープ／本日の魚料理 または 牛ホホ肉の赤ワイン煮
                        <br />デザート（３種類からお選び）
                        <br />コーヒーまたは紅茶
                    </p>
                </div>
                <div>
                    <h2 className='font-semibold mb-10'>
                        C コース
                        <br />
                        6,400円
                        <br />
                        ( 税込、サービス料なし )
                    </h2>
                    <p>


                        一口オードブル
                        <br />
                        前菜（魚介のマリネ）
                        <br />
                        本日のスープ
                        <br />季節の魚料理
                        <br />肉料理（牛頬肉赤ワイン煮 または 和牛ヒレステーキ+1,880円
                        <br />信州安曇野そば
                        <br />デザート（３種類からお選び）<br />
                        コーヒーまたは紅茶
                    </p>
                </div>
                <div>
                    <h2 className='font-semibold mb-10'>
                        ランチセット

                        <br />1,800円
                        <br />
                        (税込、サービス料なし)
                    </h2>
                    <p>


                        カップスープ
                        <br />
                        季節野菜のミニサラダ
                        <br />
                        メイン料理お選び
                        <br />
                        （ロールキャベツのトマトソースグラタン・本日の魚料理・鶏肉のきのこクリーム煮）
                        <br />
                        季節のシャーベット
                    </p>
                </div>
            </div>
            
            <div className='absolute opacity-10 right-0 top-[40%]'>
                <img height={700} width={700} className='' src='/images/１３.jpg'/>
            </div>
            <div className='absolute opacity-10 top-20'>
                <img height={700} width={700} className='' src='/images/3.jpg'/>
            </div>
            <div className='absolute opacity-10 bottom-6'>
                <img height={700} width={700} className='' src='/images/8.jpg'/>
            </div>
            
        </div>)
}

export default Menu