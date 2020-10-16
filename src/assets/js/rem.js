const baseSize = 192;
//el
function setRem() {
  // el = el || "lt_box";
  const scale = document.documentElement.clientWidth / 1920;
  document.documentElement.style.fontSize = baseSize * scale + "px";
}

window.addEventListener("resize", () => {
  setRem();
});

module.exports = {
  setRem: setRem
};
