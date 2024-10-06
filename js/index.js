//////////////////For va ternary operatorga oid///////////////////////////

// 1
// for(let i=1; i<=50; i++){
//     if (i % 5 == 0) {
//         console.log("5 ga bo‘linadi");
//     }else if (i % 3 == 0) {
//         console.log("3 ga bo‘linadi");
//     }

//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log("5 va 3 ga bolinadi");
//     }
// }

// 2
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i >= 30 && i <= 70 && i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 3
// let toq=0;
// let musbat=0;

// for(let i=1; i <= 20; i++){
//     if (i % 2 == 1) {
//         toq++;
//     }else if (i > 0) {
//         musbat++;
//     }
// }

// console.log(toq);
// console.log(musbat);

// 4
// for(let i=1; i <= 100; i++){
//     if (i % 2 == 0 || i % 7 == 0) {
//         console.log("maxsus son");

//     }
// }

///////////////////////////Break continue ga oid//////////////////////////////////////

// 1
// for (let i = 1; i <= 100; i++) {
//   if (i == 25) {
//     break;
//   }
//   console.log(i);
// }

// 2
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// 3
// for(let i = 1; i<= 50;i++){
//     if( i > 30){
//      break
//     }
//     if(i < 10 || i > 30){
//      continue
//     }
//      console.log(i);
//  }

//////////////////////////Switch case ga oid///////////////////////

// 1
// let day = +prompt("hafta sonni kiritng")
// switch (day) {
//   case 1:
//     console.log(dushanba);
//     break;
//   case 2:
//     console.log(sheshanba);
//     break;
//   case 3:
//     console.log(chorshanba);
//     break;
//   case 4:
//     console.log(payshanba);
//     break;
//   case 5:
//     console.log(juma);
//     break;
//   case 6:
//     console.log(shanba);
//     break;
//   case 7:
//     console.log(yakshanba);
//     break;
//   default:
//     console.log("bunday kun mavjut emas");
//     break;
// }

// 2
// let oy = +prompt("oy raqamini kiting")
// switch (oy) {
//   case 1 && 2 && 12:
//     console.log(qish);
//     break;
//   case 3 && 4 && 5:
//     console.log(bahor);
//     break;
//   case 6 && 7 && 8:
//     console.log(yoz);
//     break;
//   case 9 && 10 && 11:
//     console.log(kuz);
//     break;
//   default:
//     console.log("bunday oy mavjud emas");
//     break;
// }

// 3
// let ball = +prompt("son");
// switch (ball) {
//   case 1:
//     console.log("juda yomon");
//     break;
//   case 2:
//     console.log("yomon");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("alo");
//     break;
//   default:
//     console.log("bunday baxolash mavjud emas");
//     break;
// }

// 4
// let tarif = +prompt("Elektr energiyasi tarifi");
// switch (tarif) {
//   case 1:
//     console.log("ekanom");
//     break;
//   case 2:
//     console.log("standart");
//     break;
//   case 3:
//     console.log("premium");
//     break;
//   default:
//     console.log("mavjut emas");
//     break;
// }

// 5
// let Meva = +prompt("Meva narxini aniqlash");
// switch (Meva) {
//   case 1:
//     console.log("olma");
//     break;
//   case 2:
//     console.log("apelsin");
//     break;
//   case 3:
//     console.log("banan");
//     break;
//   case 4:
//     console.log("uva");
//     break;
//   default:
//     console.log("bunday meva qolmabdi");
//     break;
// }

// 6
// let parol = +prompt("Foydalanuvchi parolini tasdiqlash");
// switch (parol) {
//   case 1:
//     console.log(" Parolni tiklash");
//     break;
//   case 2:
//     console.log("Parolni o'zgartirish");
//     break;
//   case 3:
//     console.log("Parolni o'zgartirish");
//     break;
//   default:
//     console.log("boshqatan urining");
//     break;
// }

//////////////////////While, do…while. Ushbu masalalarni har ikki operator orqali ishlansin////////////////

// 1
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// 1/2
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// 2
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 2/2
// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// 3
// let a
// while (true) {
//     a = +prompt('salom')

//     if (a>0) {
//         console.log(a);
//         break
//     }

// }

// 3/3
// let a;
// do {
//   a = +prompt("salom");

//   if (a > 0) {
//     console.log(a);
//     break;
//   }
// } while (true);



// 4
// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i+=2;
// }

// 4/4
// let i =0;
// do {
//     console.log(i);
//     i+=2;
// } while (i <= 20);


