// ======================================
// RAKHI PHOTOS
// Same order as the individual photos
// ======================================

const rakhiPhotos = [

    "IMG-20260822-WA3233.jpg",

    "IMG-20260822-WA1913.jpg",

    "IMG-20260822-WA8053.jpg",

    "IMG-20260822-WA0358.jpg",

    "IMG-20260822-WA4514.jpg",

    "IMG-20260822-WA3282.jpg",

    "IMG-20260822-WA8037.jpg",

    "IMG-20260822-WA0121.jpg",

    "IMG-20260822-WA0559.jpg",

    "IMG-20260822-WA1127.jpg"

];


// ======================================
// SHOW RAKHI PAGE
// ======================================

function showRakhi(index) {

    const mainPage = document.getElementById("mainPage");

    const rakhiPage = document.getElementById("rakhiPage");

    const rakhiPhoto = document.getElementById("rakhiPhoto");


    // Select corresponding Rakhi photo

    rakhiPhoto.src = rakhiPhotos[index];


    // Hide main page

    mainPage.style.display = "none";


    // Show Rakhi page

    rakhiPage.style.display = "block";


    // Start Rakhi page from top

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


// ======================================
// BACK TO MAIN PAGE
// ======================================

function goBack() {

    const mainPage = document.getElementById("mainPage");

    const rakhiPage = document.getElementById("rakhiPage");


    // Hide Rakhi page

    rakhiPage.style.display = "none";


    // Show main page

    mainPage.style.display = "block";


    // Go to top of main page

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}
