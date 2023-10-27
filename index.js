const prompt = require("prompt-sync")();

let buyuk = prompt("büyük harf giriniz:");
if (
  !(
    buyuk.length == 1 &&
    buyuk == buyuk.toUpperCase() &&
    buyuk != buyuk.toLowerCase()
  )
) {
  throw new Error(buyuk + " büyük harf değil");
}
let kucuk = prompt("küçük harf giriniz:");
if (
  !(
    kucuk.length == 1 &&
    kucuk != kucuk.toUpperCase() &&
    kucuk == kucuk.toLowerCase()
  )
) {
  throw new Error(kucuk + " küçük harf değil");
}
let sayi1 = prompt("birinci sayı:");
if (!(sayi1.length == 1 && sayi1 >= "0" && sayi1 <= "9")) {
  throw new Error(sayi1 + " sayı değil");
}
let sayi2 = prompt("ikinci sayı:");
if (!(sayi2.length == 1 && sayi2 >= "0" && sayi2 <= "9")) {
  throw new Error(sayi2 + " sayı değil");
}
let simge = prompt("simge giriniz:");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 10; i++) {
  let pass = buyuk + kucuk;
  //kullanıcıdan 5 karakter aldık geriye en az 4 kaldı
  let max = getRandom(4, 20);
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < max; i++) {
    let digit = chars[getRandom(0, chars.length - 1)];
    pass += digit;
  }

  pass += sayi1 + sayi2 + simge;

  console.log(pass);
}
