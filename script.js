const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
//Массив обьектов
const arrayName = [
	{ name: 'Oleg', age: 23 },
	{ name: 'Vadim', age: 29 },
	{ name: 'Sasha', age: 33 },
	{ name: 'Olga', age: 13 },
];
//Клики по кнопке и их собития
btn.addEventListener('click', () => {
	if (text.value == 'google') {
		alert('Yandex круче. Но это не точно');
	} else {
		alert(text.value);
	}
	alert(arrayName[0].name);

	function superSum(a, b) {
		return a + b;
	}
	alert(superSum(2, 3));
});
//переменные Max & Min
let randomNum = [1, 4, -23, 34, 9, -54, 52, 120, -30];
let min = 0;
let max = 0;
// console.log(randomNum);
for (i = 0; i < randomNum.length; i++) {
	if (randomNum[i] < min) {
		min = randomNum[i];
	} else if (randomNum[i] > max) {
		max = randomNum[i];
	}
}
console.log(min);
console.log(max);
// Изменение переменных
let a = '2,3,4';
let b = '4,3,2';
// let c;

//b = [a, (a = b)][0];

[a, b] = [b, a];

/*c = a;
a = b;
b = c;*/
let RN = [1, 4, 2, 20, 14];
console.log(a);
console.log(b);
// Max number with metod
// function findMax(arr) {
// 	return Math.max.apply(null, arr);
// }
//max number with alg

// function findMax(arr) {
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0) {
// 			return Math.max.apply(null, arr);
// 		}
// 	}
// }
function findMax(arr, max = arr[0]) {
	for (i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}
console.log(findMax(randomNum));
setTimeout('alert(findMax(RN))', 3000);
