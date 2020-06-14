Running Project : nodemon ./bin/www

create table sequelize : sequelize-cli model:generate --name User --attributes name:string,label:string,picture:string,email:string,phone:string,website:string,summary:string

migration Database : sequelize-cli db:migrate



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

sequelize-cli model:generate --name Pasir --attributes nama:string,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Semen --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Kayu --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Keramik --attributes nama:string,panjang:integer,lebar:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Triplek --attributes nama:string,panjang:integer,lebar:integer,tebal:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Semennat --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double

sequelize-cli model:generate --name Semennat --attributes nama:string,berat:integer,jumlah:integer,SatuanId:integer,harga:double


sequelize-cli model:generate --name PerhitunganBidangBangunan --attributes ProyekId:integer,BatakoId:integer,SemenId:integer,PasirId:integer,panjangbid:float,tinggibid:float,panjangpin:float,tinggipin:float,panjangjen:float,tinggijen:float,luas_bidang:float,jumlahkeperluanbatako:integer,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,jumlahdalamsak:float,metode:string,hargabatako:double,hargapasir:double,hargasemen:double,hargatotal:double

sequelize-cli model:generate --name PerhitunganLantai --attributes ProyekId:integer,KeramikId:integer,SemenId:integer,PasirId:integer,SemeNatId:integer,panjanglan:float,tinggilan:float,luas_lantai:float,toleransi:float,jumlahkeperluankeramik:integer,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,jumlahdalamsak:float,jumlahkeperluannat:float,metode:string,hargakeramik:double,hargapasir:double,hargasemen:double,harganat:double,hargatotal:double

sequelize-cli model:generate --name PerhitunganPlesteran --attributes ProyekId:integer,SemenId:integer,PasirId:integer,panjangdin:float,tinggidin:float,tebal:float,volume:float,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,jumlahdalamsak:float,jumlahdalamtruk:float,metode:string,hargapasir:double,hargasemen:double,hargatotal:double


sequelize-cli model:generate --name PerhitunganAcian --attributes ProyekId:integer,SemenId:integer,panjangdin:float,tinggidin:float,luas:float,Jumlahkeperluansemen:float,jumlahdalamsak:float,metode:string,hargasemen:double,hargatotal:double

sequelize-cli model:generate --name PerhitunganUrugan --attributes ProyekId:integer,PasirId:integer,panjang:float,lebar:float,tinggi:float,luas:float,luasjadi:float,Jumlahkeperluanpasir:float,jumlahdalamtruk:float,hargapasir:double,hargatotal:double


https://drive.google.com/drive/folders/1XTbsSeTTuXtbx3Byldiex4QZnXaPLFTn
lebar:integer,tebal:integer,SatuanId:integer,harga:double

sequelize migration:create --name add_column_panjang



