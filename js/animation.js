//页眉滚动
const header = document.querySelector("header");
const tab = document.querySelector(".TAB");
const tab1 = document.querySelector(".TAB1");
const dingb = document.querySelector(".dingb");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    header.style.backgroundColor = "rgb(255, 255, 255)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop >= tab1.offsetTop) {
    tab.style.backgroundColor = "rgb(255, 255, 255)";
    tab.style.position = "fixed";
    tab.style.display = "block";
    tab.style.zIndex = 1;
  } else {
    tab.style.backgroundColor = "";
    tab.style.position = "";
    tab.style.display = "none";
  }
});

//回到顶部
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > tab1.offsetTop) {
    dingb.style.opacity = 1;
  } else {
    dingb.style.opacity = 0;
  }
});

dingb.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

//TAB切换
const ul = document.querySelector(".TAB1 ul");
const imgs = document.querySelector(".imgs");
let srcData = [
  { src: "./imags/风之谷顶部.png" },
  { src: "./imags/天空之城顶部2.png" },
  { src: "./imags/龙猫顶部2.png" },
  { src: "./imags/魔女宅急便顶部.png" },
  { src: "./imags/红猪顶部2.png" },
  { src: "./imags/百变狸猫顶部2.png" },
  { src: "./imags/侧耳倾听顶部3.png" },
  { src: "./imags/幽灵公主顶部.png" },
  { src: "./imags/千与千寻顶部.png" },
  { src: "./imags/哈尔的移动城堡顶部.png" },
  { src: "./imags/金鱼公主顶部2.png" },
  { src: "./imags/起风了顶部.png" },
];

//电影按键
//reurn false 禁止函数内部执行其他的事件或者方法
var vol = 0.1; //1代表100%音量，每次增减0.1
var time = 10; //单位秒，每次增减10秒
const video = document.querySelectorAll("video");

const ul1 = document.querySelector(".TAB ul");
ul1.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    let id = +e.target.dataset.id;

    document.querySelector(".Tab .active1").classList.remove("active1");

    const itme = document.querySelector(`.Tab .Fzg:nth-child(${id})`);

    itme.classList.add("active1");

    imgs.src = srcData[id - 1].src;

    //同步上下li的active
    document.querySelector(".TAB1 .active").classList.remove("active");

    const li = document.querySelector(`.TAB1 ul li:nth-child(${id + 1})`);

    li.classList.add("active");
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    document.querySelector(".TAB1 .active").classList.remove("active");

    e.target.classList.add("active");

    let id = +e.target.dataset.id;

    document.querySelector(".Tab .active1").classList.remove("active1");

    const itme = document.querySelector(`.Tab .Fzg:nth-child(${id})`);

    itme.classList.add("active1");

    imgs.src = srcData[id - 1].src;
  }
});
//刷新回到顶部
// setTimeout(() => window.scrollTo(0, 0), 150);
