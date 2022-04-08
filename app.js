"use strict";

// filter

// const cars = ["damas", "nexia", "malibu", "matiz", "mersidesBens"];

// const fitTerCars = cars.filter(function (element) {
//   return element.length < 6;
// });

// console.log(fitTerCars);

// Tarif:  filter bizga massiv ustida qanaqadir amallarni bajarishga yordam beradi.
// yani filter qilib keraklilarini olish mumkin boladi.

// map

// const ismlar = ["Doston", "Mardonov", "Sayfullo"];
// map xar doim bizga yangi obyect yaratib beradi..
// const ismlarNew = ismlar.map((item) => {
//   return item.toLowerCase();
// });

// console.log(ismlarNew);

//map methodi bizga turli xil amallarni bajarishga xam yordamga keladi
// masalan array ichidagi elementlarni ikki marta oshir nimadir qushish ayirish va hokazo..

// let doston = ["saloM", "HeLLo", "Qalaysan", "SaYFUllo"];
// doston = doston.map((element) => element.toLowerCase());

// console.log(doston);

// tepada eski karopkani agdarib tashlab yangi karopkaga malumotlarni solyapdi..

// every / some methodlari

// every --> xammsai --> BOOLEN qiymat qaytaradi...

// const data = [4, "doston", "b"];
// console.log(data.some((item) => typeof (item === "number")));

// some methodi --> bazilari degani yani bitta son bulsa buldi ishlaydi(true)

// console.log(data.every((item) => typeof item === "number"));

// every ni ishlatish da --> faqat xammasi number bulsa bizga true qiymat qaytaradi.
// bittasi bulsa xam number bulmasa false qaytaradi...

// reduce

// reduce bizga faqat bitta qiymat qaytaradi ...

// const arr = [4, 2, 8, 6];

// 0     4
// 4     2
// 6     8
// 14    6
// const result = arr.reduce((sum, number) => sum + number);

// console.log(result);

// const stringg = ["banan", "apple", "ananas", "xurmo"];

// const stringReduce = stringg.reduce((bir, ikki) => bir + ", " + ikki);
// console.log(stringReduce);
// javob:
//banan, apple, ananas, xurmo

// const objectt = {
//   doston: "person",
//   yusuf: "person",
//   dog: "animal",
//   cat: "animal",
// };

// const newArr = Object.entries(objectt)
//   .filter((item) => item[1] === "person")
//   .map((item) => item[0]);
// console.log(newArr);

/// 61-dars
//Mavzu: NPM haqida .JSON-server...

// npm package manager bizga tayyor kutubxona xisoblanadi
// masalam bootstrap jquery kabi .. managerlarni link orqali chaqirmasdan
// ishlatsak boladi yani yuklab olib turib npm ortqali..
