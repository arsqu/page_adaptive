// 设置 rem 函数
function setRem() {
  var htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  var htmlDom = document.getElementsByTagName("html")[0];
  htmlDom.style.fontSize = htmlWidth / 20 + "px";
}
// 初始化
setRem();
