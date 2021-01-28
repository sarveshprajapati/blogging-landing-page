const header = document.querySelector("header");
const text = document.querySelector("#text")
window.addEventListener("scroll", () => {
    header.classList.toggle("stickHeader", window.scrollY > 0);
})



//bg change nfor first blog section
const firstBlog = document.querySelector(".firstBlog")
const carouselInfo = document.querySelector(".carouselInfo")
/*
window.addEventListener("scroll", () => {
    if (this.scrollY > this.innerHeight / 2) {
        firstBlog.classList.add("bgChange")
    }
    else {
        firstBlog.classList.remove("bgChange")
    }
})*/
const bgColors = [
    'rgba(255, 196, 0, 0.288)',
    'rgba(132, 0, 255, 0.288)',
    'rgba(0, 174, 255, 0.288)',
    'rgba(255, 0, 221, 0.288)',
    'rgba(255, 72, 0, 0.288)'
]
let color=0;
setInterval(()=>{
    
    if(color==bgColors.length){
        color=0;
    }
    else{
        firstBlog.style.background=bgColors[color];
        color++;
        //console.log(color)
    }
},1500);

const carouselImg = [
    'linear-gradient(to right ,rgba(0, 0, 0, 0),rgb(247, 247, 247)),url("./imgs/carousel1.jpeg")',
    'linear-gradient(to right ,rgba(0, 0, 0, 0),rgb(247, 247, 247)),url("./imgs/carousel2.jpeg")',
    'linear-gradient(to right ,rgba(0, 0, 0, 0),rgb(247, 247, 247)),url("./imgs/carousel3.jpeg")',
    'linear-gradient(to right ,rgba(0, 0, 0, 0),rgb(247, 247, 247)),url("./imgs/carousel4.jpeg")',
    'linear-gradient(to right ,rgba(0, 0, 0, 0),rgb(247, 247, 247)),url("./imgs/carousel5.jpeg")'
]
let img=0;
setInterval(()=>{
    
    if(img==carouselImg.length){
        img=0;
    }
    else{
        carouselInfo.style.background=carouselImg[img];
        img++;
        console.log(img)
    }
},2000);