"use strict";

const calc = new Calculator();

console.log('5 + 3 = ', calc.add(5, 3)); // 8

console.log('10 - 4 = ', calc.subtract(10, 4)); // 6

console.log('3 * 6 = ', calc.multiply(3, 6)); // 18

console.log('8 / 2 = ', calc.divide(8, 2)); // 4

console.log(calc.divide(8, 0)); // Error

// const MIN_YEAR_OF_BIRTH = 1924;
// const MAX_YEAR_OF_BIRTH = 2014;
// const DEFAULT_YEAR_OF_BIRTH = 2000;
// const CURRENT_YEAR = 2024;
// const MIN_RATING = 0;
// const MAX_RATING = 100;
// const MAX_ATTENDANCE = 25;

// function Student() {
//   this._ratings = [];
//   this._attendance = [];
// }

// Object.defineProperties(Student.prototype, {
//   firstName: {
//     set: function (value) {
//       this._firstName =
//         typeof value === "string" && value.trim() ? value : "firstName";
//     },
//   },
//   secondName: {
//     set: function (value) {
//       this._secondName =
//         typeof value === "string" && value.trim() ? value : "secondName";
//     },
//   },
//   yearOfBirth: {
//     set: function (value) {
//       this._yearOfBirth =
//         typeof value === "number" &&
//         MIN_YEAR_OF_BIRTH < value < MAX_YEAR_OF_BIRTH
//           ? value
//           : DEFAULT_YEAR_OF_BIRTH;
//     },
//   },
// });

// Student.prototype.getAge = function () {
//   return CURRENT_YEAR - this._yearOfBirth;
// };

// Student.prototype.addRating = function (value) {
//   if (MIN_RATING < value < MAX_RATING) {
//     this._ratings.push(value);
//   }
// };

// Student.prototype.getAverageRating = function () {
//   if (this._ratings.length > 0) {
//     let ratingSum = 0;

//     for (let i = 0; i < this._ratings.length; i++) {
//       ratingSum += this._ratings[i];
//     }

//     return ratingSum / this._ratings.length;
//   } else {
//     return "No ratings yet";
//   }
// };

// Student.prototype.present = function () {
//   if (this._attendance.length <= MAX_ATTENDANCE) {
//     return this._attendance.push(true);
//   }
// };

// Student.prototype.absent = function () {
//   if (this._attendance.length <= MAX_ATTENDANCE) {
//     return this._attendance.push(false);
//   }
// };

// Student.prototype.summary = function () {
//   if (this._ratings.length === 0) {
//     return "It is impossible to count without ratings";
//   } else if (this._attendance.length === 0) {
//     return "No attendances yet";
//   } else {
//     const visits = this._attendance.filter((value) => value === true );

//     const averageVvisitsValue =visits.length / this._attendance.length;

//     if (this.getAverageRating() > 90 && averageVvisitsValue > 0.9) {

//       return "Excellent!"
//     } else if (this.getAverageRating() < 90 && averageVvisitsValue < 0.9) {

//       return "It's a bit bad...";
//     } else {

//       return "Good, but it can be better.";
//     }

//   }
// };

// const student1 = new Student();
// student1.firstName = "Shura";
// student1.secondName = "Petrov";
// student1.yearOfBirth = 1995;
// const ageOf1Student = student1.getAge();
// student1.addRating(90);
// student1.addRating(90);
// student1.addRating(100);
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.summary();
// const averageRatingOf1Student = student1.getAverageRating();
// const summaryOf1Student = student1.summary();

// console.log(
//   "student 1 => ",
//   student1,
//   "\nage of 1 student => " + ageOf1Student,
//   "\naverage rating of 1 student => " + averageRatingOf1Student,
//   "\nsummary of 1 student => " + summaryOf1Student,
// );

// const student2 = new Student();
// student2.firstName = "Igor";
// student2.secondName = "Mamedov";
// student2.yearOfBirth = 2003;
// const ageOf2Student = student2.getAge();
// student2.addRating(90);
// student2.addRating(90);
// student2.addRating(90);
// student2.present();
// student2.present();
// student2.present();
// student2.present();
// student2.present();
// student2.absent();
// student2.summary();
// const averageRatingOf2Student = student2.getAverageRating();
// const summaryOf2Student = student2.summary();

// console.log(
//   "student 2 => ",
//   student2,
//   "\nage of 2 student => " + ageOf2Student,
//   "\naverage rating of 2 student => " + averageRatingOf2Student,
//   "\nsummary of 2 student => " + summaryOf2Student,
// );

// const student3 = new Student();
// student3.firstName = "Roma";
// student3.secondName = "Novikov";
// student3.yearOfBirth = 1991;
// const ageOf3Student = student3.getAge();
// student3.addRating(75);
// student3.addRating(50);
// student3.addRating(50);
// student3.addRating(50);
// student3.present();
// student3.present();
// student3.present();
// student3.present();
// student3.present();
// student3.absent();
// student3.absent();
// student3.absent();
// student3.absent();
// student3.summary();
// const averageRatingOf3Student = student3.getAverageRating();
// const summaryOf3Student = student3.summary();

// console.log(
//   "student 3 => ",
//   student3,
//   "\nage of 3 student => " + ageOf3Student,
//   "\naverage rating of 3 student => " + averageRatingOf3Student,
//   "\nsummary of 3 student => " + summaryOf3Student,
// );
