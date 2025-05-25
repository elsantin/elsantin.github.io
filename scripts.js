// Espera a que todo el contenido del DOM esté completamente cargado y parseado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ACTUALIZAR EL AÑO EN EL FOOTER ---
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- 2. HEADER CON EFECTO "GLASSMORPHISM" AL HACER SCROLL ---
    const header = document.querySelector('header');
    if (header) {
        const scrollThreshold = 50; 
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled'); 
            } else {
                header.classList.remove('scrolled'); 
            }
        });
    }

    // --- 3. FUNCIONALIDAD DE CAMBIO DE IDIOMA ---
    const languageSwitcherBtn = document.getElementById('language-switcher');
    let currentLanguage = localStorage.getItem('language') || 'en'; 

    const translations = {
        'en': {
            'site_title': 'elsantin dev hub',
            'meta_description': 'elsantin dev hub: a portal to my creations and explorations on the technological frontier, from Margarita Island.',
            'meta_keywords': 'elsantin, dev hub, vibe coder, web developer, Margarita Island, digital architect, web projects, full-stack, javascript, html, css, tech, futuristic, AI',
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_projects': 'Projects',
            'nav_contact': 'Contact',
            'lang_switcher_text': 'ESP', 
            'alt_profile_pic': "elsantin's profile picture",
            'hero_name': 'elsantin',
            'hero_tagline': 'Vibe Coder. Self-taught code navigator, AI-assisted. This Dev Hub is the crucible of my digital explorations and the manifestation of my projects.',
            'hero_button_projects': 'Explore Projects',
            'about_title': 'Digital Manifesto',
            'about_p1': 'I perceive development as a dance between intuition and logic, a creative flow where the "vibe" guides the syntax. As a self-taught individual, my learning is a constant expedition, amplified and refined by collaboration with artificial intelligences. My passion lies in translating ethereal concepts into tangible interfaces and digital experiences that resonate with a sober and original elegance.',
            'about_p2': 'Based in Margarita Island, Venezuela, I focus on strengthening my foundations in HTML, CSS, and JavaScript. Each project is a canvas to explore and apply my vision, always seeking a polished execution and a fresh perspective in web development.',
            'projects_title': 'My Projects',
            
            'project_ccc_title': 'Chill Chess Club',
            'project_ccc_desc': "A professional single-page application (SPA) with a 'chill' and modern aesthetic, designed to sell online chess courses (beginner-intermediate). It features a bilingual interface (ES/EN) and promotes an AI-assisted 'immersive and personalized' teaching method. Built with HTML5, CSS3, and JavaScript (ES6+).",
            'project_ccc_title_card': 'Chill Chess Club',
            'project_ccc_desc_card': 'SPA for online chess courses with an AI-assisted, personalized method.',
            'alt_ccc_card_img': 'Chill Chess Club Screenshot',
            
            'project_dho_title': 'Dra. Hanoi Yánez González - Professional Website & SPA',
            'project_dho_desc': "Development of a single-page application (SPA) for Dr. Hanoi Yánez, a Gynecologist-Obstetrician specializing in child and adolescent care. The project showcases her comprehensive services, holistic approach, and her role as the sole specialist in child-adolescent care on Margarita Island. The design is clean, modern, and aims to convey professionalism and warmth, facilitating interaction and appointment scheduling.",
            'project_dho_title_card': 'Dra. Hanoi Online',
            'project_dho_desc_card': 'Professional website for Gynecologist-Obstetrician with a holistic approach on Margarita Island.',
            'alt_dho_card_img': 'Dra. Hanoi Online Website Screenshot',
            
            'project_artpf_title': 'Santiago Narváez - Digital Art & AI Photography Portfolio',
            // Descripción acortada para evitar scroll excesivo
            'project_artpf_desc': "Developed a personal portfolio showcasing photography and visual creations at the frontier of AI-assisted art. The site blends traditional artistic sensibilities with cutting-edge technology, transforming moments into impactful visual experiences. It invites a journey through digital realms of dreamlike landscapes and surreal portraits, reflecting an evolving relationship with technology. Built with HTML, Tailwind CSS, JavaScript, and p5.js.",
            'project_artpf_title_card': 'AI Artistic Portfolio',
            'project_artpf_desc_card': 'Visual exploration at the intersection of imagination and artificial intelligence.',
            'alt_artpf_card_img': 'Santiago Narváez Artistic Portfolio Screenshot',

            'project_veridia_title': 'Veridia Website', 
            'project_veridia_desc_card': 'Intelligent automation solutions website project.', 
            'project_veridia_desc': "Developed the official single-page application (SPA) for Veridia, a company specializing in intelligent automation solutions. The project involved creating a modern, professional website to showcase their services (IPA, RPA, AI Integration), detail their methodology, and facilitate client contact. Key features include a responsive design, bilingual capabilities (EN/ES), dynamic content loading, and subtle animations to enhance user experience. Built with HTML, Tailwind CSS, and JavaScript.", 
            'alt_veridia_card_img': 'Screenshot of the Veridia project homepage, showcasing intelligent automation solutions.',
            
            'project_view_details': 'View Details',
            'alt_modal_project_img': 'Project Image',
            'modal_tech_used': 'Technologies Used:',
            'modal_description': 'Description:',
            'modal_view_demo': 'View Demo',
            'modal_view_code': 'View Code',
            'contact_title': 'Connect',
            'contact_tagline': 'If my approach resonates with you, or if you have a vision we could materialize together, this is the starting point.',
            'contact_button_email': 'Send Email',
            'footer_copyright': `© ${new Date().getFullYear()} elsantin. All rights reserved.`
        },
        'es': {
            'site_title': 'elsantin dev hub',
            'meta_description': 'elsantin dev hub: un portal a mis creaciones y exploraciones en la frontera tecnológica, desde la Isla de Margarita.',
            'meta_keywords': 'elsantin, dev hub, vibe coder, desarrollador web, Isla de Margarita, arquitecto digital, proyectos web, full-stack, javascript, html, css, tech, futurista, IA',
            'nav_home': 'Inicio',
            'nav_about': 'Sobre Mí',
            'nav_projects': 'Proyectos',
            'nav_contact': 'Contacto',
            'lang_switcher_text': 'ENG', 
            'alt_profile_pic': "Foto de perfil de elsantin",
            'hero_name': 'elsantin',
            'hero_tagline': 'Vibe Coder. Navegante autodidacta del código, asistido por IA. Este Dev Hub es el crisol de mis exploraciones digitales y la manifestación de mis proyectos.',
            'hero_button_projects': 'Explorar Proyectos',
            'about_title': 'Manifiesto Digital',
            'about_p1': 'Concibo el desarrollo como una danza entre la intuición y la lógica, un flujo creativo donde la "vibra" guía la sintaxis. Como autodidacta, mi aprendizaje es una expedición constante, amplificada y refinada por la colaboración con inteligencias artificiales. Mi pasión radica en traducir conceptos etéreos en interfaces tangibles y experiencias digitales que resuenen con una elegancia sobria y original.',
            'about_p2': 'Desde la Isla de Margarita, Venezuela, me enfoco en fortalecer mis cimientos en HTML, CSS y JavaScript. Cada proyecto es un lienzo para explorar y aplicar mi visión, buscando siempre una ejecución pulcra y una perspectiva fresca en el desarrollo web.',
            'projects_title': 'Mis Proyectos',

            'project_ccc_title': 'Chill Chess Club',
            'project_ccc_desc': "Una aplicación de página única (SPA) profesional con estética 'chill' y moderna, diseñada para vender cursos de ajedrez online (principiante-intermedio). Presenta una interfaz bilingüe (ES/EN) y promueve un método de enseñanza 'inmersivo y personalizado' asistido por IA. Construida con HTML5, CSS3 y JavaScript (ES6+).",
            'project_ccc_title_card': 'Chill Chess Club',
            'project_ccc_desc_card': 'SPA para cursos de ajedrez online con método personalizado asistido por IA.',
            'alt_ccc_card_img': 'Captura de pantalla de Chill Chess Club',
            
            'project_dho_title': 'Dra. Hanoi Yánez González - Sitio Web Profesional y SPA',
            'project_dho_desc': "Desarrollo de un sitio web de página única (SPA) para la Dra. Hanoi Yánez, Ginecóloga-Obstetra con especialización infanto-juvenil. El proyecto presenta sus servicios integrales, un enfoque holístico y su rol como única especialista en atención infanto-juvenil en la Isla de Margarita. El diseño es limpio, moderno y busca transmitir profesionalismo y calidez, facilitando la interacción y el agendamiento de citas.",
            'project_dho_title_card': 'Dra. Hanoi Online',
            'project_dho_desc_card': 'Sitio web profesional para ginecóloga-obstetra con enfoque holístico en Isla de Margarita.',
            'alt_dho_card_img': 'Captura de pantalla del sitio Dra. Hanoi Online',
            
            'project_artpf_title': 'Santiago Narváez - Portfolio de Arte Digital y Fotografía IA',
            // Descripción acortada para evitar scroll excesivo
            'project_artpf_desc': "Desarrollo de un portafolio personal que muestra mi trabajo como fotógrafo y creador visual, explorando las fronteras de la creación asistida por IA. El sitio combina sensibilidades artísticas tradicionales con tecnología de vanguardia, transformando momentos en experiencias visuales impactantes. Invita a un viaje por reinos digitales de paisajes oníricos y retratos surrealistas, reflejando una relación evolutiva con la tecnología. Construido con HTML, Tailwind CSS, JavaScript y p5.js.",
            'project_artpf_title_card': 'Portfolio Artístico IA',
            'project_artpf_desc_card': 'Exploración visual en la intersección de la imaginación y la inteligencia artificial.',
            'alt_artpf_card_img': 'Captura de pantalla del Portfolio Artístico de Santiago Narváez',

            'project_veridia_title': 'Sitio Web Veridia', 
            'project_veridia_desc_card': 'Proyecto de sitio web para soluciones de automatización inteligente.', 
            'project_veridia_desc': "Desarrollo de la aplicación de página única (SPA) oficial para Veridia, una empresa especializada en soluciones de automatización inteligente. El proyecto consistió en crear un sitio web moderno y profesional para presentar sus servicios (IPA, RPA, Integración IA), detallar su metodología y facilitar el contacto con clientes. Las características clave incluyen un diseño responsivo, capacidades bilingües (ES/EN), carga dinámica de contenido y animaciones sutiles para mejorar la experiencia del usuario. Construido con HTML, Tailwind CSS y JavaScript.", 
            'alt_veridia_card_img': 'Captura de pantalla de la página de inicio del proyecto Veridia, mostrando soluciones de automatización inteligente.',
            
            'project_view_details': 'Ver Detalles',
            'alt_modal_project_img': 'Imagen del Proyecto',
            'modal_tech_used': 'Tecnologías Utilizadas:',
            'modal_description': 'Descripción:',
            'modal_view_demo': 'Ver Demo',
            'modal_view_code': 'Ver Código',
            'contact_title': 'Conexión',
            'contact_tagline': 'Si mi enfoque resuena contigo, o si tienes una visión que podríamos materializar juntos, este es el punto de partida.',
            'contact_button_email': 'Iniciar Contacto',
            'footer_copyright': `© ${new Date().getFullYear()} elsantin. Todos los derechos reservados.`
        }
    };

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key] !== undefined) { 
                if (element.tagName === 'META' && element.name === 'description') {
                    element.content = translations[lang][key];
                } else if (element.tagName === 'META' && element.name === 'keywords') {
                    element.content = translations[lang][key];
                } else if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key]; 
                }
            }
        });
        document.querySelectorAll('img[data-alt-en][data-alt-es]').forEach(img => {
            const altText = img.getAttribute(lang === 'es' ? 'data-alt-es' : 'data-alt-en');
            if (altText) { img.alt = altText; }
        });

        if (languageSwitcherBtn) {
            languageSwitcherBtn.textContent = translations[lang]['lang_switcher_text'];
        }
        localStorage.setItem('language', lang);
        currentLanguage = lang; 
        document.body.classList.add('language-set'); 
    }

    if (languageSwitcherBtn) {
        languageSwitcherBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'es' : 'en';
            setLanguage(newLang);
            if (modal && modal.classList.contains('modal-active') && currentProjectIndex !== -1) {
                const currentCard = allProjectCards[currentProjectIndex];
                if (currentCard) {
                    updateModalContent(currentCard); 
                }
            }
        });
    }
    setLanguage(currentLanguage);

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon'); 
    if (mobileMenuButton && mobileMenuPanel && mobileMenuIcon) {
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenuPanel.classList.toggle('open');
            if (isOpen) {
                mobileMenuIcon.classList.remove('fa-bars'); 
                mobileMenuIcon.classList.add('fa-times');   
            } else {
                mobileMenuIcon.classList.remove('fa-times'); 
                mobileMenuIcon.classList.add('fa-bars');    
            }
        });
        const mobileNavLinks = mobileMenuPanel.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuPanel.classList.contains('open')) {
                    mobileMenuPanel.classList.remove('open');
                    mobileMenuIcon.classList.remove('fa-times');
                    mobileMenuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    const projectGrid = document.getElementById('project-grid');
    const modal = document.getElementById('project-modal'); 
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectTechnologies = document.getElementById('modal-project-technologies');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectLiveUrl = document.getElementById('modal-project-live-url');
    const modalProjectRepoUrl = document.getElementById('modal-project-repo-url');
    const modalContentItem = modal.querySelector('.modal-content-item'); 
    const modalTechIconsContainer = document.getElementById('modal-tech-icons-outside-image'); // ID del contenedor de iconos

    const modalPrevProjectBtn = document.getElementById('modal-prev-project');
    const modalNextProjectBtn = document.getElementById('modal-next-project');
    let allProjectCards = []; 
    let currentProjectIndex = -1; 

    if (projectGrid) {
        allProjectCards = Array.from(projectGrid.querySelectorAll('.project-card'));
    }

    function animateAndUpdateModalContent(projectCard, direction = 'none') {
        if (!projectCard || !modalContentItem) return;
        const animationDuration = 200; 
        function performUpdateAndAnimateIn() {
            updateModalContent(projectCard); 
            modalContentItem.style.transition = 'none'; 
            if (direction === 'next') { 
                modalContentItem.style.opacity = '0';
                modalContentItem.style.transform = 'translateX(20px)';
            } else if (direction === 'prev') { 
                modalContentItem.style.opacity = '0';
                modalContentItem.style.transform = 'translateX(-20px)';
            } else { 
                modalContentItem.style.opacity = '0';
                modalContentItem.style.transform = 'translateX(0)';
            }
            void modalContentItem.offsetWidth; 
            modalContentItem.style.transition = `opacity ${animationDuration}ms ease-in-out, transform ${animationDuration}ms ease-in-out`;
            modalContentItem.style.opacity = '1';
            modalContentItem.style.transform = 'translateX(0)';
        }
        if (direction !== 'none' && modalContentItem.style.opacity === '1') { 
            if (direction === 'next') { 
                modalContentItem.classList.add('fade-out-left');
            } else { 
                modalContentItem.classList.add('fade-out-right');
            }
            setTimeout(() => {
                modalContentItem.classList.remove('fade-out-left', 'fade-out-right'); 
                performUpdateAndAnimateIn(); 
            }, animationDuration);
        } else {
            performUpdateAndAnimateIn();
        }
    }

    function updateModalContent(projectCard) { 
        if (!projectCard) return; 

        const lang = currentLanguage; 
        const titleKey = projectCard.dataset.projectTitleKey;
        const descriptionKey = projectCard.dataset.projectDescriptionKey;
        
        const title = translations[lang][titleKey] || "Title not available"; 
        const description = translations[lang][descriptionKey] || "Description not available."; 
        
        const imageSrc = projectCard.dataset.projectImage || "https://placehold.co/600x400/161b22/c9d1d9?text=Project+Image&fontsize=16";
        const technologiesString = projectCard.dataset.projectTechnologies || "";
        const liveUrl = projectCard.dataset.projectLiveUrl || "#";
        const repoUrl = projectCard.dataset.projectRepoUrl || "#";
        
        if (modalProjectImage) {
            modalProjectImage.src = imageSrc;
            const cardImgElement = projectCard.querySelector('img'); 
            const cardAltKey = cardImgElement ? cardImgElement.dataset.langKey : null; 
            modalProjectImage.alt = (cardAltKey && translations[lang][cardAltKey]) ? translations[lang][cardAltKey] : (translations[lang]['alt_modal_project_img'] || "Project Image");
        }
        if (modalProjectTitle) modalProjectTitle.textContent = title;
        if (modalProjectTechnologies) modalProjectTechnologies.textContent = technologiesString; 
        if (modalProjectDescription) modalProjectDescription.textContent = description;
        
        if (modalTechIconsContainer) { 
            modalTechIconsContainer.innerHTML = ''; 
            const techs = technologiesString.split(',').map(tech => tech.trim().toLowerCase());
            
            techs.forEach(tech => {
                let iconHtml = '';
                if (tech.includes('html')) {
                    iconHtml = '<i class="fab fa-html5" title="HTML5" style="color: #e34f26;"></i>';
                } else if (tech.includes('css')) {
                    iconHtml = '<i class="fab fa-css3-alt" title="CSS3" style="color: #1572b6;"></i>';
                } else if (tech.includes('javascript') || tech.includes('js')) {
                    iconHtml = '<i class="fab fa-js-square" title="JavaScript" style="color: #f7df1e;"></i>';
                } else if (tech.includes('p5.js') || tech.includes('p5')) {
                    iconHtml = '<span title="p5.js" class="font-bold" style="color: #ed225d;">P5</span>'; 
                }
                
                if (iconHtml) {
                    modalTechIconsContainer.insertAdjacentHTML('beforeend', iconHtml);
                }
            });
        }

        if (modalProjectLiveUrl) {
            const liveUrlTextElement = modalProjectLiveUrl.querySelector('span'); 
            if (liveUrlTextElement) liveUrlTextElement.textContent = translations[lang]['modal_view_demo'];
            modalProjectLiveUrl.href = liveUrl;
            modalProjectLiveUrl.style.display = liveUrl && liveUrl.trim() !== '#' && liveUrl.trim() !== '' ? 'inline-block' : 'none';
        }
        if (modalProjectRepoUrl) {
            const repoUrlTextElement = modalProjectRepoUrl.querySelector('span'); 
            if (repoUrlTextElement) repoUrlTextElement.textContent = translations[lang]['modal_view_code'];
            modalProjectRepoUrl.href = repoUrl;
            modalProjectRepoUrl.style.display = repoUrl && repoUrl.trim() !== '#' && repoUrl.trim() !== '' ? 'inline-block' : 'none';
        }
    }

    function openModal(projectCard) { 
        if (!modal || !projectCard) { 
            console.error("Modal element or projectCard not found for openModal!");
            return;
        }
        currentProjectIndex = allProjectCards.indexOf(projectCard); 
        animateAndUpdateModalContent(projectCard, 'none'); 
        modal.classList.remove('modal-inactive'); 
        modal.classList.add('modal-active');     
        document.body.style.overflow = 'hidden'; 
        if (allProjectCards.length > 1) {
            if (modalPrevProjectBtn) modalPrevProjectBtn.classList.remove('hidden'); 
            if (modalNextProjectBtn) modalNextProjectBtn.classList.remove('hidden');
        } else {
            if (modalPrevProjectBtn) modalPrevProjectBtn.classList.add('hidden');
            if (modalNextProjectBtn) modalNextProjectBtn.classList.add('hidden');
        }
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('modal-active');
        modal.classList.add('modal-inactive');
        document.body.style.overflow = 'auto'; 
    }

    if (projectGrid) {
        projectGrid.addEventListener('click', (event) => {
            const projectCard = event.target.closest('.project-card');
            if (projectCard) {
                openModal(projectCard);
            }
        });
    }
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    
    if (modal) {
        modal.addEventListener('click', (event) => { 
            if (event.target === modal) { 
                closeModal();
            }
        });
    }
    
    function navigateProject(direction) {
        if (allProjectCards.length === 0) return; 
        currentProjectIndex += direction;
        if (currentProjectIndex < 0) {
            currentProjectIndex = allProjectCards.length - 1; 
        } else if (currentProjectIndex >= allProjectCards.length) {
            currentProjectIndex = 0; 
        }
        const nextProjectCard = allProjectCards[currentProjectIndex];
        animateAndUpdateModalContent(nextProjectCard, direction === 1 ? 'next' : 'prev');
    }

    if (modalPrevProjectBtn) {
        modalPrevProjectBtn.addEventListener('click', () => navigateProject(-1)); 
    }
    if (modalNextProjectBtn) {
        modalNextProjectBtn.addEventListener('click', () => navigateProject(1)); 
    }

    document.addEventListener('keydown', (event) => { 
        if (modal && modal.classList.contains('modal-active')) { 
            if (event.key === 'Escape') {
                closeModal();
            }
            if (allProjectCards.length > 1) {
                if (event.key === 'ArrowLeft') {
                    navigateProject(-1); 
                } else if (event.key === 'ArrowRight') {
                    navigateProject(1);  
                }
            }
        }
    });

}); // Fin del DOMContentLoaded
/* Fin del script */
