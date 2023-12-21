//页眉滚动半透明
const header = document.querySelector("header");
const h1 = document.querySelector("header div h3");
const dingb = document.querySelector(".dingb");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 60) {
    h1.style.color = "#4dbdf1";
    header.style.backgroundColor = "rgb(255, 255, 255,0.7)";
  } else {
    h1.style.color = "";
    header.style.backgroundColor = "";
  }
});

//回到顶部
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1000) {
    dingb.style.opacity = 1;
  } else {
    dingb.style.opacity = 0;
  }
});
dingb.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
//刷新回到顶部
// setTimeout(() => window.scrollTo(0, 0), 150);
