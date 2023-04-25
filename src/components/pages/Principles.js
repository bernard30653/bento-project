import React from 'react'
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/首頁/Cover_photos/台式炸排骨_飲食特色.jpg';
import './Principles.css';
function Principles() {
    return (
        <div>
           <BackgroundImage text={"飲食特色"} image={coverPhoto} color={"black"}/> 
           <div class="prinicples-outer">
            <div class="principles-container">
                    <div class="principles-grid11">
                        <p text-align="justify">
                        林歡歡排骨店的核心價值在於品質追求、創新與傳承、環保可持續性，並以顧客為尊。這些價值理念使得林歡歡排骨店在餐飲市場中脫穎而出，贏得了顧客的信賴與喜愛。
                        </p>
                    </div>
                    <div class="principles-grid12">
                        <i class="fas fa-tractor"></i>
                        <h3>
                            採用在地食材
                        </h3>
                        <p>
                            林歡歡排骨店致力於支持當地農民和產業，因此在菜單上特別選用新鮮的在地食材。這不僅確保了食物的品質，還提升了每道菜品的風味，為顧客帶來更加美好的用餐體驗。
                        </p>
                    </div>
                    <div class="principles-grid13">
                        <i class="fas fa-box"></i>
                        <h3>
                            保持外送食物的品質
                        </h3>
                        <p>林歡歡排骨店非常重視外送食物的品質，確保每道菜品即使在運輸過程中也能保持其美味和口感。特別設計的外送包裝材料和保溫措施，讓顧客在品嚐美食時能感受到像在店內用餐一樣的品質。</p>
                    </div>
                    <div class="principles-grid21">
                        <i class="fas fa-clock"></i>
                        <h3>
                            方便快捷的自取服務
                        </h3>
                        <p>林歡歡排骨店為顧客提供便利的自取服務，顧客可以直接到店裡取餐。店內有專門的取餐區域，確保顧客在取餐過程中不受干擾，並能夠迅速找到自己的訂單。此外，店內工作人員也會在取餐過程中為顧客提供熱情、專業的協助。</p>
                    </div>
                    <div class="principles-grid22">
                        <i class="fas fa-heart"></i>
                        <h3>
                            貼心的顧客關懷
                        </h3>
                        <p>
                        林歡歡排骨店的員工團隊深知服務品質對於顧客的重要性。他們不僅專業並富有經驗，還非常關注顧客的需求，並時刻保持微笑與熱情。無論是在外送過程中，還是在顧客到店自取時，他們都致力於為顧客提供最滿意的用餐體驗。
                        </p>
                    </div>
                    <div class="principles-grid23">
                        <i class="fas fa-utensils"></i>
                        <h3>傳統與創新的結合</h3>
                        <p>
                        林歡歡排骨店尊重傳統美食的精髓，同時積極尋求創新。在烹調方法和口味搭配上，林歡歡將古老的烹飪技巧與現代的元素巧妙結合，為顧客呈現出別具一格的美味佳肴。
                        </p>
                    </div>
            </div>
           </div>
        </div>
    )
}

export default Principles;
