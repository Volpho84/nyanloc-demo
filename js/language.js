const defaultLanguage = "it";

let translations = {};

async function loadLanguage(language) {

    showLoading();

    const response = await fetch(`languages/${language}.json`);

    translations = await response.json();

    document.documentElement.lang = language;

    localStorage.setItem("language", language);

    applyTranslations();

}


function applyTranslations() {

    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach(element => {

        const key = element.dataset.lang;

        if (translations[key]) {

            element.textContent = translations[key];

        } else {

            console.warn("Missing translation:", key);

        }

    });

}


function showLoading() {

    const loadingScreen = document.querySelector(".loading-screen");

    if (!loadingScreen) return;


    const loadingText = document.querySelector("#loading-text");

    if (loadingText && translations["loading.text"]) {

        loadingText.textContent = "> " + translations["loading.text"];

    }


    loadingScreen.style.display = "flex";


    setTimeout(() => {

        loadingScreen.style.opacity = "1";

    }, 10);


    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        }, 500);

    }, 1800);

}



window.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("language") || defaultLanguage;

    loadLanguage(savedLanguage);

});
