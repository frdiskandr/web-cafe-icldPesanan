<template>

<div class="best-product-container">
    <h1>Admin!</h1>
      <h2>List pesanan: </h2>
      <div class="best-product">

        <div class="card" v-for="(pesan, index) in pesanans" :key="pesan.id">
          <div class="img"><img src="/public/logocafe.jpeg" alt=""> <p>Antrian: {{ index + 1 }}</p></div>
          <div class="content-container">
            <h3>{{ pesan.nama }}</h3>
            <p>No meja: {{ pesan.noMeja }}</p>
            <div class="list-pesanans">
                 <span>Pesanan:</span>
                 <p v-for="daftarpesan in pesan.keranjangs" :key="daftarpesan.id">
                  {{ daftarpesan.products.nama }} : {{ daftarpesan.jumlah_pemesanan }}x
                </p>
            </div>
          </div>
          <div class="button-container">
            <p><span>Total harga: </span> Rp.{{ pesan.total_harga }}</p>
            <button @click="click(pesan.id)">Pesanan diterima</button>
          </div>
        </div>
      </div>
    </div>

<!-- <div class="button-update-pesanan">
              <button @click="removeItem_pesanan(pesan.id)">Hapus</button>
            </div> -->
</template>

<script>
import axios from 'axios'

export default {
    name: 'Is_admin',

    data() {
        return {
            pesanans: {},
        }
  },

  methods: {

    click(id) {
      const confirm = window.confirm('Are you sure?')

      if (confirm) {
        axios
        .delete(`http://localhost:3000/pesanans/${id}`)
        .then(() => {
          this.pesanans = this.pesanans.filter((item) => item.id !== id)
        })
        .catch((error) => {
          console.error(error)
        })
      } else {
        console.log('tidak terkonfirmasi')
      }
    },
  },

    mounted() {
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


.best-product-container h1 {
  text-align: center;
  padding-top: 3em;
  color: azure;
}
.best-product-container h2{
    text-align: start;
    color: azure;
}
.best-product {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
  border-bottom: 3px solid whitesmoke;
}
.card {
  max-width: 300px;
  min-height: 100px;
  max-height: 450px;
  flex-grow: 1;
  flex-basis: 250px;
  background-color: black;
  box-sizing: border-box;
  border-radius: 25px;
  overflow: hidden;
  display: flexbox;
  transition: 0.5s;
  box-shadow: 1px 1px 10px seashell;
  color: aliceblue;
  padding: 3px;
}
.card:hover{
  box-shadow: 0 0 20px rgb(168, 81, 18);
  transform: scale(1.1);
}
.img p{
  text-align: center;
  font-weight: bold;
  color: rgb(118, 208, 238);
  padding: 10px;
  text-align: end;
}
.img img{
  width: 80%;
  height: 100px;
  object-fit: cover;
  object-position: -20px;
  border-radius: 15px 150px 0 0;
  filter: drop-shadow(0 5 0.75rem black);
  transition: 1s;
}
.img img:hover{
  transform: scale(1.1);
  box-shadow:20px -5px 15px  whitesmoke; ;
}
.list-pesanans{
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  min-height: 150px;
  max-height: 150px;
  overflow: auto;
}
.list-pesanans span{
  color: rgba(255, 255, 0, 0.966);
}

.button-container{
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
.button-container span{
  color: rgb(8, 151, 8);
}
.button-container button{
  padding: 15px;
  font-size: large;
  border-radius: 10px;
  transition: 0.5s;
}

button:hover{
  background-color: rgb(240, 136, 61);
  cursor: pointer;
}

</style>