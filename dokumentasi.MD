Running Project : nodemon ./bin/www

create table sequelize : sequelize-cli model:generate --name User --attributes name:string,label:string,picture:string,email:string,phone:string,website:string,summary:string

migration Database : sequelize-cli db:migrate

 "db_reset": "sequelize db:drop && sequelize db:create && sequelize db:migrate && sequelize db:seed:all"
sequelize db:drop && sequelize db:create && sequelize db:migrate 
create seed : sequelize-cli seed:generate --name proyek-seed
running seed : sequelize-cli db:seed:all

<!-- <div class="form-group">
            <label>Satuan</label>
            <select required id="satuan" name="satuan" class="form-control">
              <option value="">--- Pilih Satuan Barang ---</option>
              <% for (let i = 0; i < satuan.length; i++ ) { %>
              <option value="<%= satuan[i].id %>"><%= satuan[i].nama_satuan %></option>
              <% } %>
            </select>
          </div> -->
sequelize-cli model:generate --name Pengelola_wisata --attributes id_pengelola:string,NamaPengelola:string,email:string,password:string

sequelize-cli model:generate --name Pasir --attributes nama:string,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Semen --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Kayu --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Keramik --attributes nama:string,panjang:integer,lebar:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Triplek --attributes nama:string,panjang:integer,lebar:integer,tebal:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Semennat --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Semennat --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double


sequelize-cli model:generate --name PerhitunganBidangBangunan --attributes ProyekId:integer,nama:string,jenis_pengerjaan:string,panjangbid:float,tinggibid:float,panjangpin:float,tinggipin:float,panjangjen:float,tinggijen:float,luas_bidang:float,nama_batako:string,nama_semen:string,nama_pasir:string,jumlahkeperluanbatako:integer,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,jumlahdalamsak:float,metode:string,hargabatako:double,hargapasir:double,hargasemen:double,hargatotal:double
----------------------
sequelize-cli model:generate --name PerhitunganLantai --attributes ProyekId:integer,nama:string,jenis_pengerjaan:string,panjanglan:float,lebarlan:float,luas_lantai:float,toleransi:float,nama_keramik:string,nama_semen:string,nama_pasir:string,nama_semennat:string,jumlahkeperluankeramik:integer,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,jumlahkeperluannat:float,jumlahdalamsak:float,metode:string,hargakeramik:double,hargapasir:double,hargasemen:double,harganat:double,hargatotal:double
-----------------------------

sequelize-cli model:generate --name PerhitunganPlesteran --attributes ProyekId:integer,nama:string,jenis_pengerjaan:string,panjangdin:float,tinggidin:float,tebal:float,sisi:float,volume:float,nama_semen:string,nama_pasir:string,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,jumlahdalamsak:float,,metode:string,hargapasir:double,hargasemen:double,hargatotal:double


sequelize-cli model:generate --name PerhitunganAcian --attributes ProyekId:integer,nama:string,jenis_pengerjaan:string,panjangdin:float,tinggidin:float,sisi:float,luas:float,nama_semen:string,Jumlahkeperluansemen:float,jumlahdalamsak:float,metode:string,hargasemen:double,hargatotal:double

sequelize-cli model:generate --name PerhitunganUrugan --attributes ProyekId:integer,nama:string,jenis_pengerjaan:string,panjang:float,lebar:float,tinggi:float,volume:float,volumejadi:float,nama_pasir:string,Jumlahkeperluanpasir:float,jumlahdalamtruk:float,hargapasir:double,hargatotal:double


https://drive.google.com/drive/folders/1XTbsSeTTuXtbx3Byldiex4QZnXaPLFTn
lebar:integer,tebal:integer,SatuanId:integer,harga:double

sequelize migration:create --name add_column_panjang


sequelize-cli model:generate --name Material --attributes nama:string,panjang:integer,lebar:integer,tinggi:integer,tebal:integer,berat:integer,jumlah:integer,SatuanId:integer,JenisId:integer,harga:double

Perhitungan (SUM)
SELECT SUM(hargatotal),SUM(jumlahkeperluanbatako) FROM perhitunganbidangbangunans WHERE ProyekId="3" 

Perhitungan sum antar tabel

sequelize-cli model:generate --name PerhitunganPengecatan --attributes ProyekId:integer,nama:string,jenis_pengerjaan:string,panjangdin:float,tinggidin:float,sisi:float,luas_pengecatan:float,nama_cat:string,nama_plamur:string,jumlahkeperluancat:float,jumlahkeperluanplamur:float,hargacat:double,hargaplamur:double,hargatotal:double

