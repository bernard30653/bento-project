import React from 'react'
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/首頁/Cover_photos/正忠排骨.jpg';
import './Origin.css';
function Origin() {
    return (
        <>
            <BackgroundImage text={"林歡歡排骨起源的起源"} image={coverPhoto}/>
            <div className="origin-container">
            
                <p>在一個風和日麗的日子，林歡歡在家裡煮了一道特別的排骨菜。這道菜的風味獨特，令所有品嚐過的親朋好友讚不絕口。鼓舞於此，林歡歡決定創立自己的品牌，將這道美味的排骨帶給更多的人。</p>
                <p>於是，林歡歡排骨店應運而生。店鋪位於熱鬧的市區，四周環繞著各式各樣的商店和餐館。林歡歡排骨店以其獨特的口味和氛圍吸引了眾多食客，並逐漸在當地建立了口碑。</p>
                <p>經過一段時間的經營，林歡歡的排骨已經成為了城市裡的美食代名詞。這家店的成功不僅來自於美味的排骨，更源於林歡歡對品質的堅持和對顧客的熱情。林歡歡與顧客建立了良好的關係，並將他們視為自家人一般款待。</p>
                <p>林歡歡排骨店的美味不僅限於獨特的排骨，還有各式配菜和特色飲料。林歡歡不斷創新菜品，希望為顧客帶來更多驚喜。他還積極參與社區活動，將店鋪融入當地文化，為居民提供更多美食體驗。</p>
                <p>如今，林歡歡排骨店已經成為了新竹市裡的一個美食地標。無論是當地居民，還是遠道而來的遊客，都會慕名來此品嚐美味的排骨。隨著口碑的傳播，林歡歡排骨店的故事將不斷傳頌下去，成為一個充滿美食和溫馨的傳奇。</p>
                <div className="origin-signature-container">
                    <div className="origin-signature">
                        Offering the best quality
                    </div>
                </div>
            </div>


        </>
    )
}

export default Origin;
