import hello from "../with_module_js/hello.js";
import world from "../with_module_js/world.js";

import _ from "lodash";

import css from "../css/style.css";

window.onload = function () {
  document.getElementById("root").innerHTML = _.join([hello, world], " ");
  console.log("css", css);
};
