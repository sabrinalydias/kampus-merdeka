//Soal-01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arrayReverse) {
    let arrayBaru = [];
    for (let i = arrayReverse.length - 1; i >= 0; i--) {
        arrayBaru.push(arrayReverse[i]);
    }
    return arrayBaru;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//Soal-02
const array1 = [1, 3, 4, 1, 2, 8];
const array2 = [5, 6, 7, 8, 1, 3];

function getAverage(countAverage) { 
    let jumlahArray = 0;
    let num = [];
    for (let i = 0; i < countAverage.length; i++){
        jumlahArray += countAverage[i];
    }

    let banyakArray = countAverage.length;
    let average = jumlahArray / banyakArray;
    
    for (let i = 0; i < countAverage.length; i++){
        if(countAverage[i] > average){
            num.push(countAverage[i]);
        }
    }
    return num.length;
}

console.log(getAverage(array1));
console.log(getAverage(array2));

//Soal-03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, number) {
    let temporary = [];
    
    for(let i = 0; i < arr.length; i++){
        let number = arr[i];

        for(let j = 0; j < number.length; j++){
            temporary.push(number[j]);
        }
    }
    
    var count = temporary.length;
    for(let i = 0; i < count; i++)
    {
        if(temporary[i] === number){
            return temporary.indexOf(number);
        }
    }
    return 'null';
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));