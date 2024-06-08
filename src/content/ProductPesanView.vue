<template>
  <div class="container">
    <h1>pesan:</h1>

    <div class="content">
      <h3>{{ gotoproduct.nama }}</h3>
      <img src="/public/coffe.jpg" alt="" />
      <h5>Harga : Rp.{{ gotoproduct.harga }}</h5>
      <br />
      <h5>Jumlah</h5>
      <form action="" v-on:submit.prevent>
        <input
          type="number"
          name="jumlah"
          id="jmlhpesan"
          placeholder="jumlah pesanan"
          v-model="dataPesanan.jumlah_pemesanan"
        />
        <div class="button-action">
          <button @click="dataPesanan.jumlah_pemesanan--">-</button>
          <button @click="dataPesanan.jumlah_pemesanan++">+</button>
        </div>
        <button type="submit" @click="pesan" id="action">Masukan ke keranjang</button>
      </form>
      <button id="action"><RouterLink to="/product">Kembali</RouterLink></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'goTopesan',
  data() {
    return {
      gotoproduct: {},
      dataPesanan: {
        jumlah_pemesanan: 1
      }
    }
  },
  methods: {
    pesan() {
      if (this.dataPesanan.jumlah_pemesanan >= 1) {
          this.dataPesanan.products = this.gotoproduct
          axios.post('http://localhost:3000/keranjangs', this.dataPesanan).then(() => {
              this.$router.push({ path: '/pesanan' })
                  .catch((error) => {
              console.log(error)
            })
          })
      } else {
        alert('Jumlah pesanan harus lebih dari 0')
      }
    }
  },

  mounted() {
    axios
      .get('http://localhost:3000/products/' + this.$route.params.id)
      .then((response) => {
        this.gotoproduct = response.data
        console.log(this.gotoproduct)
        console.log()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.container {
  padding-top: 10em;
  color: aliceblue;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(29, 29, 29);
  margin-top: 3em;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
}
.content h5 {
  padding: 10px;
}
#jmlhpesan {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  color: aliceblue;
  border: none;
  font-size: large;
  color: aliceblue;
  box-shadow: 1px 1px 4px whitesmoke;
  text-align: center;
}
.button-action {
  display: flex;
  gap: 10px;
}
.button-action button {
  margin: 10px;
  flex-grow: 1;
  height: 30px;
  border-radius: 10px;
  background-color: black;
  color: aliceblue;
  border: none;
  font-size: large;
  color: aliceblue;
  box-shadow: 1px 1px 4px whitesmoke;
  text-align: center;
  cursor: pointer;
}
#action {
  width: 200px;
  height: 50px;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: none;
  font-size: large;
  box-shadow: 1px 1px 4px black;
  text-align: center;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
}
#action a {
  text-decoration: none;
  color: black;
  font-size: large;
  font-weight: bold;
}

button:hover {
  background-color: rgb(240, 136, 61);
  cursor: pointer;
}

#action:hover {
  background-color: rgb(240, 136, 61);
  cursor: pointer;
}
</style>
