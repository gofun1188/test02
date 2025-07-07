// 課程資料
const courseData = {
    dance: {
        title: "舞蹈課程",
        subtitle: "釋放身體的韻律與美感",
        image: "mis/舞蹈.jpg",
        description: `
            <h4>🎵 課程特色與理念</h4>
            <p style="margin-bottom: 20px;">我們的舞蹈課程以「身心合一」為核心理念，結合現代舞蹈技巧與傳統美學，幫助學員在韻律中找到自信與美感。專業的舞蹈工作室提供最佳的學習環境。</p>
            
            <h4>💃 專業教學內容</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎功訓練：</strong>柔軟度、協調性、節奏感培養</li>
                <li><strong>多元舞風：</strong>現代舞、爵士舞、芭蕾基訓、流行舞蹈</li>
                <li><strong>體態雕塑：</strong>改善姿態、增強肌力、提升氣質</li>
                <li><strong>舞台表演：</strong>表情訓練、舞台魅力、自信展現</li>
            </ul>
            
            <h4>🏆 適合學習對象</h4>
            <p>適合所有年齡層與程度的學員，無論您是完全初學者，或是希望精進技巧的舞者。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    crystal: {
    title: "手作水晶",
    subtitle: "療癒身心靈的能量創作",
    image: "mis/手作水晶.png",
    description: `
        <h4>💎 療癒身心靈的能量創作</h4>
        <p style="margin-bottom: 20px;">手作水晶不只是單純做飾品，更是療癒自己、提升能量的深度過程。在創作中學會穩定情緒，建立個人風格，同時一步步打造屬於自己的第二收入來源。</p>
        
        <h4>✨ 課程核心理念</h4>
        <ul style="margin-bottom: 20px; padding-left: 20px;">
            <li><strong>氣場穩定：</strong>透過水晶能量調整個人氣場，改善整體狀態</li>
            <li><strong>情緒療癒：</strong>在創作過程中釋放壓力，找回內在平衡</li>
            <li><strong>風格建立：</strong>發展獨特的設計美感與個人品牌</li>
            <li><strong>興趣變現：</strong>將熱愛轉化為實際收入，創造美好生活</li>
        </ul>
        
        <h4>🔮 專業學習內容</h4>
        <ul style="margin-bottom: 20px; padding-left: 20px;">
            <li><strong>水晶能量學：</strong>認識各種水晶特性與能量屬性</li>
            <li><strong>設計美學：</strong>色彩搭配、造型設計、比例美感</li>
            <li><strong>製作技法：</strong>串珠、編織、金屬加工技巧</li>
            <li><strong>商業經營：</strong>品牌定位、定價策略、行銷技巧</li>
        </ul>
        
        <h4>💰 創業發展機會</h4>
        <p style="margin-bottom: 20px;">從興趣到專業，從愛好到事業。課程涵蓋完整的商業化流程，幫助學員建立穩定的第二收入來源。</p>
        
        <div style="background: linear-gradient(135deg, #E8F6F3 0%, #F4E7FD 100%); padding: 20px; border-radius: 15px; margin-bottom: 20px; border-left: 4px solid #FFB2AF;">
            <h4 style="color: #6B4C7A; margin-bottom: 10px;">🌟 學習效益</h4>
            <p style="color: #666; margin-bottom: 8px;">✔️ 氣場穩了，狀態也不一樣</p>
            <p style="color: #666; margin-bottom: 8px;">✔️ 作品有溫度，也有價值</p>
            <p style="color: #666; margin-bottom: 0;">✔️ 興趣變現不是夢，從這裡開始</p>
        </div>
        
        <h4>👥 適合學習對象</h4>
        <p>適合想要透過手作療癒身心、提升生活品質，並希望發展第二收入的朋友。無論是初學者或有經驗者，都能在課程中找到屬於自己的創作方向。</p>
    `,
    lineUrl: "https://line.me/ti/p/awGrSsNQQt"
},
    family_dance: {
        title: "親子舞蹈",
        subtitle: "增進親子關係的美好時光",
        image: "mis/親子舞蹈.jpg",
        description: `
            <h4>👨‍👩‍👧‍👦 親子互動的美好時光</h4>
            <p style="margin-bottom: 20px;">親子舞蹈課程讓家長與孩子在音樂中共同學習，透過肢體律動增進親子感情，同時培養孩子的協調性、節奏感與表達能力。</p>
            
            <h4>🎶 課程內容設計</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>親子互動舞蹈：</strong>簡單易學的親子舞步</li>
                <li><strong>音樂感知：</strong>培養孩子的音樂節拍感</li>
                <li><strong>肢體協調：</strong>提升大小肌肉發展</li>
                <li><strong>創意表達：</strong>鼓勵自由創作與表達</li>
            </ul>
            
            <h4>💕 學習效益</h4>
            <p>增強親子關係、提升孩子自信心、培養藝術美感，創造珍貴的親子回憶。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    yoga: {
        title: "瑜珈課程",
        subtitle: "身心靈平衡的修練",
        image: "mis/瑜珈.jpg",
        description: `
            <h4>🧘‍♀️ 古老智慧的現代實踐</h4>
            <p style="margin-bottom: 20px;">瑜珈是來自古印度的身心靈修練法，我們的專業瑜珈老師將引導您透過體位法、呼吸法與冥想，達到身心平衡的和諧狀態。</p>
            
            <h4>🕉️ 專業課程內容</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎體位法：</strong>正確姿勢與安全練習</li>
                <li><strong>呼吸調息：</strong>各種呼吸法技巧</li>
                <li><strong>冥想練習：</strong>心靈靜定與專注訓練</li>
                <li><strong>柔軟度提升：</strong>漸進式伸展練習</li>
            </ul>
            
            <h4>💆‍♀️ 身心效益</h4>
            <p>改善姿態、增強柔軟度、釋放壓力、提升專注力、促進身心健康。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    tea: {
        title: "茶道文化",
        subtitle: "品味東方雅韻與禪意生活",
        image: "mis/茶道.jpg",
        description: `
            <h4>🍃 千年茶文化的傳承</h4>
            <p style="margin-bottom: 20px;">茶道是東方文化的精髓，蘊含深厚的哲學思想與生活美學。資深茶藝師親自指導，全方位體驗茶文化的博大精深。</p>
            
            <h4>🫖 專業茶藝技能</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>茶葉學問：</strong>六大茶類、產地特色、品質鑑別</li>
                <li><strong>茶具認識：</strong>紫砂壺、瓷器、茶具保養</li>
                <li><strong>泡茶技藝：</strong>水溫控制、投茶量、浸泡時間</li>
                <li><strong>茶道禮儀：</strong>待客之道、品茶禮節</li>
            </ul>
            
            <h4>🌙 禪意生活實踐</h4>
            <p>在茶香中學習放慢腳步、專注當下、品味生活的美好。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    soap: {
        title: "手工皂製作",
        subtitle: "創造天然美好的生活品質",
        image: "mis/手工香皂.jpg",
        description: `
            <h4>🧼 天然手作的美好理念</h4>
            <p style="margin-bottom: 20px;">推廣天然手工皂製作，讓每個人都能擁有純淨無負擔的清潔用品。從原料選擇到製作技巧，每一步都充滿對天然生活的堅持。</p>
            
            <h4>🌿 專業製皂技術</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎理論：</strong>皂化反應原理、油脂特性分析</li>
                <li><strong>配方設計：</strong>油品搭配、添加物選擇</li>
                <li><strong>製作技法：</strong>冷製法、熱製法、分層技巧</li>
                <li><strong>天然添加：</strong>精油調香、天然色素</li>
            </ul>
            
            <h4>🏪 創業發展機會</h4>
            <p>課程涵蓋成本計算與產品開發，適合有意從事手工皂事業的學員。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    candle: {
        title: "香氛蠟燭製作",
        subtitle: "點亮生活的溫馨香氛",
        image: "mis/香氛蠟燭.jpeg",
        description: `
            <h4>🕯️ 香氛與光影的美好結合</h4>
            <p style="margin-bottom: 20px;">學習製作天然香氛蠟燭，調配獨特香味，為生活增添溫馨氛圍。每一支蠟燭都是獨一無二的藝術品。</p>
            
            <h4>🌺 專業製作技術</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>蠟材選擇：</strong>天然蠟材特性與應用</li>
                <li><strong>香氛調配：</strong>精油調和、香味層次</li>
                <li><strong>製作技法：</strong>倒蠟技巧、造型設計</li>
                <li><strong>裝飾美化：</strong>乾燥花、色彩搭配</li>
            </ul>
            
            <h4>🎁 生活應用</h4>
            <p>適合居家使用或作為精美禮品，也可發展為手作事業。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    coffee: {
        title: "手沖咖啡",
        subtitle: "品味生活的咖啡藝術",
        image: "mis/手沖咖啡.jpg",
        description: `
            <h4>☕ 精品咖啡的純粹美味</h4>
            <p style="margin-bottom: 20px;">學習專業手沖技巧，從咖啡豆選擇到萃取技術，享受咖啡的純粹美味。每一杯都是精心調製的藝術品。</p>
            
            <h4>🫘 專業咖啡技能</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>咖啡知識：</strong>豆種認識、烘焙程度、風味輪</li>
                <li><strong>器具使用：</strong>各式手沖器具、磨豆機</li>
                <li><strong>沖煮技巧：</strong>水溫控制、注水技法</li>
                <li><strong>品味訓練：</strong>杯測技巧、風味辨識</li>
            </ul>
            
            <h4>🎯 學習目標</h4>
            <p>掌握精品咖啡的沖煮技術，提升生活品味，享受咖啡文化。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    baking: {
        title: "烘焙課程",
        subtitle: "用心製作的甜蜜時光",
        image: "mis/烘焙.jpg",
        description: `
            <h4>🧁 溫暖療癒的手作時光</h4>
            <p style="margin-bottom: 20px;">從基礎麵包到精緻甜點，學習專業烘焙技術。在溫暖的烘焙香氣中，享受手作的療癒時光。</p>
            
            <h4>🍰 專業烘焙技能</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎技法：</strong>麵團製作、發酵技巧</li>
                <li><strong>麵包類：</strong>吐司、餐包、歐式麵包</li>
                <li><strong>甜點類：</strong>蛋糕、餅乾、塔類</li>
                <li><strong>裝飾技巧：</strong>奶油裱花、糖霜裝飾</li>
            </ul>
            
            <h4>❤️ 學習效益</h4>
            <p>掌握烘焙技術、享受創作樂趣、分享美味給親友，也可發展為事業。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    organizer: {
        title: "收納整理師",
        subtitle: "打造有序美好的生活空間",
        image: "mis/收納師.jpg",
        description: `
            <h4>🏠 專業整理顧問養成</h4>
            <p style="margin-bottom: 20px;">培訓課程結合日式整理哲學與現代空間美學，培養專業的生活整理顧問。從個人居家到商業空間，具備全方位整理能力。</p>
            
            <h4>📦 核心專業技能</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>空間分析：</strong>動線規劃、收納評估</li>
                <li><strong>分類原則：</strong>物品分類法、去留判斷</li>
                <li><strong>收納技巧：</strong>收納用品選擇、空間利用</li>
                <li><strong>客戶服務：</strong>諮詢技巧、心理輔導</li>
            </ul>
            
            <h4>💼 職業發展</h4>
            <p>獲得專業整理師認證，可從事居家整理、辦公室整理等專業服務。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    housekeeping: {
        title: "家政班",
        subtitle: "提升居家生活技能",
        image: "mis/家政班.jpg",
        description: `
            <h4>🏡 實用的居家生活技能</h4>
            <p style="margin-bottom: 20px;">學習實用的居家技能，包括清潔技巧、收納方法、家務管理等生活智慧，提升居家生活品質。</p>
            
            <h4>🧹 課程學習內容</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>清潔技巧：</strong>各種材質的清潔方法</li>
                <li><strong>收納方法：</strong>有效的收納系統建立</li>
                <li><strong>家務管理：</strong>時間規劃、效率提升</li>
                <li><strong>生活妙招：</strong>實用的居家小技巧</li>
            </ul>
            
            <h4>✨ 學習效益</h4>
            <p>提升居家生活品質、節省家務時間、創造舒適的生活環境。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    sewing: {
        title: "縫紉課程",
        subtitle: "手作服飾的精緻工藝",
        image: "mis/縫紉.jpg",
        description: `
            <h4>✂️ 傳統手工藝的現代傳承</h4>
            <p style="margin-bottom: 20px;">從基礎針法到進階裁縫，學習服裝製作技術。在縫紉機的韻律聲中，創造獨一無二的手作服飾。</p>
            
            <h4>🧵 專業縫紉技能</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎技能：</strong>手縫針法、縫紉機操作</li>
                <li><strong>版型製作：</strong>量身、打版、修改技巧</li>
                <li><strong>服裝製作：</strong>上衣、褲裝、裙裝製作</li>
                <li><strong>細節工藝：</strong>拉鍊、鈕扣、滾邊技巧</li>
            </ul>
            
            <h4>👗 創作樂趣</h4>
            <p>製作專屬服飾、修改衣物、發揮創意設計，享受手作的成就感。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    knitting: {
        title: "編織課程",
        subtitle: "溫暖心靈的手作藝術",
        image: "mis/編織.jpg",
        description: `
            <h4>🧶 溫暖的手作時光</h4>
            <p style="margin-bottom: 20px;">學習各種編織技法，從圍巾到毛衣，創作溫暖實用的編織作品。在一針一線中感受手作的療癒力量。</p>
            
            <h4>🪡 編織技能學習</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎針法：</strong>起針、平針、反針技巧</li>
                <li><strong>進階技法：</strong>花樣編織、配色技巧</li>
                <li><strong>作品製作：</strong>圍巾、帽子、毛衣編織</li>
                <li><strong>修復技巧：</strong>毛衣修補、改造技巧</li>
            </ul>
            
            <h4>💝 溫暖分享</h4>
            <p>創作溫暖的手作禮品，與親友分享手作的溫度與心意。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    floriculture: {
        title: "花藝設計",
        subtitle: "創造自然美感的藝術",
        image: "mis/花藝.jpg",
        description: `
            <h4>🌸 自然美學的藝術表現</h4>
            <p style="margin-bottom: 20px;">學習花材搭配與設計技巧，創作美麗的花藝作品。在花香中感受自然的美好，為生活增添色彩。</p>
            
            <h4>🌹 專業花藝技能</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>花材認識：</strong>各種花材特性、保養方法</li>
                <li><strong>設計原理：</strong>色彩搭配、比例美學</li>
                <li><strong>技法應用：</strong>花束、花籃、桌花設計</li>
                <li><strong>特殊場合：</strong>婚禮花藝、節慶布置</li>
            </ul>
            
            <h4>🏡 生活應用</h4>
            <p>美化居家環境、製作特殊場合花藝，也可發展為專業花藝師。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    gardening: {
        title: "園藝栽培",
        subtitle: "與大自然共生的綠色生活",
        image: "mis/園藝.png",
        description: `
            <h4>🌱 綠色生活的療癒力量</h4>
            <p style="margin-bottom: 20px;">學習植物栽培技術，從室內盆栽到戶外園藝。在與植物的互動中，享受與大自然共生的療癒時光。</p>
            
            <h4>🪴 園藝專業知識</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>植物基礎：</strong>植物生理、土壤知識</li>
                <li><strong>栽培技術：</strong>播種、扦插、嫁接技巧</li>
                <li><strong>照護管理：</strong>澆水、施肥、病蟲害防治</li>
                <li><strong>空間設計：</strong>庭園規劃、室內綠化</li>
            </ul>
            
            <h4>🌿 生活效益</h4>
            <p>創造綠色生活空間、享受栽培樂趣、改善居住環境品質。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
    oil_painting: {
        title: "油畫藝術",
        subtitle: "經典繪畫的藝術表達",
        image: "mis/油畫.jpg",
        description: `
            <h4>🎨 經典藝術的永恆魅力</h4>
            <p style="margin-bottom: 20px;">學習油畫技法與色彩運用，從基礎到進階，培養個人藝術風格。在畫筆與顏料的交融中，創造藝術作品。</p>
            
            <h4>🖌️ 油畫技能學習</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎技法：</strong>素描基礎、色彩理論</li>
                <li><strong>材料運用：</strong>畫筆、顏料、畫布選擇</li>
                <li><strong>繪畫技巧：</strong>厚塗法、薄塗法、混色技巧</li>
                <li><strong>創作實踐：</strong>靜物、風景、人物繪畫</li>
            </ul>
            
            <h4>🖼️ 藝術發展</h4>
            <p>培養藝術鑑賞能力、發展個人創作風格、參與藝術展覽活動。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },

    pottery: {
        title: "陶藝創作",
        subtitle: "土與火的藝術對話",
        image: "mis/陶藝.jpg",
        description: `
            <h4>🏺 古老工藝的現代創新</h4>
            <p style="margin-bottom: 20px;">學習陶藝技法，從拉坯到燒製，創作獨特的陶瓷作品。在泥土與雙手的接觸中，感受土與火的神奇魅力。</p>
            
            <h4>🎯 陶藝技能學習</h4>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
                <li><strong>基礎技法：</strong>揉土、拉坯、修坯技巧</li>
                <li><strong>造型設計：</strong>器型設計、裝飾技法</li>
                <li><strong>釉藥應用：</strong>上釉技巧、色彩效果</li>
                <li><strong>燒製過程：</strong>素燒、釉燒、溫度控制</li>
            </ul>
            
            <h4>🏮 藝術療癒</h4>
            <p>在創作中找到內心平靜、發揮創意潛能、製作實用藝術品。</p>
        `,
        lineUrl: "https://line.me/ti/p/UgDPsa4pFb"
    },
};

// 開啟模態框
function openModal(courseId) {
    const course = courseData[courseId];
    if (course) {
        document.getElementById('modalTitle').textContent = course.title;
        document.getElementById('modalSubtitle').textContent = course.subtitle;
        document.getElementById('modalImage').src = course.image;
        document.getElementById('modalDescription').innerHTML = course.description;
        document.getElementById('lineButton').href = course.lineUrl;
        document.getElementById('courseModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 關閉模態框
function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 點擊模態框外部關閉
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target == modal) {
        closeModal();
    }
}

// ESC鍵關閉模態框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// 課程卡片動畫延遲
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
});