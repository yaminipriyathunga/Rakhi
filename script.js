/* =========================================
   INDIVIDUAL PHOTO → RAKHI PHOTO MAPPING
   ========================================= */

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


/* =========================================
   OPEN RAKHI PAGE
   ========================================= */

function openBrother(index) {

    const brothersPage = document.getElementById("brothersPage");
    const rakhiPage = document.getElementById("rakhiPage");
    const rakhiImage = document.getElementById("rakhiImage");

    /* Select corresponding Rakhi photo */
    rakhiImage.src = rakhiPhotos[index];

    /* Hide brothers */
    brothersPage.style.display = "none";

    /* Show Rakhi page */
    rakhiPage.classList.add("show");

    /* Start from top */
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================
   BACK TO BROTHERS
   ========================================= */

function goBack() {

    const brothersPage = document.getElementById("brothersPage");
    const rakhiPage = document.getElementById("rakhiPage");

    /* Hide Rakhi page */
    rakhiPage.classList.remove("show");

    /* Show brothers page */
    brothersPage.style.display = "block";

    /* Go to top of main page */
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}
