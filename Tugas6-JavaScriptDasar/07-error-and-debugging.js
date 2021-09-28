/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

//Analisis :
/*Perbedaan keempat error tersebut terletak dimana itu terjadi dan seperti apa bentuknya.
- Type Error terjadi karena operasi tidak bisa dijalankan karena value tidak sesuai dengan tipenya.
- Reference Error terjadi ketika mencoba mengarahkan kode ke variable yang tidak ada.
- Range Error terjadi ketika mencoba melempar value sebagai argumen pada fungsi yang tidak mengizinkan value di luar range-nya.
- Syntax Error terjadi pada compile time. Biasa muncul ketika ada salah pengetikan pada code yang ditulis. Contoh: kurang tanda kurung, typo, dll.*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// Analisis :
/*  - Menghasilkan error undefined.
    - Reference Error.  
    - Console log memanggil dua variable beserta nilainya yang dideklarasikan setelah console.log dijalankan. 
    Padahal berdasarkan aturan variable harus dideklarasikan dahulu sebelum digunakan.*/
