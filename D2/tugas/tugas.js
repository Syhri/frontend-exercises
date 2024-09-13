// TODO: Buat program yang meminta user memasukkan umur (menggunakan prompt). Jika umur di atas 18, tampilkan pesan "Anda dewasa", jika tidak, tampilkan pesan "Anda belum dewasa".
const umur = parseInt(prompt("Masukan umur:"));
if (umur >= 18) {
  alert("Anda dewasa");
} else {
  alert("Anda belum dewasa");
}

// TODO: Tulis sebuah program yang mencetak angka dari 1 hingga 100, tetapi untuk angka kelipatan 3 cetak "Fizz", untuk angka kelipatan 5 cetak "Buzz", dan untuk angka kelipatan 3 dan 5 cetak "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  const habisDibagiTiga = i % 3;
  const habisDibagiLima = i % 5;
  if (habisDibagiTiga === 0 && habisDibagiLima === 0) {
    console.log("FizzBuzz");
  } else if (habisDibagiTiga === 0) {
    console.log("Fizz");
  } else if (habisDibagiLima === 0){
    console.log("Buzz");
  }
}

// TODO: Buat fungsi untuk menghitung potongan harga diskon, jadi parameter pertama akan menerima harganya dan parameter kedua akan menerima persentasi diskon
const hargaDiskon = (harga, diskon) => harga - (diskon * harga);
console.log(hargaDiskon(100, 80/100));
