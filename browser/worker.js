const input = document.getElementById("urlInput");
const button = document.getElementById("goBtn");
const main = document.getElementById("main");
const content = document.getElementById("content");
const homeBtn = document.getElementById('homeBtn');
async function go() {
  let _0x17fb3e = input.value.trim();
  if (!_0x17fb3e) {
    return alert("Enter a URL!");
  }
  if (!/^https?:\/\//i.test(_0x17fb3e)) {
    _0x17fb3e = "https://" + _0x17fb3e;
  }
  try {
    const _0x26b4e7 = await fetch("https://classroommath.t9osta.workers.dev/?url=" + encodeURIComponent(_0x17fb3e));
    const _0x40269a = await _0x26b4e7.text();
    main.style.display = "none";
    homeBtn.style.display = "block";
    content.style.display = "block";
    content.innerHTML = _0x40269a;
  } catch (_0x209214) {
    alert("Failed to load site: " + _0x209214.message);
  }
}
function goHome() {
  content.style.display = "none";
  main.style.display = "flex";
  homeBtn.style.display = "none";
  content.innerHTML = '';
}
button.addEventListener("click", go);
input.addEventListener("keydown", _0x5ddbe2 => {
  if (_0x5ddbe2.key === "Enter") {
    go();
  }
});