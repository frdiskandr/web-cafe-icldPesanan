<script setup>
</script>
<template>
  <div class="content">
    <div class="pesan-container">
      <h1>Massage:</h1>
      <p>ini adalah daftar menu yang ada di cafe kami, silahkan pilih menu sesuai dengan yang anda inginkan dengan menclick tombol pesan dan memasukan jumlah pesanan yang anda inginkan.</p>
    </div>

    <div class="best-product-container">
      <h1>Best Product</h1>
      <div class="best-product">

        <div class="card" v-for="product in bestProduct" :key="product.id">
          <img src="/public/coffe.jpg" alt="img" />
          <h3 id="name">{{ product.nama }}</h3>
          <p class="deskripsi">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi aliquam velit
            debitis animi est facilis totam consequatur ipsa, adipisci nam? Porro unde
          </p>
          <p class="stok">Rp. {{ product.harga }}</p>
          <button v-bind="{disabled: !product.is_ready}">
          <RouterLink :to="'/product/' +product.id">  {{ productCek(product.is_ready)}} </RouterLink> 
          </button>
        </div>

      </div>
    </div>

    <div class="list-product-container">
      <h1>List Product</h1>
      <div class="list-product">

        <div class="card" v-for="product in products" :key="product.id" v-bind="{disabled: !product.is_ready}">
          <img src="/public/coffe.jpg" alt="img" />
          <h3 id="name">{{ product.nama }}</h3>
          <p>
            nemo molestias numqloremu lorem am reprehenderit rem unde optio! Officiis laboriosam
            iure pariatur dolorem tempora sequi atque officia libero natus maiores.
          </p>
          <p class="stok">Rp. {{ product.harga }}</p>
          <button v-bind="{disabled: !product.is_ready}">
          <RouterLink :to="'/product/' +product.id"> {{ productCek(product.is_ready) }}</RouterLink> 
          </button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      bestProduct: [],
    }
  },
  methods: {
    productCek(value) {
     return  value?'Pesan' : 'Habis'
    }
  },

  mounted() {
    axios
      .get('http://localhost:3000/products')
      .then((response) => {
        this.products = response.data
        console.log(this.products)
      })
      .catch((error) => {
        console.log(error)
      });

    axios.get('http://localhost:3000/best-products')
      .then(response => {
        this.bestProduct = response.data
        console.log(this.bestProduct)
      })
      .catch(error => {
        console.log(error)
      })
  },
}

</script>

<style scoped>
.content {
  padding-top: 7rem;
  min-height: 100vh;
  color: aliceblue;
}
.best-product-container h1 {
  text-align: center;
}
.best-product {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  border-bottom: 3px solid whitesmoke;
}
.card {
  max-width: 300px;
  min-height: 300px;
  max-height: 400px;
  flex-grow: 1;
  flex-basis: 250px;
  background-color: black;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  display: flexbox;
  transition: 0.5s;
}
.card:hover{
  box-shadow: 0 0 20px rgb(168, 81, 18);
  transform: scale(1.1);
}
.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 15px 150px 0 0;
}
.card img:hover{
  transform: scale(1.1);
  box-shadow:20px -5px 15px  whitesmoke; ;
}
#name {
  text-align: center;
}
.deskripsi {
  padding: 10px;
  max-height: 100px;
  color: gainsboro;
}
.stok {
  padding: 10px;
  color: whitesmoke;
}
.card button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 15px;
  font-size: larger;
  justify-content: end;
  align-items: end;
  cursor: pointer;
  background-color: rgb(168, 81, 18);
}
.card button:hover {
  background-color: rgb(235, 122, 41);
  box-shadow: 0px 2px 5px whitesmoke;
}

.list-product-container h1 {
  margin-top: 2em;
  text-align: center;
}
.list-product {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  border-bottom: 3px solid whitesmoke;
}
.pesan-container{
  padding: 20px;
  margin-bottom: 15em;
}
a{
  text-decoration: none;
  color: aliceblue;
}
</style>
