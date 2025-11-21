// redirect.js
// 将 /home/* 跳转到新站对应路径
(function() {
    let path = window.location.pathname.replace(/^\/home/, "");
    let newUrl = "https://mingchenxia.github.io" + path;
    window.location.href = newUrl;
})();
