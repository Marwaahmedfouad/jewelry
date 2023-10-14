let layer = document.querySelector(".layer");
let container = document.querySelector(".container");
let imglist = Array.from(document.querySelectorAll(".item img"));
let cross = document.querySelector(".popup .cross")
let left = document.querySelector(".popup .left")
let right = document.querySelector(".popup .right")

let currentIndex=0
console.log(imglist[0]);
for (let i = 0; i < imglist.length; i++) {
    imglist[i].addEventListener("click", function (e) {
        layer.style.display = 'flex';
        let realsrc = e.target.getAttribute('src')
        layer.firstElementChild.style.backgroundImage = `url(${realsrc})`
    })
}
///close popup
function closePopup() {
    layer.style.display = "none";
  }
cross.addEventListener("click", closePopup);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closePopup();
    }
  });

// cross.addEventListener("click", function () {
//     layer.style.display = "none"
// })


////next
// right.addEventListener("click",function(){
//     currentIndex++
//     if(currentIndex == imglist.length){
//         currentIndex = 0
//     }
//     console.log(currentIndex);
//     console.log(imglist[currentIndex])
//     let nextimgsec=imglist[currentIndex].getAttribute("src")
//     console.log(nextimgsec);
//     layer.firstElementChild.style.backgroundImage = `url(${nextimgsec})` 
// })
 function showNextImage() {
    currentIndex++;
    if (currentIndex == imglist.length) {
      currentIndex = 0;
    }
    let nextimgsec = imglist[currentIndex].getAttribute("src");
    layer.firstElementChild.style.backgroundImage = `url(${nextimgsec})`;
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      showNextImage();
    }
  });

  right.addEventListener("click", showNextImage);

////previous
// left.addEventListener("click",function(){
//     currentIndex--
//     if(currentIndex < 0){
//         currentIndex =  imglist.length-1
//     }
//     console.log(currentIndex);
//     console.log(imglist[currentIndex])
//     let nexing=imglist[currentIndex].getAttribute("src")
//     console.log(nexing);
//     layer.firstElementChild.style.backgroundImage = `url(${nexing})`
    
// })
function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = imglist.length - 1;
    }
    let nexing = imglist[currentIndex].getAttribute("src");
    layer.firstElementChild.style.backgroundImage = `url(${nexing})`;
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      showPreviousImage();
    }
  });
  left.addEventListener("click", showPreviousImage);

  // Sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "12%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeNav();
  }
});

// scroll
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleScrollToTopButton() {
  const scrollToTopButton = document.getElementById('scrollToTop');
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    scrollToTopButton.style.display = 'block'; 
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', toggleScrollToTopButton);
window.addEventListener('scroll', toggleScrollToTopButton);




