!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;t.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}));var a=null}();
//# sourceMappingURL=01-color-switcher.a3851c51.js.map
