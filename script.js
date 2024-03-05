const images = ["heart-act.png", "heart.png"];

let currentImageIndex = 0;
let likes = 0;

function changeIcon() {
    likes++
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newIconSrc = images[currentImageIndex];
    document.getElementById("Like").src = newIconSrc;

    if (likes % 2 == 0) {
        document.getElementById("likes").innerHTML = "2005 likes"
    } else {
        document.getElementById("likes").innerHTML = "2004 likes"

    }
}

const images2 = ["save-instagram.png", "save-instagram1.png"];

let image2 = 0;

function changeIcon2() {
    image2 = (image2 +1) % images2.length;
    const newimage = images2[image2];
    document.getElementById("Save").src = newimage;

    
}
function tampilkanPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function sembunyikanPopup() {
    document.getElementById("popup").style.display = "none";
  }