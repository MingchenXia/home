// redirect.js
// 将所有 /home/* 页面自动跳到新站对应路径
let path = window.location.pathname.replace(/^\/home/, "");
window.location.href = "https://mingchenxia.github.io" + path;
