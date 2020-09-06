 
 Panduan Penggunaan Backend Program Bangunan Kita dari sisi Dev/Maintenance

 ~~~~~~~~~ Important ~~~~~~~~~~~~~~~~~~
 (*) Backend & Web Service ini dibuat dengan nodejs versi v12.13.1
 (*) Semua Proses dilakukan pada Command Prompt.
 (*) Jangan Menutup Command Prompt apabila ingin tetap menjalankan backend & Web Service pada sisi Local.

A. Instalasi nodejs
B. Instalasi Project
    * Setelah melakukan instalasi nodejs copy folder "Rest-Api-project-bangunan-master" pada CD kemudian paste ke folder 
      "C:\Program Files\nodejs".
    * Kemudian buka Command Prompt (cmd) dengan menekan tombol Win+R lalu ketikan "cmd" tanpa tanda ("").
    * Langkah Berikutnya masuk pada folder "C:\Program Files\nodejs\Rest-Api-project-bangunan-master".
    * Selanjutnya ketikan "npm install" pada Command Prompt.
    * Tunggu Proses instalasi sampai selesai...
    * Selesai.
    * Note* // Bila terjadi error pada proses instalasi atau library mengalami pengupdate-an maka ketikan "npm audit fix"
      kemudian ketikan "npm update" tunggu sampai proses selesai maka library akan terupdate ke versi yang terbaru.

C. Running Database
   Pada Command prompt ketikan beberapa baris code dibawah untuk mengimport database dari sisi backend:
    * Untuk membuat Database ketikan "sequelize db:create"
    * Untuk membuat Tabel pada Database ketikan "sequelize db:migrate"
    * Untuk menampilkan seeder/ list data percobaan yang telah dibuat pada folder project "Rest-Api-project-bangunan-master" kedalam database 
      ketikan "sequelize db:seed:all"
    * Untuk melakukan reset database "sequelize db:drop && sequelize db:create && sequelize db:migrate && sequelize db:seed:all"
    * Untuk menghapus database "sequelize db:drop

D. Running Project
   Setelah 3 tahapan mulai dari instalasi nodejs sampai Running Database sudah dilakukan kini tahap selanjutnya yaitu Running Project:
    * Ketikan "nodemon ./bin/www" pada Command Prompt
    * Selesai Project backend sudah berjalan
    * Untuk melakukan testing ketikan "Localhost:3000/api/v1" untuk melihat data API & "Localhost:3000/admin" untuk ke login admin

// Tutorial ini dibuat oleh Mpu Chanakya sesuai pada Github https://github.com/mpuchan/Rest-Api-project-bangunan
