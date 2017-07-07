# JS Training Fundamentals

### 1. Cek Environment dan Modul
Sebelum memulai submit tugas. Silahkan `fork` github repository ini.
Pastikan bahwa kamu memiliki module ini secara global:

1. `Node JS`
2. `Jest`
3. `flow`

```bash
# Check
$ node --version
$ v6.9.2

$ jest --version
$ v20.0.4

$ flow version
$ Flow, a static type checker for JavaScript, version 0.49.1
```

### 2. Mengecek Jawaban
Setiap challange terdapat pada branch. Untuk mengecek apakah `challange` sudah benar atau belum. Seilahkan jalankan.

```bash
$ npm run test
```

Script tersebut akan mengecek `lint`, `flow`, dan `jest` secara sekaligus. Silahkan lihat `package.json` untuk mengatahui script apa saja yang bisa dijalankan.

### 3. Mengecek Soal yang tersedia
Untuk melihat mengerjakan soal atau melihat soal yang tersedia. Silahkan lihat pada `branch` di repo ini.

```bash
$ git branch
# misalkan ada branch dengan nama add
$ *master
$ add

# menuju branch tersebut
$ git checkout add
```

### 4. Submit Jawaban
Untuk mengirimkan jawaban, silahkan buat branch baru dengan format `nama_branch_lama_nama_kamu` dan lakukan `PR` terhadap `master`.

```bash
#branch lama dengan nama add dan nama kamu misalnya john
$ git checkout -b "add-John"
$ git push origin add-John
```

Lalu lakukan `PR` di `master` branch.

Jika ada pertanyaan silahkan berkomunikasi melalu group `Slack` JS-Training.
