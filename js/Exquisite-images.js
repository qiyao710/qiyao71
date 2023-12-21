const dingb = document.querySelector(".dingb");
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
  document.documentElement.scrollTop = 0;
});

//点击图片放大
const amplify = document.querySelector(".amplify");
const img = document.querySelector(".amplify img");
const icon = document.querySelector(".icon");
const shell = document.querySelector(".shell");
const body = document.querySelector("body");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
shell.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    amplify.style.display = "block";
    icon.style.display = "block";
    left.style.display = "block";
    right.style.display = "block";
    body.style.overflowY = "hidden";
    img.src = e.target.src;
    dingb.style.opacity = 0;
    //id用j变量接收
    let j = +e.target.dataset.id; //利用id变量控制图片轮播
    //上一张
    left.addEventListener("click", function () {
      if (j <= 1) {
        j = 614;
      }
      j--;
      img.src = ` ./Exquisite-images/图片 (${j}).jpg`;
      return j;
    });
    // 下一张
    right.addEventListener("click", function () {
      if (j >= 613) {
        j = 0;
      }
      j++;
      img.src = ` ./Exquisite-images/图片 (${j}).jpg`;
      return j;
    });
  }
});
icon.addEventListener("click", function () {
  amplify.style.display = "none";
  icon.style.display = "none";
  left.style.display = "none";
  right.style.display = "none";
  body.style.overflowY = "";
  dingb.style.opacity = 1;
});

//渲染图片
for (let i = 1; i < 613; i++) {
  const div = document.createElement("div");
  div.innerHTML = `<img src="./Exquisite-images/图片 (${i}).jpg" data-id="${i}"/>`;
  shell.appendChild(div);
}
