let start,
	end,
	arrFriendlyNumbers = [],
	finalArr = [];

function getFriendlyNumbers(start, end) {//Функция составления общего массива дружественных чисел
 	start = prompt('Первое число: ', '');//Получение от пользователя начала и конца диапазона
	end = prompt('Второе число: ', '');
//Проверка на правильный тип данных
		if( (start > end) || (start < 0 || end < 0) || ( (isNaN(start) ) || (isNaN(end) ) ) 
			|| ( (start % 1 != 0) ) || ( (end % 1 != 0) ) ) {
			// console.log('Неверные данные!');
			return false;
		} else {
			for(let i = start; i < end; i++) {//Цикл для исключения посторения одинаковых пар дружественных чисел

 			let num1 = sumArr(findFriendlyNumbers(i)),
				num2 = sumArr(findFriendlyNumbers(num1));

			if(i == num2 && i != num1)   
				arrFriendlyNumbers.push(i);
		}
//Распределение дружественных чисел парами в массивы с объединением в двумерный массив
			for (let i = 0; i < arrFriendlyNumbers.length; i += 2) {
	  			if(arrFriendlyNumbers[i] != undefined && arrFriendlyNumbers[i+1] != undefined) {
	    			finalArr.push([ arrFriendlyNumbers[i], arrFriendlyNumbers[i+1] ]);
	  			}
			}
		console.log(finalArr);	
		return finalArr;	
		}	
 };
getFriendlyNumbers();
 
function findFriendlyNumbers(num) {//Функция поиска дружественных чисел
	let arr = [];
	
		for(let i = 1; i < num; i++) {
			if(num % i == 0 && arr.indexOf(i) == -1)//Проверка на деление без остатка и на повторение чисел в массиве
				arr.push(i);
		}
		return arr;//Возврат массива дружественных чисел
};
 
function sumArr(arr){//Функция нахождения суммы массива
	let sum = 0;
 
		for(let i = 0 ; i < arr.length; i++)
			sum += arr[i];
 
	return sum;
};

module.exports = {
    firstName: 'Viacheslav',
    secondName: 'Demchenko',
    task: getFriendlyNumbers
}
 
