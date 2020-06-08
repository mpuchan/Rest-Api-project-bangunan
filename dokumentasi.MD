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


sequelize-cli model:generate --name Perhitungan Bidang Bangunan --attributes ProyekId:integer,BatakoId:integer,SemenId:integer,PasirId:integer,luas_bidang:float,jumlahkeperluanbatako:integer,jumlahkeperluanpasir:float,Jumlahkeperluansemen:float,metode:string,hargabatako:double,hargapasir:double,hargasemen:double,hargatotal:double

lebar:integer,tebal:integer,SatuanId:integer,harga:double


