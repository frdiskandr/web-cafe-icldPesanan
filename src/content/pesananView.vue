<template>
  <div class="main">
    <h2>Pesanan anda :)</h2>
    <content>
      <div class="pesanan">
        <!-- pesanan  keranjang -->
        <div class="card" v-for="keranjang in keranjangs" :key="keranjang.id">
          <div class="child">
            <div class="nama">
              <h3>{{ keranjang.products.nama }}</h3>
            </div>
            <img src="/public/coffe.jpg" alt="" />
            <div class="hargaProduct">
              <h5>Rp. {{ keranjang.products.harga }}</h5>
            </div>
            <div class="jumlahPesanan">
              <h5>Jumlah pesanan: {{ keranjang.jumlah_pemesanan }}</h5>
            </div>
          </div>
          <div class="button-update-pesanan">
            <div class="update-jumlah-pesan">
              <button @click="updateQuantity(keranjang, keranjang.jumlah_pemesanan - 1)">-</button>
              <button @click="updateQuantity(keranjang, keranjang.jumlah_pemesanan + 1)">+</button>
            </div>
            <button @click="removeItem_keranjang(keranjang.id)">Hapus</button>
          </div>
        </div>
      </div>

      <!-- end of containt -->

      <div class="total">
        <form action="" v-on:submit.prevent >
          <h1>Total harga: Rp. <span>{{ Totalharga }}</span></h1>
          <input type="text" name="costumername" id="costumer"
          v-model="oNpesans.nama" placeholder="name costumer" />
          <input type="number" name="meja" id="noMeja"
          v-model="oNpesans.noMeja" placeholder="No meja" />
          <p>harap masukan no meja dengan benar!</p>
          <button @click="Cekout">Bayar</button>
        </form>

      </div>
       </content>

      <!-- on proses pesanan -->

      <div class="proses-pesan-container">
        <h1>Antrian pesanan</h1>
        <div class="massage">
          <h5>Massage:</h5>
          <p>pesanan akan diantarkan sesuai dengan antrian, jadi mohon untuk bersabar :)</p>
        </div>

        <div class="pesanan">
          <!-- pesanan -->
          <div class="card-pesanan" v-for="(pesan, index) in pesanans" :key="pesan.id">
            <div class="child">
              <div class="nama"><h3>{{ pesan.nama }} </h3></div>
              <div class="hargaProduct"><h5>No Meja: {{ pesan.noMeja }}</h5></div>
              <div class="jumlahPesanan">
                <h5> Total harga: {{pesan.total_harga }}</h5> 
              </div>
              <p>pesanan: </p>
              <div class="list-pesanan" v-for="daftarpesan in pesan.keranjangs" :key="daftarpesan">
                <p>{{ daftarpesan.products.nama }} jumlah: {{ daftarpesan.jumlah_pemesanan }}</p>
              </div>
            </div>
                <span>No antrian: {{ index + 1 }}</span>
            
          </div>
          <h5>panjang antrian: {{ pesanans.length }}</h5>
        </div>
      </div>
   
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'KeranjangPesan',
  data() {
    return {
      keranjangs: [], // data keranjang
      oNpesans: {}, // data proses pemesanan
      pesanans: {}, // data pesanan yg telah diproses

    }
  },
  methods: {
    updateQuantity(keranjang, newQuantity) {
      if (newQuantity < 1)  return

      axios
        .put(`http://localhost:3000/keranjangs/${keranjang.id}`, {
          ...keranjang,
          jumlah_pemesanan: newQuantity
        })
        .then(() => {
          keranjang.jumlah_pemesanan = newQuantity
        })
        .catch((error) => {
          console.error(error)
        })
    },

   Cekout() {
     if (this.oNpesans.nama && this.oNpesans.noMeja) {     
       this.oNpesans.keranjangs = this.keranjangs
       this.oNpesans.total_harga = this.Totalharga
        
       axios.post('http://localhost:3000/pesanans', this.oNpesans)
         .then(() => {
           // clear keranjang
           this.keranjangs.map(function (item) {
             return axios.delete(`http://localhost:3000/keranjangs/${item.id}`)
           });
           this.$router.push({ path: '/pesanan-suscess' })

         })
        .catch((error) => {
          console.error(error)
        })
      
       console.log(this.oNpesans)
        console.log('pesanan sukses')
     } else {
        alert('nama dan nomor meja tidak boleh kosong')
        console.log('masuk else')
      }
    },

    removeItem_keranjang(id) {
      axios
        .delete(`http://localhost:3000/keranjangs/${id}`)
        .then(() => {
          this.keranjangs = this.keranjangs.filter((item) => item.id !== id)
        })
        .catch((error) => {
          console.error(error)
        })
    },

  },
  

  computed: {
    Totalharga() {
      return this.keranjangs.reduce(function (total, item) {
        return total + item.products.harga * item.jumlah_pemesanan
      }, 0)
    },

  },
  mounted() {
    axios
      .get('http://localhost:3000/keranjangs')
      .then((response) => {
        this.keranjangs = response.data
        console.log(this.keranjangs, 'ini data keranjang')
      })
      .catch((error) => {
        console.log(error)
      }),

      axios
        .get('http://localhost:3000/pesanans')
        .then((response) => {
          this.pesanans = response.data
          console.log(this.pesanans, "ini data pesanan")
         
        })
        .catch((error) => {
          console.log(error)
        })
  }
}
</script>

<style scoped>
.main {
  padding: 10px;
  padding-top: 7rem;
  width: 100%;
  min-height: 60vh;
  color: aliceblue;
}
.pesanan {
  margin-top: 3em;
}
.total {
  text-align: end;
}
.total h1{
  margin-right: 30px;
}
#costumer,
#noMeja {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  color: aliceblue;
  border: none;
  font-size: large;
  color: aliceblue;
  cursor: pointer;
  margin: 10px;
  box-shadow: 1px 1px 5px whitesmoke;
  text-align: center;
}
.total button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(240, 136, 61);
  border: none;
  font-size: large;
  color: aliceblue;
  cursor: pointer;
}

.card {
  display: flex;
  margin: 10px;
  text-align: start;
}
.card-pesanan{
  display: flex;
  margin: 10px;
  text-align: start;
  background-color: black;
}
.child {
  margin: 10px;
  flex-grow: 1;
  min-width: 100px;
}
.child img {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0px 0px 1px whitesmoke);
}
.button-update-pesanan {
  align-items: center;
  display: flex;
  gap: 8em;
}
.update-jumlah-pesan {
  display: flex;
  gap: 10px;
}
.update-jumlah-pesan button {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(240, 136, 61);
  border: none;
  font-size: large;
  color: aliceblue;
  cursor: pointer;
}
.button-update-pesanan button {
  justify-content: end;
  align-items: end;
  width: 60px;
  height: 50px;
  border-radius: 10px;
  position: relative;
}

button:hover {
  background-color: rgb(240, 136, 61);
  cursor: pointer;
  box-shadow: 0px 2px 15px whitesmoke;
}

.nama{
  min-width: 200px
}

.proses-pesan-container {
  text-align: center;
  border-top: 1px solid whitesmoke;
  margin-top: 13em;
}

.proses-pesan-container::before{
  content: '';
  position: absolute;
  background-color: black;
  right: 0;
  background-position: center;
  opacity: 0.9;
  width: 100%;
  min-height: 90vh;
  z-index: -1;
  box-shadow: 0px 2px 15px chocolate;
}

.proses-pesan-container h1{
  padding-top: 20px;
}

.massage {
  margin-top: 2em;
  text-align: start;
}
</style>
