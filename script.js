function selectBrother(name, photo, message) {
  document.querySelector(".container").style.display = "none";
  document.getElementById("selectedScreen").style.display = "block";

  document.getElementById("selectedPhoto").src = photo;
  document.getElementById("selectedName").innerText = name;

  window.currentMessage = message;
}

function showMessage() {
  document.getElementById("selectedScreen").style.display = "none";
  document.getElementById("messageScreen").style.display = "block";

  document.getElementById("specialMessage").innerText =
    window.currentMessage;
}

function goBack() {
  document.getElementById("messageScreen").style.display = "none";
  document.querySelector(".container").style.display = "block";
}
