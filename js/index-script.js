//加载动画
const loads = document.querySelector(".load");
const bodys = document.querySelector("body");
const span = document.querySelectorAll(".load span");
let j = 0;
let x = setInterval(function () {
  span[j].className = "donghua";
  if (j >= 11) {
    clearInterval(x);
  }
  j++;
}, 250);
function getload() {
  loads.classList.add("loads");
  bodys.style.overflowY = "visible";
}
setTimeout(getload, 3900);

// 轮播图
let srcData = [
  { src: "./imags/ponyo004.jpg" },
  { src: "./imags/howl050.jpg" },
  { src: "./imags/totoro044.jpg" },
  { src: "./imags/kazetachinu024.jpg" },
  { src: "./imags/chihiro045.jpg" },
];
const img = document.querySelector(".xiangzi img");
const dahezi = document.querySelector(".dahezi");
let i = 0;
// 中间小按钮
const li1 = document.querySelector(".li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const li4 = document.querySelector("#li4");
const li5 = document.querySelector("#li5");
li1.addEventListener("click", function () {
  img.src = "./imags/ponyo004.jpg";
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(1)`).classList.add("li1");
  i = 0;
});
li2.addEventListener("click", function () {
  img.src = "./imags/howl050.jpg";
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(2)`).classList.add("li1");
  i = 1;
});
li3.addEventListener("click", function () {
  img.src = "./imags/totoro044.jpg";
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(3)`).classList.add("li1");
  i = 2;
});
li4.addEventListener("click", function () {
  img.src = "./imags/kazetachinu024.jpg";
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(4)`).classList.add("li1");
  i = 3;
});
li5.addEventListener("click", function () {
  img.src = "./imags/chihiro045.jpg";
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(5)`).classList.add("li1");
  i = 4;
});
// 左右按键
const left = document.querySelector(".left");
const right = document.querySelector(".right");
right.addEventListener("click", function () {
  i++;
  if (i == 5) {
    i = 0;
  }
  img.src = srcData[i].src;
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(${i + 1})`).classList.add("li1");
});
left.addEventListener("click", function () {
  i--;
  if (i < 0) {
    img.src = srcData[4].src;
    i = 4;
  } else if (i >= 0) {
    img.src = srcData[i].src;
  }
  document.querySelector(".ul1 .li1").classList.remove("li1");
  document.querySelector(`.ul1 li:nth-child(${i + 1})`).classList.add("li1");
});
// 轮播定时器
let f = setInterval(function () {
  // js自动调用函数  对象元素.类型()
  right.click();
}, 2500);
dahezi.addEventListener("mouseenter", function () {
  clearInterval(f);
});
dahezi.addEventListener("mouseleave", function () {
  f = setInterval(function () {
    right.click();
  }, 2500);
});

//页眉滚动半透明
const header = document.querySelector("header");
const h1 = document.querySelector("header div h3");
const a = document.querySelectorAll("header ul li a");
const sta = document.querySelector(".statement");
const p = document.querySelectorAll(".statement p");
const dingb = document.querySelector(".dingb");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 60) {
    h1.style.color = "#4dbdf1";
    header.style.backgroundColor = "rgb(255, 255, 255,0.7)";
  } else {
    h1.style.color = "";
    header.style.backgroundColor = "";
  }
  //滚动到指定区域内容入场
  const f = document.documentElement.scrollTop;
  if (f >= 730) {
    for (let i = 0; i < p.length; i++) {
      p[i].style.transform = "translateX(0px)";
      p[i].style.transition = `all  ${i + 0.5}s`;
    }
  }
});

//刷新回到顶部
setTimeout(() => window.scrollTo(0, 0), 150);

//回到顶部
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1000) {
    dingb.style.opacity = 1;
  } else {
    dingb.style.opacity = 0;
  }
});
dingb.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
