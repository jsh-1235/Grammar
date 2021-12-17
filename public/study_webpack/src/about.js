import sum from "../with_module_js/sum";

import css from "../css/style.css";

window.onload = function () {
  document.getElementById("root").innerHTML = `<h1>sum = ${sum([1, 2, 3, 4, 5])}</h1>`;
  console.log("css", css);
};
