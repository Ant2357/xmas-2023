import "pure-snow.js/style.css";
import { createSnow, showSnow } from "pure-snow.js";

import { displayNextAsciiArt } from "./features/xmas/scripts/xmas";

// 雪を降らせる
createSnow();
showSnow(true);

// クリスマスツリーAA更新
displayNextAsciiArt();
setInterval(displayNextAsciiArt, 1000); // 1秒ごとにアスキーアートを変更
