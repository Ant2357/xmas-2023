
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
