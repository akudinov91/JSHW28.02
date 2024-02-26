//Задача 1. Напишите программу, которая удваивает каждый элемент массива чисел.

// const numbers = [12, 56, 3, 9, 7];
// const doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }
// console.log(doubledNumbers);

//Задача 2. Создайте программу, которая находит сумму всех элементов числового массива.

// const numbers = [3, 4, 5, 6, 7];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("Сумма всех элементов массива:", sum);

//Задача 3. Напишите функцию, которая находит среднее значение чисел в массиве.

// const numbers = [11, 322, 23, 34, 45];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// const average = sum / numbers.length;
// console.log("Среднее значение чисел в массиве:", average);

//Задача 4. Создайте программу, которая находит наименьшее значение в числовом массиве.

// const numbers = [15, 23, 19, 71, 37];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log("Наименьшее значение в массиве:", min);

//Задача 5. Напишите функцию, которая находит наибольшее значение в числовом массиве.

// function findMax(array) {
//   if (array.length === 0) {
//     return null;
//   }

//   let max = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }

//   return max;
// }

// const numbers = [5, 2, 9, 1, 7];
// const maxNumber = findMax(numbers);
// console.log("Наибольшее значение в массиве: ", maxNumber);

//Задача 6. Создайте программу, которая находит все четные числа в массиве и выводит их.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
// console.log("Четные числа в массиве:", evenNumbers);

//Задача 7. Напишите функцию, которая находит количество вхождений определенного числа в массиве.

// function countOccurrences(array, target) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }
// const numbers = [1, 2, 3, 4, 2, 2, 5, 2];
// const targetNumber = 2;
// const occurrences = countOccurrences(numbers, targetNumber);
// console.log(
//   `Число ${targetNumber} встречается в массиве ${occurrences} раз(а).`
// );

//Задача 8. Создайте программу, которая находит сумму квадратов всех чисел в массиве.

// const numbers = [1, 2, 3, 4, 5];
// let sumOfSquares = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sumOfSquares += numbers[i] * numbers[i];
// }
// console.log("Сумма квадратов всех чисел в массиве:", sumOfSquares);

//Задача 9. Напишите функцию, которая находит индекс первого вхождения определенного числа в массиве.

// function findIndex(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// const numbers = [1, 3, 5, 7, 3, 9];
// const targetNumber = 3;
// const index = findIndex(numbers, targetNumber);
// if (index !== -1) {
//   console.log(
//     `Первое вхождение число ${targetNumber} в массиве находится по индексу ${index}.`
//   );
// } else {
//   console.log(`Число ${targetNumber} не найдено в массиве.`);
// }

//Задача 10. Создайте программу, которая переворачивает порядок элементов в массиве

// let array = [1, 2, 3, 4, 5];
// console.log("Исходный массив:", array);
// for (let i = 0; i < Math.floor(array.length / 2); i++) {
//   let temp = array[i];
//   array[i] = array[array.length - 1 - i];
//   array[array.length - 1 - i] = temp;
// }
// console.log("Массив после переворота:", array);
