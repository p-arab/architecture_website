function showProjects() {
    window.location.href = "../src/Projects.html"
}

function showAboutUs() {
    window.location.href = "../src/about_us.html"
}

function showContactUs() {
    window.location.href = "../src/contact_us.html"
}

function showProjectDetails() {
    window.location.href = "../src/project_details.html"
}

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'fa';
    document.documentElement.setAttribute('lang', userPreferredLanguage);
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    toggleArabicStylesheet(userPreferredLanguage);

    const optionFa = document.getElementById('language_txt_fa')
    const optionEn = document.getElementById('language_txt_en')
    if (userPreferredLanguage === 'fa') {
        optionFa.style.display = 'flex'
        optionEn.style.display = 'none'
    } else if (userPreferredLanguage === 'en') {
        optionEn.style.display = 'flex'
        optionFa.style.display = 'none'
    }
});

async function changeLanguage(lang) {
    await setLanguagePreference(lang);

    document.documentElement.setAttribute('lang', lang);
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    toggleArabicStylesheet(lang); // Toggle Arabic stylesheet
}


function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    // location.reload();
}

async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
}

function toggleArabicStylesheet(lang) {
    const head = document.querySelector('head');
    const link = document.querySelector('#styles-link');

    if (link) {
        head.removeChild(link);
    } else if (lang === 'fa') {
        const newLink = document.createElement('link');
        newLink.id = 'styles-link';
        newLink.rel = 'stylesheet';
        newLink.href = './assets/css/style-fa.css';
        head.appendChild(newLink);
    }
}

function toggleSelectedLanguage(lang) {
    const optionFa = document.getElementById('language_txt_fa')
    const optionEn = document.getElementById('language_txt_en')
    const displayFa = getComputedStyle(optionFa).display
    const displayEn = getComputedStyle(optionEn).display

    if (displayFa === 'none' || displayEn === 'none') {
        optionFa.style.display = 'flex'
        optionEn.style.display = 'flex'
    } else {
        if (lang === 'fa') {
            optionFa.style.display = 'flex'
            optionEn.style.display = 'none'
        } else if (lang === 'en') {
            optionEn.style.display = 'flex'
            optionFa.style.display = 'none'
        }
        changeLanguage(lang)
    }
}