import React from 'react'
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/歷年計畫/history_4_2.jpg';
import taiwanPhoto1 from '../../images/網站照片/歷年計畫/taiwan_1.jpg';
import taiwanPhoto2 from '../../images/網站照片/歷年計畫/taiwan_2.jpg';
import taiwanPhoto3 from '../../images/網站照片/歷年計畫/taiwan_3.jpg'; 
import taiwanPhoto4 from '../../images/網站照片/歷年計畫/taiwan_4.jpg';
import './Taiwan2020.css';
function Taiwan2020() {
    return (
        <>
            <BackgroundImage text={"2020夏季 台灣"} image={coverPhoto}/>
            <div className="taiwan-container">
                <h3>桃園市三和國小</h3>
                <hr/>
                <p>位於桃園龍潭，經過崎嶇的山路後便會抵達隱藏在山中的三和國小。
                    三和國小校地優美，被山巒層層環繞，孩子們在綠意盎然的大自然中快樂的成長。
                    在2020這個多事之秋之際，即使受到疫情阻攔而無法出國，VED團隊仍於暑假來到了桃園市龍潭區的三和國小進行服務教育。
                    三和國小是一間離市區不遠，但卻坐落於偏遠群山之中的低調小學。
                    雖然每個年級只有一個班級，但其孕育的每個孩子都活潑愛笑、多才多藝！</p>
                <p>有別於以往服務的經驗，這次VED團隊在英文課中採取主題式教學，
                    用食、衣、住、行、育樂五大領域來教導孩子在生活中就能靈活運用英文。
                    即使立足台灣，我們也致力於讓孩子在上地理課獲得有如環遊世界的感覺。
                    透過介紹多元國家文化和英語大富翁的遊戲，打開孩子對國際的視野。有些課程是由遠在香港的老師們進行線上教學的，
                    透過直播連線的方式，我們找出讓孩子與線上的老師們即時互動的最佳方法!</p>
                <p>除了教導孩子，我們也與來自三和國小、德龍國小和龍源國小的校長共享一頓豐盛的下午茶！
                    在用餐的過程中我們不但更瞭解偏鄉學校的狀況，也互相交流了彼此的教育理念。</p>
                <p>來自不同學校的孩子們在這幾天的相處後產生了深厚的友誼，他們不僅學會如何與組員合作，
                   甚至和VED的老師們都成為了朋友！</p>
                <div className="taiwan-photo-container">
                        <img src={taiwanPhoto1} alt="taiwan 1" id="taiwan-photo-2020-1"/>
                         
                        <img src={taiwanPhoto2} alt="taiwan 2" id="taiwan-photo-2020-2"/>
                      
                        <img src={taiwanPhoto3} alt="taiwan 3" id="taiwan-photo-2020-3"/>
                        
                        <img src={taiwanPhoto4} alt="taiwan 4" id="taiwan-photo-2020-4"/>
                         
                </div> 
            </div>
        </>
    )
}

export default Taiwan2020;
