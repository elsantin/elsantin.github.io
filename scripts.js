document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Actualizar el año en el footer ---
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- 2. Funcionalidad del Modal de Proyectos ---
    const projectGrid = document.getElementById('project-grid');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectTechnologies = document.getElementById('modal-project-technologies');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectLiveUrl = document.getElementById('modal-project-live-url');
    const modalProjectRepoUrl = document.getElementById('modal-project-repo-url');

    // --- 3. Funcionalidad de Cambio de Idioma ---
    const languageSwitcherBtn = document.getElementById('language-switcher');
    let currentLanguage = localStorage.getItem('language') || 'en'; // Inglés por defecto

    const translations = {
        'en': {
            'site_title': 'elsantin dev hub',
            'meta_description': 'elsantin dev hub: a portal to my creations and explorations on the technological frontier, from Margarita Island.',
            'meta_keywords': 'elsantin, dev hub, vibe coder, web developer, Margarita Island, digital architect, web projects, full-stack, javascript, html, css, tech, futuristic, AI',
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_projects': 'Projects',
            'nav_contact': 'Contact',
            'lang_switcher_text': 'Español',
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
            'lang_switcher_text': 'English',
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
            if (translations[lang][key]) {
                if (element.tagName === 'META' && element.name === 'description') {
                    element.content = translations[lang][key];
                } else if (element.tagName === 'META' && element.name === 'keywords') {
                    element.content = translations[lang][key];
                } else if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('img[data-alt-en][data-alt-es]').forEach(img => {
            const altText = img.getAttribute(lang === 'es' ? 'data-alt-es' : 'data-alt-en');
            if (altText) {
                img.alt = altText;
            }
        });

        if (languageSwitcherBtn) {
            languageSwitcherBtn.textContent = translations[lang]['lang_switcher_text'];
        }

        localStorage.setItem('language', lang);
        currentLanguage = lang;

        // Añadir clase al body DESPUÉS de aplicar las traducciones
        document.body.classList.add('language-set');
    }

    if (languageSwitcherBtn) {
        languageSwitcherBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'es' : 'en';
            // Opcional: quitar la clase para que los elementos se oculten brevemente durante el cambio
            // document.body.classList.remove('language-set'); 
            setLanguage(newLang);
        });
    }

    // Aplicar el idioma guardado o el por defecto al cargar la página
    setLanguage(currentLanguage);


    function openModal(projectCard) { 
        if (!modal || !projectCard) return;

        const lang = currentLanguage; 
        const titleKey = projectCard.dataset.projectTitleKey;
        const descriptionKey = projectCard.dataset.projectDescriptionKey;

        const title = translations[lang][titleKey] || "Title not available";
        const description = translations[lang][descriptionKey] || "Description not available.";
        const image = projectCard.dataset.projectImage || "https://placehold.co/600x400/161b22/c9d1d9?text=Image+Not+Available";
        const technologies = projectCard.dataset.projectTechnologies || "Technologies not specified.";
        const liveUrl = projectCard.dataset.projectLiveUrl || "#";
        const repoUrl = projectCard.dataset.projectRepoUrl || "#";
        
        if (modalProjectImage) {
            modalProjectImage.src = image;
            modalProjectImage.alt = translations[lang]['alt_modal_project_img'] || "Project Image";
        }
        if (modalProjectTitle) modalProjectTitle.textContent = title;
        if (modalProjectTechnologies) modalProjectTechnologies.textContent = technologies; 
        if (modalProjectDescription) modalProjectDescription.textContent = description;

        if (modalProjectLiveUrl) {
            const liveUrlTextElement = modalProjectLiveUrl.querySelector('span');
            if (liveUrlTextElement) liveUrlTextElement.textContent = translations[lang]['modal_view_demo'];
            modalProjectLiveUrl.href = liveUrl;
            modalProjectLiveUrl.style.display = liveUrl && liveUrl.trim() !== '#' ? 'inline-block' : 'none';
        }
        if (modalProjectRepoUrl) {
            const repoUrlTextElement = modalProjectRepoUrl.querySelector('span');
            if (repoUrlTextElement) repoUrlTextElement.textContent = translations[lang]['modal_view_code'];
            modalProjectRepoUrl.href = repoUrl;
            modalProjectRepoUrl.style.display = repoUrl && repoUrl.trim() !== '#' ? 'inline-block' : 'none';
        }

        modal.classList.remove('modal-inactive');
        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
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
    if (modal) modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal && modal.classList.contains('modal-active')) closeModal(); });

});
