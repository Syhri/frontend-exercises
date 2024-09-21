function pesanMakanan(namaMakanan, waktuPembuatan) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${namaMakanan} sudah siap!`);
    }, waktuPembuatan);
  });
}

function antarMakanan(namaMakanan, waktuAntar) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${namaMakanan} sudah diantar!`);
    }, waktuAntar);
  });
}

function pesanDanAntarMakanan() {
  const makanan1 = pesanMakanan("Pizza", 3000).then(() =>
    antarMakanan("Pizza", 2000)
  );
  const makanan2 = pesanMakanan("Burger", 2000).then(() =>
    antarMakanan("Burger", 1000)
  );

  Promise.all([makanan1, makanan2])
    .then((results) => {
      console.log("Semua makanan berhasil diantar:", results);
    })
    .catch((error) => {
      console.log("Ada kesalahan dalam pengantaran:", error);
    });
}

pesanDanAntarMakanan();
