/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

let salary = 20000000
/// EDIT HERE
function taxCalc(salary) {
    if(salary < 5000000){
        return 0;
    }
    else if(5000000 <= salary && salary < 10000000){
        return (5/100*salary);
    }
    else if(10000000 <= salary && salary < 20000000){
        return (10/100*salary);
    }
    else if (salary >= 20000000){
        return (20/100*salary);
    }
}

console.log(taxCalc(salary));


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000


let weight = 80;
let height = 160;

function checkBMI(weight,height) {
    let BMI = ((weight/(height**2)) * 10000);
    if(BMI < 18.5){
        return "under weight"
    }
    else if(18.5 < BMI && BMI < 24.9){
        return "normal"
    }
    else if(25 < BMI && BMI < 29.5){
        return "over weight"
    }
    else if(30 < BMI && BMI < 34.9){
        return "obese"
    }
    else {
        return "extremely obese"
    }
}

console.log(checkBMI(weight,height));

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

let sentence = "hello bandung";
var temp = new Array();
function convToUpperCase(sentence) {
    let arr = sentence.split(" ")
    if(arr.length > 1){
        for(let i=0 ; i<arr.length ; i++){
            let j = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
            temp[i] = j;
        }
        return temp[0]+" "+temp[1]
    }
    else if(arr.length == 1){
        return arr[0].charAt(0).toUpperCase()+arr[0].slice(1)
    }
}
console.log(convToUpperCase(sentence));


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya


let word = "alloha"

function firstNonRepeatedChar(word) {
    let object = {}
    if (word.includes(' ')) {
        return 'kata tidak boleh dipisah';
    } else {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (object[char]) {
                object[char]++
            } else {
                object[char] = 1
            }
        }
        let str = ''
        for (const [key, value] of Object.entries(object)) {
            if (value === 1) {
                str = key
                break
            }
        }
        return str
    }
}

console.log(firstNonRepeatedChar(word));