// Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.  Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию. 
// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает


let num1 = Number (prompt ("students"));
let num2 = Number (prompt ("chair"));

if (num1>num2) {
    console.log("chairs not enough")
} else {
    console.log ("chairs enough")
}


// Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. 
// Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш“. 
// вывод: старт, 1, ... 9, финиш
console.log ("start");
for (let i=1; i<10; i++) {
    console.log (i);

}
console.log ("finish");



// Написать цикл, который выводит те числа из массива, которые больше или равны 15.
let Numbers = [15, 17, 19, 20, -2, -10, 0, -15, -20];
for(let i = 0; i< Numbers.length; i++ ) {
    if (Numbers [i]>=15){
        console.log(Numbers [i]);
    }
}


// Написать цикл, который выводит только нечетные числа массива.

for (let i = 0; i <numbers.lenght)



// Вывести только те значения массива, индекс которых кратен трем.

let numbers = [1, 5, 40, 3, 15, 26, 6, 33, 0];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 1){
        console.log(numbers[i]);
    }
}


// Найти сумму чисел, чей индекс равен значению элемента.

//  0,  1,  2, 3,  4,   5, 6,  7, 8
let array = [10, 23, 2, 40, -12, 5, 12, 7, 0];


array[0] = 10
array[1] = 23
array[2] = 2
array[3] = 40
array[4] = -12
array[5] = 5

let sum = 0;

for(let i = 0; i<array.length; i++){
    if(i == array[i]){
        sum = sum + array[i];
    }
}

console.log(sum);
// Найти сумму нечетных чисел и вывести в консоль.
// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.


console.log('Найти сумму нечетных чисел и вывести в консоль');

let sum1;
sum1 = 0;
for (let i = 0; i < array1.length; i++)
{
    if(array1[i]%2 !=0) {
        sum1 = sum1 + array1[i];   
    }
}
console.log(sum1);


// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.


let sum1 =0;
         let sum2 = 0;

            let numbers = [1, 5, 40, 3, 15, 26, 6, 33, 0];
            for (let i=0; i<numbers.length; i++) {
                if (numbers[i]%2==0) {sum1=sum1+numbers[i]}
                else{sum2=sum2+numbers[i];}
            }
            if(sum1<sum2){console.log(sum2-sum1)}
            else{console.log(sum1-sum2);}







