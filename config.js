// ------------ Navbar functions ------------
    // ------------ Navbar variables ------------
        const navButton = document.getElementById("nav-btn");
        let isOpened;
        const mobileNav = document.getElementById("mobile-navigation");
    // ------------------------------------------

    navButton.addEventListener("click", () => {
        isOpened = navButton.getAttribute("aria-expanded") === "true";
        if(isOpened ? closeMobileNav() : openMobileNav());
    });

    function openMobileNav() {
        navButton.setAttribute("aria-expanded", "true");
        mobileNav.setAttribute("data-state", "opened");
    }

    function closeMobileNav() {
        navButton.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("data-state", "closed");
    }
// ------------------------------------------

// ---------- Applying the fix vh100 for mobile ----------
    let timeoutId = null;
    let doc = document.documentElement;
    let customHeight = () => {
        doc.style.setProperty("--full-height", `${window.innerHeight}px`);
    };

    let verification = window.matchMedia('(orientation: portrait)');
    verification.addListener(() => {
        checkOrientation(verification);
    });

    function checkOrientation(verification) {
        if(verification.matches)
            customHeight();
        else {
            if(window.innerWidth < 700)
                doc.style.setProperty("--full-height", "30rem");
            else
                doc.style.setProperty("--full-height", "40rem");
        }
    }

    checkOrientation(verification);
// -------------------------------------------------------

// ---------- Events from menu link ----------
    const aboutMenu = document.getElementById("about-menu");
    const projectsMenu = document.getElementById("projects-menu");
    const contactMenu = document.getElementById("contact-menu");
    
    const modalAboutMenu = document.getElementById("modal-about-menu");
    const modalProjectsMenu = document.getElementById("modal-projects-menu");
    const modalContactMenu = document.getElementById("modal-contact-menu");
    const html = document.querySelector("html");

    aboutMenu.addEventListener("click", () => {
        html.style.scrollBehavior = "smooth";
        
        setTimeout(() => {
            html.style.scrollBehavior = "initial";
        }, 300);
    });

    projectsMenu.addEventListener("click", () => {
        html.style.scrollBehavior = "smooth";

        setTimeout(() => {
            html.style.scrollBehavior = "initial";
        }, 300);
    });

    contactMenu.addEventListener("click", () => {
        html.style.scrollBehavior = "smooth";
        
        setTimeout(() => {
            html.style.scrollBehavior = "initial";
        }, 300);
    });

    modalAboutMenu.addEventListener("click", () => {
        html.style.scrollBehavior = "smooth";
        
        setTimeout(() => {
            html.style.scrollBehavior = "initial";
        }, 300);
    });

    modalProjectsMenu.addEventListener("click", () => {
        html.style.scrollBehavior = "smooth";
        
        setTimeout(() => {
            html.style.scrollBehavior = "initial";
        }, 300);
    });

    modalContactMenu.addEventListener("click", () => {
        html.style.scrollBehavior = "smooth";
        
        setTimeout(() => {
            html.style.scrollBehavior = "initial";
        }, 300);
    });
// -------------------------------------------