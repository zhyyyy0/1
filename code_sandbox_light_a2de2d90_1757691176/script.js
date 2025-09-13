// ========== Y2K千禧年风格个人网站交互脚本 ==========

class Y2KPersonalSite {
    constructor() {
        this.currentLanguage = 'ko'; // 默认韩语
        this.galleryData = this.initGalleryData();
        this.init();
    }

    // 初始化
    init() {
        this.setupLanguageToggle();
        this.setupHobbyCards();
        this.setupProfileInteraction();
        this.setupAnimationTriggers();
        this.setupGalleryModal();
        this.setupCatEasterEgg();
        
        // 页面加载动画
        this.triggerLoadAnimation();
    }

    // ========== 画廊数据初始化 ==========
    initGalleryData() {
        return {
            travel: {
                ko: '여행 사진',
                en: 'Travel Photos',
                subcategories: {
                    thailand: {
                        ko: '태국',
                        en: 'Thailand',
                        items: [{ src: 'images/thailand_temple.jpg', title: 'Wat Arun Temple', title_ko: '와트 아룬 사원' }]
                    },
                    qinghai: {
                        ko: '칭하이',
                        en: 'Qinghai',
                        items: [{ src: 'images/qinghai_salt_lake.jpg', title: 'Chaka Salt Lake', title_ko: '차카 염호' }]
                    },
                    chongqing: {
                        ko: '충칭',
                        en: 'Chongqing',
                        items: [{ src: 'images/chongqing_travel.jpg', title: 'Night View of Hongya Cave', title_ko: '홍야동 야경' }]
                    },
                    xian: {
                        ko: '시안',
                        en: "Xi'an",
                        items: [{ src: 'images/xian_tower.jpg', title: 'Bell Tower', title_ko: '종루' }]
                    },
                    busan: {
                        ko: '부산',
                        en: 'Busan',
                        items: [{ src: 'images/busan_travel.jpg', title: 'Little Prince Statue', title_ko: '어린왕자 조각상' }]
                    }
                }
            },
            photography: {
                ko: '사진 작품',
                en: 'Photography Works',
                items: [
                    { src: 'images/portrait_nature1.jpg', title: 'Portrait in Nature', title_ko: '자연 속 인물' },
                    { src: 'images/portrait_nature2.jpg', title: 'Green Grass Portrait', title_ko: '초록 잔디 인물' },
                    { src: 'images/portrait_travel.jpg', title: 'Travel Portrait', title_ko: '여행 인물' },
                    { src: 'images/qinghai_grassland.jpg', title: 'Qinghai Grassland', title_ko: '칭하이 초원' },
                    { src: 'images/busan_beach.jpg', title: 'Beach Landscape', title_ko: '해변 풍경' },
                    { src: 'images/qinghai_landscape.jpg', title: 'Mountain Landscape', title_ko: '산악 풍경' }
                ]
            },
            design: {
                ko: '디자인 작품',
                en: 'Design Works',
                subcategories: {
                    screenPrint: {
                        ko: '실크스크린 인쇄',
                        en: 'Silk Screen Printing',
                        items: [
                            { src: 'images/experimental_art1.jpg', title: 'Experimental Print 1', title_ko: '실험적 인쇄 1' },
                            { src: 'images/experimental_art2.jpg', title: 'Experimental Print 2', title_ko: '실험적 인쇄 2' },
                            { src: 'images/screen_print_process.jpg', title: 'Printing Process', title_ko: '인쇄 과정' },
                            { src: 'images/screen_print1.jpg', title: 'Print Work', title_ko: '인쇄 작품' }
                        ]
                    },
                    uiDesign: {
                        ko: 'UI 디자인',
                        en: 'UI Design',
                        items: [
                            { src: 'images/ui_design.jpg', title: 'Mobile App Interface', title_ko: '모바일 앱 인터페이스' }
                        ]
                    },
                    culturalHeritage: {
                        ko: '비물질문화유산 연구',
                        en: 'Intangible Cultural Heritage Research',
                        items: [
                            { src: 'images/design_poster.jpg', title: 'Heritage Research Poster', title_ko: '문화유산 연구 포스터' }
                        ]
                    }
                }
            },
            dramas: {
                ko: '좋아하는 드라마',
                en: 'Favorite TV Dramas',
                items: [
                    {
                        country: '🇰🇷 Korean',
                        title: '미생',
                        title_en: 'Misaeng',
                        description_ko: '한국 드라마 중 가장 좋아하는 작품',
                        description_en: 'My favorite Korean drama'
                    },
                    {
                        country: '🇺🇸 American',
                        title: 'Breaking Bad',
                        title_en: 'Breaking Bad',
                        description_ko: '미국 드라마 중 가장 좋아하는 작품',
                        description_en: 'My favorite American drama'
                    },
                    {
                        country: '🇬🇧 British',
                        title: 'Harlots',
                        title_en: 'Harlots',
                        description_ko: '영국 드라마 중 가장 좋아하는 작품',
                        description_en: 'My favorite British drama'
                    }
                ]
            }
        };
    }

    // ========== 语言切换功能 ==========
    setupLanguageToggle() {
        const langBtn = document.getElementById('langBtn');
        const langText = langBtn.querySelector('.lang-text');

        langBtn.addEventListener('click', () => {
            this.toggleLanguage();
            
            // 按钮动画效果
            langBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                langBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ko' ? 'en' : 'ko';
        const langText = document.querySelector('.lang-text');
        
        // 更新按钮文本
        langText.textContent = this.currentLanguage === 'ko' ? 'EN' : 'KO';
        
        // 更新页面内容
        this.updatePageContent();
        
        // 添加切换动画
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 200);
    }

    updatePageContent() {
        const elements = document.querySelectorAll('[data-ko][data-en]');
        
        elements.forEach(element => {
            const koText = element.getAttribute('data-ko');
            const enText = element.getAttribute('data-en');
            
            if (this.currentLanguage === 'ko') {
                if (element.tagName === 'P' && koText.includes('<br>')) {
                    element.innerHTML = koText;
                } else {
                    element.textContent = koText;
                }
            } else {
                if (element.tagName === 'P' && enText.includes('<br>')) {
                    element.innerHTML = enText;
                } else {
                    element.textContent = enText;
                }
            }
        });

        // 更新HTML语言属性
        document.documentElement.lang = this.currentLanguage;
    }

    // ========== 兴趣爱好卡片交互 ==========
    setupHobbyCards() {
        const hobbyCards = document.querySelectorAll('.hobby-card');
        
        hobbyCards.forEach(card => {
            // 悬停效果增强
            card.addEventListener('mouseenter', () => {
                this.addCardHoverEffect(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.removeCardHoverEffect(card);
            });
            
            // 点击打开画廊
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                this.openGallery(category);
            });
        });
    }

    addCardHoverEffect(card) {
        const icon = card.querySelector('.hobby-icon');
        icon.style.animation = 'bounce 0.6s ease-in-out';
        
        // 添加粒子效果
        this.createParticles(card);
    }

    removeCardHoverEffect(card) {
        const icon = card.querySelector('.hobby-icon');
        setTimeout(() => {
            icon.style.animation = 'bounce 2s infinite';
        }, 600);
    }

    createParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#FF6B9D', '#00F5FF', '#FFE135', '#B967DB', '#05FFA6'];
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
            particle.style.left = rect.left + Math.random() * rect.width + 'px';
            particle.style.top = rect.top + Math.random() * rect.height + 'px';
            
            document.body.appendChild(particle);
            
            // Y2K风格动画
            particle.animate([
                { transform: 'translateY(0px) scale(1) rotate(0deg)', opacity: 1 },
                { transform: 'translateY(-40px) scale(1.2) rotate(180deg)', opacity: 0 }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }

    // ========== 头像交互 ==========
    setupProfileInteraction() {
        const profileImg = document.getElementById('profileImg');
        let clickCount = 0;
        
        profileImg.addEventListener('click', () => {
            clickCount++;
            
            if (clickCount === 1) {
                // 第一次点击：Y2K旋转效果
                profileImg.style.animation = 'y2kSpin 1s ease-in-out';
            } else if (clickCount === 3) {
                // 三次点击：数码雨效果
                this.triggerDigitalRain();
                clickCount = 0;
            }
            
            setTimeout(() => {
                profileImg.style.animation = '';
            }, 1000);
        });
    }

    triggerDigitalRain() {
        // 创建Y2K数码雨效果
        const profileContainer = document.querySelector('.profile-image-container');
        profileContainer.style.animation = 'digitalGlow 2s ease-in-out';
        
        // 创建像素雨效果
        this.createPixelRain();
        
        setTimeout(() => {
            profileContainer.style.animation = '';
        }, 2000);
    }

    createPixelRain() {
        const pixels = ['▓', '▒', '░', '█', '■', '□', '▲', '●'];
        const colors = ['#FF6B9D', '#00F5FF', '#FFE135', '#B967DB', '#05FFA6'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const pixel = document.createElement('div');
                pixel.innerHTML = pixels[Math.floor(Math.random() * pixels.length)];
                pixel.style.position = 'fixed';
                pixel.style.left = Math.random() * window.innerWidth + 'px';
                pixel.style.top = '-20px';
                pixel.style.fontSize = Math.random() * 20 + 15 + 'px';
                pixel.style.pointerEvents = 'none';
                pixel.style.zIndex = '1000';
                pixel.style.color = colors[Math.floor(Math.random() * colors.length)];
                pixel.style.textShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
                
                document.body.appendChild(pixel);
                
                pixel.animate([
                    { transform: 'translateY(-20px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 20}px) rotate(720deg)`, opacity: 0 }
                ], {
                    duration: 3000,
                    easing: 'linear'
                }).onfinish = () => pixel.remove();
            }, i * 100);
        }
    }

    // ========== 猫咪彩蛋功能 ==========
    setupCatEasterEgg() {
        const catName = document.getElementById('catName');
        const catModal = document.getElementById('catModal');
        
        catName.addEventListener('click', () => {
            this.showCatModal();
        });
        
        catModal.addEventListener('click', () => {
            this.hideCatModal();
        });
        
        // ESC键关闭猫咪模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && catModal.style.display === 'flex') {
                this.hideCatModal();
            }
        });
    }

    showCatModal() {
        const catModal = document.getElementById('catModal');
        const catCaption = catModal.querySelector('.cat-caption');
        
        // 更新文本
        const koText = catCaption.getAttribute('data-ko');
        const enText = catCaption.getAttribute('data-en');
        catCaption.textContent = this.currentLanguage === 'ko' ? koText : enText;
        
        // 显示模态框
        catModal.style.display = 'flex';
        catModal.animate([
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
        
        // 创建Y2K猫爪印效果
        this.createY2KPawPrints();
    }

    hideCatModal() {
        const catModal = document.getElementById('catModal');
        
        catModal.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.8)' }
        ], {
            duration: 200,
            easing: 'ease-in'
        }).onfinish = () => {
            catModal.style.display = 'none';
        };
    }

    createY2KPawPrints() {
        const pawEmojis = ['🐾', '🐱', '😺', '😸', '💖', '✨'];
        const colors = ['#FF6B9D', '#00F5FF', '#FFE135', '#B967DB'];
        
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const paw = document.createElement('div');
                paw.innerHTML = pawEmojis[Math.floor(Math.random() * pawEmojis.length)];
                paw.style.position = 'fixed';
                paw.style.left = Math.random() * window.innerWidth + 'px';
                paw.style.top = Math.random() * window.innerHeight + 'px';
                paw.style.fontSize = '2rem';
                paw.style.pointerEvents = 'none';
                paw.style.zIndex = '4000';
                paw.style.filter = `drop-shadow(0 0 10px ${colors[Math.floor(Math.random() * colors.length)]})`;
                
                document.body.appendChild(paw);
                
                paw.animate([
                    { transform: 'scale(0) rotate(0deg)', opacity: 1 },
                    { transform: 'scale(1.5) rotate(360deg)', opacity: 0.8 },
                    { transform: 'scale(0.8) rotate(720deg)', opacity: 0 }
                ], {
                    duration: 2500,
                    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }).onfinish = () => paw.remove();
            }, i * 200);
        }
    }

    // ========== 画廊模态框 ==========
    setupGalleryModal() {
        const modal = document.getElementById('galleryModal');
        const closeBtn = document.getElementById('galleryClose');
        
        closeBtn.addEventListener('click', () => {
            this.closeGallery();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeGallery();
            }
        });
        
        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                this.closeGallery();
            }
        });
    }

    openGallery(category) {
        const modal = document.getElementById('galleryModal');
        const title = document.getElementById('galleryTitle');
        const items = document.getElementById('galleryItems');
        
        const data = this.galleryData[category];
        if (!data) return;
        
        // 设置标题
        title.textContent = data[this.currentLanguage];
        
        // 清空并填充内容
        items.innerHTML = '';
        
        if (data.subcategories) {
            // 有子分类的情况（旅行和设计）
            this.displaySubcategories(data.subcategories, items);
        } else if (category === 'dramas') {
            // 剧集显示
            data.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'gallery-drama-item';
                itemDiv.innerHTML = `
                    <div class="drama-info">
                        <div class="drama-country">${item.country}</div>
                        <h4>${this.currentLanguage === 'ko' ? item.title : item.title_en}</h4>
                        <p>${item[`description_${this.currentLanguage}`]}</p>
                    </div>
                `;
                items.appendChild(itemDiv);
            });
        } else {
            // 摄影作品等直接显示
            data.items.forEach(item => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'gallery-img-item';
                const title = this.currentLanguage === 'ko' && item.title_ko ? item.title_ko : item.title;
                imgDiv.innerHTML = `
                    <img src="${item.src}" alt="${title}" loading="lazy">
                    <div class="img-overlay">
                        <span>${title}</span>
                    </div>
                `;
                items.appendChild(imgDiv);
            });
        }
        
        // 显示模态框
        modal.style.display = 'flex';
        modal.animate([
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }

    displaySubcategories(subcategories, container) {
        Object.keys(subcategories).forEach(key => {
            const subcat = subcategories[key];
            
            // 创建子分类标题
            const subcatTitle = document.createElement('h4');
            subcatTitle.className = 'subcategory-title';
            subcatTitle.textContent = subcat[this.currentLanguage];
            container.appendChild(subcatTitle);
            
            // 创建子分类网格
            const subcatGrid = document.createElement('div');
            subcatGrid.className = 'subcategory-grid';
            
            subcat.items.forEach(item => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'gallery-img-item';
                const title = this.currentLanguage === 'ko' && item.title_ko ? item.title_ko : item.title;
                imgDiv.innerHTML = `
                    <img src="${item.src}" alt="${title}" loading="lazy">
                    <div class="img-overlay">
                        <span>${title}</span>
                    </div>
                `;
                subcatGrid.appendChild(imgDiv);
            });
            
            container.appendChild(subcatGrid);
        });
    }

    closeGallery() {
        const modal = document.getElementById('galleryModal');
        
        modal.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.8)' }
        ], {
            duration: 200,
            easing: 'ease-in'
        }).onfinish = () => {
            modal.style.display = 'none';
        };
    }

    // ========== 动画触发器 ==========
    setupAnimationTriggers() {
        // 滚动动画观察器
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });

        // 观察所有卡片
        document.querySelectorAll('.hobby-card, .about, .contact').forEach(el => {
            observer.observe(el);
        });
    }

    // ========== 页面加载动画 ==========
    triggerLoadAnimation() {
        // 页面加载完成后触发动画
        setTimeout(() => {
            document.body.classList.add('loaded');
            
            // 顺序显示各个部分
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 500);
    }
}

// ========== Y2K额外动画样式 ==========
const y2kStyles = `
    @keyframes y2kSpin {
        0% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
        50% { transform: rotate(180deg) scale(1.1); filter: hue-rotate(180deg); }
        100% { transform: rotate(360deg) scale(1); filter: hue-rotate(360deg); }
    }

    @keyframes digitalGlow {
        0% { filter: contrast(1) brightness(1); }
        25% { filter: contrast(1.5) brightness(1.2) hue-rotate(90deg); }
        50% { filter: contrast(2) brightness(1.5) hue-rotate(180deg); }
        75% { filter: contrast(1.5) brightness(1.2) hue-rotate(270deg); }
        100% { filter: contrast(1) brightness(1); }
    }

    .gallery-drama-item, .gallery-img-item {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .gallery-drama-item:hover, .gallery-img-item:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
    }

    .gallery-img-item {
        aspect-ratio: 1;
        position: relative;
    }

    .gallery-img-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .gallery-img-item:hover img {
        transform: scale(1.1);
    }

    .img-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        color: white;
        padding: 1rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }

    .gallery-img-item:hover .img-overlay {
        transform: translateY(0);
    }

    .drama-info {
        padding: 1.5rem;
    }

    .drama-country {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .drama-info h4 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }

    .drama-info p {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .subcategory-title {
        color: #FF6B9D;
        font-size: 1.3rem;
        margin: 2rem 0 1rem 0;
        text-align: center;
        text-shadow: 0 0 10px rgba(255, 107, 157, 0.5);
    }

    .subcategory-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    section {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    body.loaded section {
        opacity: 1;
        transform: translateY(0);
    }
`;

// 添加Y2K样式到头部
const style = document.createElement('style');
style.textContent = y2kStyles;
document.head.appendChild(style);

// ========== 初始化应用 ==========
document.addEventListener('DOMContentLoaded', () => {
    new Y2KPersonalSite();
    
    // 添加加载完成类
    window.addEventListener('load', () => {
        document.body.classList.add('fully-loaded');
    });
});