
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

export function displayNextAsciiArt() {
  asciiArtElement.textContent = asciiArtList[currentIndex];
  currentIndex = (currentIndex + 1) % asciiArtList.length;
}
