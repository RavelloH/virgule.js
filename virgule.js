// Author:RavelloH
// LICENCE: MIT
// Repo src: github.com/RavelloH/virgule.js
const randArrMin = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const randArr = [
  "あ",
  "ぃ",
  "い",
  "ぅ",
  "う",
  "ぇ",
  "え",
  "ぉ",
  "お",
  "か",
  "が",
  "き",
  "ぎ",
  "く",
  "ぐ",
  "け",
  "げ",
  "こ",
  "ご",
  "さ",
  "ざ",
  "し",
  "じ",
  "す",
  "ず",
  "せ",
  "ぜ",
  "そ",
  "ぞ",
  "た",
  "だ",
  "ち",
  "ぢ",
  "っ",
  "つ",
  "づ",
  "て",
  "で",
  "と",
  "ど",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ば",
  "ぱ",
  "ひ",
  "び",
  "ぴ",
  "ふ",
  "ぶ",
  "ぷ",
  "へ",
  "べ",
  "ぺ",
  "ほ",
  "ぼ",
  "ぽ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "ゃ",
  "や",
  "ゅ",
  "ゆ",
  "ょ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "ゎ",
  "わ",
  "ゐ",
  "ゑ",
  "を",
  "ん",
  "ゔ",
  "ゕ",
  "ゖ",
  "ァ",
  "ア",
  "ィ",
  "イ",
  "ゥ",
  "ウ",
  "ェ",
  "エ",
  "ォ",
  "オ",
  "カ",
  "ガ",
  "キ",
  "ギ",
  "ク",
  "グ",
  "ケ",
  "ゲ",
  "コ",
  "ゴ",
  "サ",
  "ザ",
  "シ",
  "ジ",
  "ス",
  "ズ",
  "セ",
  "ゼ",
  "ソ",
  "ゾ",
  "タ",
  "ダ",
  "チ",
  "ヂ",
  "ッ",
  "ツ",
  "ヅ",
  "テ",
  "デ",
  "ト",
  "ド",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "バ",
  "パ",
  "ヒ",
  "ビ",
  "ピ",
  "フ",
  "ブ",
  "プ",
  "ヘ",
  "ベ",
  "ペ",
  "ホ",
  "ボ",
  "ポ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ャ",
  "ヤ",
  "ュ",
  "ユ",
  "ョ",
  "ヨ",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ヮ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ヴ",
  "ヵ",
  "ヶ",
  "ヷ",
  "ヸ",
  "ヹ",
  "ヺ",
  "ー",
  "ヾ",
  "ㄅ",
  "ㄆ",
  "ㄇ",
  "ㄈ",
  "ㄉ",
  "ㄊ",
  "ㄋ",
  "ㄌ",
  "ㄍ",
  "ㄎ",
  "ㄏ",
  "ㄐ",
  "ㄑ",
  "ㄒ",
  "ㄓ",
  "ㄔ",
  "ㄕ",
  "ㄖ",
  "ㄗ",
  "ㄘ",
  "ㄙ",
  "ㄝ",
  "ㄞ",
  "ㄟ",
  "ㄠ",
  "ㄡ",
  "ㄢ",
  "ㄣ",
  "ㄤ",
  "ㄥ",
  "ㄦ",
  "ㄧ",
  "ㄨ",
  "ㄩ",
  "〇",
  "口",
  "甲",
  "乙",
  "丙",
  "丁",
  "戊",
  "己",
  "庚",
  "辛",
  "壬",
  "癸",
];

function virgule(context) {
  let result = [];

  // context重组
  let contextArr = [];
  for (let i = 0; i < context.length; i++) {
    contextArr.push(context[i]);
  }

  // 添加virgule
  let numVirgule = 0;
  let text = "";

  while (numVirgule < context.length) {
    if (escape(contextArr[numVirgule]).indexOf("%u") < 0) {
      if (contextArr[numVirgule] == " ") {
        text += " ";
      } else {
        text += "/";
      }
    } else {
      text += "//";
    }
    numVirgule++;
    result.push(text);
  }

  // 随机文字进入

  let numIn = 0;
  let numCharacter = 0;

  let originText = result[result.length - 1];
  let cacheText;
  while (numIn < contextArr.length) {
    numIn++;
    cacheText = "";
    numCharacter = 0;
    for (i = 0; i < numIn; i++) {
      if (escape(contextArr[i]).indexOf("%u") < 0) {
        if (contextArr[i] == " ") {
          cacheText += " ";
          numCharacter += 1;
        } else {
          //单字符
          let rand = Math.floor(Math.random() * randArrMin.length);
          cacheText += randArrMin[rand];
          numCharacter += 1;
        }
      } else {
        // 双字符
        let rand = Math.floor(Math.random() * randArr.length);
        cacheText += randArr[rand];
        numCharacter += 2;
      }
    }
    result.push(cacheText + originText.slice(numCharacter, originText.length));
  }

  // 原始文字写入
  let numWrite = 0;
  originText = result[result.length - 1];
  while (numWrite < contextArr.length) {
    numWrite += 1;
    cacheText = "";
    numCharacter = 0;
    for (i = 0; i < numIn; i++) {
      if (escape(contextArr[i]).indexOf("%u") < 0) {
        if (contextArr[i] == " ") {
          cacheText += " ";
          numCharacter += 1;
        } else {
          //单字符
          let rand = Math.floor(Math.random() * randArrMin.length);
          cacheText += randArrMin[rand];
          numCharacter += 1;
        }
      } else {
        // 双字符
        let rand = Math.floor(Math.random() * randArr.length);
        cacheText += randArr[rand];
        numCharacter += 2;
      }
    }
    result.push(
      context.slice(0, numWrite) +
        cacheText.slice(numWrite, cacheText.length) +
        originText.slice(numCharacter, originText.length)
    );
  }
  return result;
}

module.exports = virgule;
