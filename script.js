const rakhiPhotos = {

  1: "IMG-20260822-WA3233.jpg",

  2: "IMG-20260822-WA1913.jpg",

  3: "IMG-20260822-WA8053.jpg",

  4: "IMG-20260822-WA0358.jpg",

  5: "IMG-20260822-WA4514.jpg",

  6: "IMG-20260822-WA3282.jpg",

  7: "IMG-20260822-WA8037.jpg",

  8: "IMG-20260822-WA0121.jpg",

  9: "IMG-20260822-WA0559.jpg",

  10: "IMG-20260822-WA1127.jpg"

};


/* =========================
   OPEN RAKHI PHOTO
   ========================= */

function showBrother(number) {

  const rakhiPhoto =
    document.getElementById("rakhiPhoto");

  const galleryPage =
    document.getElementById("galleryPage");

  const rakhiPage =
    document.getElementById("rakhiPage");


  /* Set corresponding Rakhi photo */

  rakhiPhoto.src = rakhiPhotos[number];


  /* Hide main gallery */

  galleryPage.style.display = "none";


  /* Show Rakhi page */

  rakhiPage.style.display = "block";


  /* Start from top */

  window.scrollTo(0, 0);
}


/* =========================
   BACK TO MAIN PAGE
   ========================= */

function goBack() {

  const galleryPage =
    document.getElementById("galleryPage");

  const rakhiPage =
    document.getElementById("rakhiPage");


  /* Hide Rakhi page */

  rakhiPage.style.display = "none";


  /* Show main gallery */

  galleryPage.style.display = "block";


  /* Start gallery from top */

  window.scrollTo(0, 0);
}
