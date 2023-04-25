import React from 'react'
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/歷年計畫/history_1_2.jpg';
import './Cambodia2019.css';
function Cambodia2019() {
    return (
        <div>
            <BackgroundImage text={"2019冬季 柬埔寨"} image={coverPhoto}/>
            <div className="cambodia-container">
                <h3>Muk Neak Primary School</h3>
                <hr/>
                <p>我們在歷經超過半年的籌備與兩次實地考察，終於在2019年寒假成立服務學習團，
                   前往柬埔寨暹粒Muk Neak Primary School 服務。學校坐落於世界名勝；吳哥窟車程20分鐘的小鄉鎮。校地寬廣，全校師生超過800位，
                   一個年級一班有超過35位同學，同時分成上午班與下午班兩個班別；每個孩子一天上課的時間只有半天(五個小時)，
                   剩下的半天時間需要回家幫忙家計；而上課內容主要為柬文、數學、品格教育，課程內容較單一。</p>
                <p>
                有鑑於此，VED團隊設計出了全方位多元的課程，包含科學實驗、英文會話、藝術手作、體育、世界地理，
                透過互動學習，讓孩子們在課堂中看到世界，以及對未來更多的想像。
                </p>
                <p>
                  孩子們很活潑好動，下課時喜歡踢足球、追逐奔跑嬉戲，上課時也很積極認真，特別喜歡地理、藝術手作活動。
                  VED夥伴們在宿舍依然是馬不停蹄地議課、檢討當天流程、準備明天課程內容、演練試教，常常忙到半夜才上床休息。
                  為期10天充實的服務教育要畫下尾聲，我們與校方互相致贈紀念品、合照，並與孩子們好好道別，期望來日相見。
                  我們期待透過定期定點的方式，持續長時間地在當地深耕，以帶來更長遠、更正向的影響力！ 
                </p>
            </div>
        </div>
        
    )
}

export default Cambodia2019;
