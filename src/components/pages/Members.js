import React from 'react';
import BackgroundImage from  '../BackgroundImage';
import coverPhoto from '../../images/網站照片/首頁/Cover_photos/cover_photo_test_2.jpg';
import Colbert from '../../images/網站照片/成員照片/Colbert_2.jpg';
import Annie from '../../images/網站照片/成員照片/Annie.jpg';
import Linda from '../../images/網站照片/成員照片/Linda_2.jpg';
import Ollie from '../../images/網站照片/成員照片/Ollie.jpg';
import Cathy from '../../images/網站照片/成員照片/Cathy.jpg';
import Oscar from '../../images/網站照片/成員照片/Oscar_2.jpg';
import Reyna from '../../images/網站照片/成員照片/Reyna_2.jpg';
import Tracy from '../../images/網站照片/成員照片/Tracy_2.jpg';
import Steve from '../../images/網站照片/成員照片/Steve_2.jpg';
import Yang from '../../images/網站照片/成員照片/Yang_3.jpg';
import Terry from '../../images/網站照片/成員照片/Terry_2.jpg';
import './Members.css';
function Members() {
    return (
        <>
            <BackgroundImage text={"成員介紹"} image={coverPhoto}/>
            <div className="member-outer">
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Colbert} className="avatar"/>
                        <p className="member-name">Bernard (曾柏誠)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>讓這世界， 比你初次相遇時更加美好</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Colbert 是香港中文大學法律系台灣畢業生，
                            擔任VED的核心成員。在台灣出生及成長，
                            大學留港期間曾於數間國際律師事務所實習，
                            並擔任過留港臺灣學生會外務副會長。
                            在服務教育領域，Colbert 曾任香港中文大學雨後彩虹服務教育團團長
                            ，亦曾多次組織及領導校內大型服務教育計畫。因深感於自身透過教育而翻轉社會階層的經歷，
                            Colbert對於服務教育懷抱著堅定的信念與熱情，他相信教育的價值不僅只於傳授，
                            而在鼓舞和喚醒。Colbert 對調適外在環境、學校、以及與政府單位交涉協商有充足的經驗，
                            曾多次代表VED對外公開發言，Colbert 豐富的社會服務與領導組織經驗，
                            使他獲得伍宜孫書院年度最優秀畢業生獎、年度學生領袖獎及校內外其他獎項的肯定。
                            Colbert 在VED中主要擔任組織領導與對外聯絡的角色。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Tracy} className="avatar"/>
                        <p className="member-name">Tracy (黃莉娟)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>我快樂，因為我們快樂</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Tracy 現為香港中文大學護理學系本科生。中四那年暑假，她第一次到柬埔寨，一些年僅六、七歲的小孩在街上兜售紀念品的畫面讓她尤為深刻。後來得知，當地很多小孩都因家庭經濟困難被迫放棄學習機會，而公眾亦沒有意識到教育對培養下一代的重要性。旅程後，她一直思考應如何幫助這些孩子，
                            亦開始留意香港和其他地區弱勢社群所面臨的問題，燃點起對志願服務的熱誠。</p>
                        <p>在大學期間，除策劃本地社區服務，她亦積極參與各種服務學習計劃，足跡遍佈柬埔寨、泰國、四川、斯里蘭卡及雲南，其中當地人面對生活逆境仍時刻面帶笑容的真摯情感深深烙印在她心中。從參與者到擔任團長，當中的角色轉換使她學會如何組織、實行和帶領整個團隊一起完成服務。VED讓她重返柬埔寨，回應六年前的想法，並希望將初衷和理念延續下去。Tracy經歷多次志願服務的洗禮，對於服務學習與教學編寫有獨特的想法。
                            她深信教育能為人帶來正面的影響，望能貢獻一己之力實踐教育的力量。她在VED中主要擔任教學設計與行政業務工作。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Steve} className="avatar"/>
                        <p className="member-name">Steve (黃偉傑)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>一切，都來自於大家的笑容</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Steve，香港中文大學工商管理學系畢業，
                           台灣人。就讀於商學院，同時對教育充滿熱誠。
                           認為生命能影響生命，而教育為一切的起點。
                           此外，獲得充足的教育資源為每一個小孩應有的權利。
                           在過去幾年中，參與多次社會服務計畫，
                           足跡踏遍柬埔寨金邊、暹粒以及中國四川，
                           擁有多次設計服務活動、參與服務的經驗。
                           在2019年VED中，擔任三位草創者之一，負責柬埔寨聯絡事宜，
                           以及英文、地理、體育課程設計。期望在柬埔寨小學中帶入不同的教育元素，
                           並透過多元的課程內容還有遊戲，激起小孩的學習動機，帶來長遠影響。
                           在舉辦完2019的VED計畫後，為了帶來更多影響力，深知長遠計畫的重要，
                           於是決定加入VED組織的創立。日後他將會繼續於VED中盡一份心力，並主要負責市場營銷還有組織財務管理。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Linda} className="avatar"/>
                        <p className="member-name">Linda (郭揚玲)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>讓愛成為我們的共同語言</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Linda是香港中文大學中醫學系學生，香港人，擔任VED 核心成員。對教學有熱忱，深信知識能改變命運。對社會服務不留餘力，有豐富的服務經驗，包括籌備長者服務、推動社區共融計劃及參與動物保護項目。在2019的VED當中，主要負責藝術和音樂課程。深信生動有趣的教學較傳統教學方法優勝，善於為課程注入創意，例如以遊戲傳遞公共衛生的知識，以音樂和舞蹈教授英語。她個性樂觀開朗，關懷別人，深受小朋友和老師喜愛。且與當地大學生建立深厚的友誼，為日後對外工作打好基礎。
                            過去三年，她在籌備活動中發揮領導才能,曾獲東區十大傑出青年及校外其他獎項的肯定。在VED中主要擔任項目執行與對外聯絡的角色。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Oscar} className="avatar"/>
                        <p className="member-name">Oscar (余卓文)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>希望因為我，世界能有一點點的不一樣</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Oscar，香港中文大學酒店及房地產學系大一學生並擔任VED 核心成員。自小接受香港填鴨式教育，認為香港的教育缺乏創意，因而想在教育上出一分微力。且熱衷於服務社會，曾參加和主導過數項活動，包括輔導新來港學童、推廣公民教育等。在2019年的VED活動中，主要負責規劃地理科的課程大綱和教材。主張使用問與答，認為通過激發思考，學生更能吸取知識。個性活潑外向，樂於結交朋友，因此和不少柬埔寨大學生已是朋友，關係緊密融洽，
                            合作無間。在過往曾統籌各樣大大小小的活動，為社會工作貢獻了大量時間，並且在中學統籌的活動均獲得了正面評價。在VED活動中，主要負責教材編制的工作。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Yang} className="avatar"/>
                        <p className="member-name">Yang</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>教育能傳遞希望</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Yang 是來自汶萊的國際生，同時間也在香港中文大學主修分子生物學。
                            目前，Yang 主要負責VED組織的市場營銷和財務規劃。在加入VED之前，
                            Yang 於第十屆 Asian Junior Wushu Championships 擔任 Liaison officer。
                            在更早之前，Yang 參加汶萊當地科學推廣營隊，目標是鼓勵小學生參與科學、對科學產生興趣。在2019年的VED@Siem Reap 計畫中，他規劃整體的科學計畫。他堅信讓學習過程更有趣可以激起學生學行興致，更能讓學生透過操作了解艱深的理論知識。在VED的未來之路上，Yang 期望帶入更新穎的教學方法以拓展學生的視野！ </p>
                    </div>
                    <hr className="member-hr"/>
                     
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Terry} className="avatar"/>
                        <p className="member-name">Terry (陳仲恩)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>奉獻出自己，讓社會更溫暖</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Terry是香港中文大學心理系的大三生，台灣人。從以前一直對志願服務有深厚的興趣，並對教育充滿熱忱，認為有能力即要回饋社會。
                            高中時曾經擔任總召，帶領班上同學到安得烈食物銀行擔任志工，協助整理和募集食物，維護清寒家庭兒童的食物權；大一的暑假到俄羅斯擔任國際志工，
                            在偏遠地區從事英文義教，在這趟旅程中體會到了服務教育的重要性，也種下了服務教育的種子。
                            在課外活動方面，Terry在大學期間曾擔任留港臺灣學生會的活動總監和崇基國際學生會的活動副會長，在組織活動和領導管理上有豐富的經驗。
                            目前在VED擔任核心成員，
                            主要負責規劃課程大綱和教材編制的工作，並負責VED組織的影片剪輯和網站製作。希望能為VED注入新的能量，並在未來持續為服務教育而努力。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Reyna} className="avatar"/>
                        <p className="member-name">Reyna (高士婷)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>成為一個能帶來美好的人。</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Reyna曾經在香港中文大學就讀環球經濟一年，目前轉學回臺灣大學財金系大一。
                            她始終相信，要做個能帶給身邊美好的人，也相信生命最重要的是能不斷傳遞下去的愛和影響力，
                            而教育即是其中不可或缺的推進力。Reyna曾經到尼泊爾的同一個服務據點擔任志工兩次，
                            被超越語言、文化和年齡的交流和連結所感動，尼泊爾的服務經驗不只讓她發現愛的力量，
                            也使她發覺自己對於服務一心一意付出的熱情。Reyna在回來後也曾和高中同學在學校創辦Y.W.C志工團
                            ，擔任第一屆活動長，每年在嘉義偏鄉學校辦夏日營隊。她相信世界很大，但是剛剛好能容納每一個特別的靈魂去探索
                            、發現屬於自己的位子，而她希望透過服務教育不只能找尋自己的定位、
                            也能透過教育將世界帶入教室，陪伴著小朋友們看見更開闊的可能性。加入VED之後，被團隊的凝聚力所吸引，覺得和一群志同道合的朋友一同開創、走過波瀾起伏是件令她享受的事情。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Annie} className="avatar"/>
                        <p className="member-name">Annie（陳暄穎)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>透過故事，用生命感動生命</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>Annie是國立台灣大學生物產業傳播暨發展學系學生，台灣人，在VED團隊中負責對外關係與行政相關事務。她對教學有滿滿熱忱，深信服務教育能夠透過故事，用生命感動生命。

                        </p>
                        <p>
                        在2020的VED當中，Annie主要負責全人教育課程。透過有趣的團康與信任活動，告訴小朋友團隊合作與人際關係的重要性。她深信生動有趣的教學內容與親身經歷的故事，更能讓孩子們從中獲得啟發。Annie的個性活潑外向、樂觀開朗，樂於且善於與人相處，除了帶動團隊氣氛，也深受小朋友們喜愛。
                        </p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Cathy} className="avatar"/>
                        <p className="member-name">Cathy (胡凱婷)</p>
                    </div>
                    <div className="member-quote">
                        <i class="fas fa-quote-left"></i><p>教育的最終目標就是讓智慧廣泛散布於世</p><i class="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                       <p>Cathy現讀台灣的國立政治大學法律系。在高中的時候喜歡上外語，
                           除了努力學習，也積極參加各種國際交流和體驗，這些年Cathy造訪日本、
                           美國、紐西蘭、韓國等發達國家研討知識，這種與世界的人群接軌的感覺深深地吸引著她。</p>
                        <p>直到大學開始有自己籌辦國內活動和服務學習的經驗，Cathy才開始注意到自己過去太過專注於先進世界發生著什麼，而遺忘地球的某些角落，
                            其實有一群截然不同的孩子們正處於偏鄉角落，他們一輩子幾乎沒有踏出村落外的世界，也無緣與國際接軌。
                            她希望將服務學習的精神與自己喜歡的國際體驗結合，並將自己的所學教授給每一個懷抱偉大夢想的孩子，
                            同時間她也發現教育潛藏極大的力量，即使是老師的一句話也可能徹底改變孩子的未來。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
                <div className="member-container">
                    <div className="member-avatar">
                        <img src={Ollie} className="avatar"/>
                        <p className="member-name">Ollie （郭庭芯)</p>
                    </div>
                    <div className="member-quote">
                        <i className="fas fa-quote-left"></i><p>你值得被愛，不論你是什麼樣子。</p><i className="fas fa-quote-right"></i>
                    </div>
                    <div className="member-intro">
                        <p>社會的價值或者家庭、學校的教導漸漸讓孩子們覺得「我不夠好，就不值得被愛」。
                            然而，每一個孩子，都有其獨一無二的價值。你的價值，不是定義在做得好或不好。
                            你值得被愛，只是因為你就是你。
                            Ollie，台灣文藻外語大學外語教學系學生，求學階段有感於台灣填鴨式教育和「成績至上」的考試制度無法讓孩子真正認識自己或者發掘自己想走的路，因此想看見並且走出不一樣教育的視角。她決定就讀教育相關系所，並且參與多次社會服務和偏鄉教學行動。包括醫療志工、泰北華語服務教育、以及台灣在地多所偏鄉國中小的教書，也曾任教於美語補習班的全英授課老師。經驗的累積讓她能夠洞察孩子的狀況和情緒，關懷孩子的感受、
                            傾聽孩子的想法，明白教育本身不僅志在教書還有教人。相信教育是改變和塑造的力量，也希望看見改變生命的軌跡。</p>
                    </div>
                    <hr className="member-hr"/>
                </div>
            </div>
        </>
        
    )
}

export default Members;
