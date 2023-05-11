import { FC } from 'react'

interface CCourseProps {
  
}

const CCourse: FC<CCourseProps> = ({}) => {
  return (
    <div id='ccourse' className='flex-grow flex flex-col gap-8 py-20'>
            <div>
                <h2 className='underline font-bold'>
                    C コース
                </h2>
                <p className='underline font-bold'>
                    ¥6,400
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
            <p>
            料理：季節のお魚のポワレ 
            </p>
            <div>
                <p>
                料理：季節のお魚のポワレ 
                <br/>
                または
                <br/>
                和牛ヒレ肉のステーキ ポルト酒のソース（＋１８００円）
                </p>
            </div>
            
            <p>
                信州安曇野そば
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

export default CCourse