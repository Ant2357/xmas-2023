
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
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
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
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
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
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
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
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
      `
];

const asciiArtElement = document.getElementById('ascii-art');
let currentIndex = 0;

export function displayNextAsciiArt() {
  asciiArtElement.textContent = asciiArtList[currentIndex];
  currentIndex = (currentIndex + 1) % asciiArtList.length;
}
