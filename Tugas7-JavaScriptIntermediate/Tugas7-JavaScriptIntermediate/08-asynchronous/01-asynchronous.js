//1.Apa itu synchronous?
// --> synchronous merupakan mode default dalam proses eksekusi suatu perintah pada kode.

//2. Apa itu asynchronous?
// --> asynchronous merupakan kode yang tidak akan langsung dieksekusi mengikuti jadwal eksekusi yang sudah ditentukan

//3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// --> Ya bisa, karena penggunaan synchronous sangat lemah digunakan jika digunakan untuk proses pengolahan yang sifatnya berat
//    yang dimana jika kita melakukan pekerjaan tersebut secara synchronous, proses runtime akan terblokade hingga pekerjaan tersebut selesai dijalankan.

//4. Apa hasil yang akan tercetak pada baris kode dibawah?
// --> 
/**
 *  first log : 1
    first log : 3
    first log : 2
    first log : 4
    first log : 5
    second log : 6
    second log : 6
    second log : 6
    second log : 6
    second log : 6
 */

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// --> karena variable i di deklarasi dengan var yang menjadikannya variabel global dan telah di ubah oleh proses first log karena i memiliki alamat yang sama

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
//--> mengganti var menjadi let
// for (var i = 1; i<=5; i++) {
//   console.log("first log: ", i); // 01 - Pertama
//   setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }

//jawaban 6
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}