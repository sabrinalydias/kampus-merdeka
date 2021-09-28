/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// Analisis :
/*- Ada dua jenis scope yaitu: 
1) Global Scope; 2) Local Scope.
- Pengertian keduanya yaitu:
1) Global Scope adalah variable yand dideklarasikan di atas program atau di luar fungsi. 
2) Local Scope adalah variable yang hanya bisa diakses di dalam fungsi.*/

// - Contoh-contoh :
// a. Global Scope :
let x = "Sabrina Lydia";

function nama() {
   console.log(x);
}

nama(); //output: Sabrina Lydia

// b. Local Scope

let a = "Sabrina";
function nama() {
   let b = "Lydia"
   console.log(a + b);
}
nama();
console.log(a + b); //output: error


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// Analisis :
/*- Mariah.
- Deklarasi variable di awal hanya digunakan untuk menentukan tipe data dan beserta nilai default pada function. 
  Lalu, saat function dipanggil dengan argumen baru, maka value yang diinput ke function akan di overwrite.*/

///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey")); //output: Mariah