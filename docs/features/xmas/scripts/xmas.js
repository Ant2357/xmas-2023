
const asciiArtList = [
      `
      ★
    ／&＼
   ／ @ ＼
  ／     ＼
 ／       ＼
／         ＼
^^^^^| |^^^^^
     | |
1
      `,
      `
      ★
    ／&＼
   ／p@i＼
  ／  &  ＼
 ／       ＼
／         ＼
^^^^^| |^^^^^
     | |
2
      `,
      `
      ★
    ／&＼
   ／p@i＼
  ／ ｡&i*＼
 ／   @   ＼
／         ＼
^^^^^| |^^^^^
     | |
3
      `
      ,
      `
      ★
    ／&＼
   ／p@i＼
  ／ ｡&i*＼
 ／i  @  *＼
／  @ ** i ＼
^^^^^| |^^^^^
     | |
4
      `
];

const asciiArtElement = document.getElementById('ascii-art');
let currentIndex = 0;

function displayNextAsciiArt() {
  asciiArtElement.textContent = asciiArtList[currentIndex];
  currentIndex = (currentIndex + 1) % asciiArtList.length;
}

displayNextAsciiArt()
// 1秒ごとにアスキーアートを変更
setInterval(displayNextAsciiArt, 1000);
