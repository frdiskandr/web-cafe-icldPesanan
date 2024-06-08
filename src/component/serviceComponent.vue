<template>
     <div class="service">
    <div class="title">Our Services</div>
    <div class="content">
    <div class="card">
      <h4>card</h4>
      <img src="/public/favicon.ico" alt="logo" class="logo">
      <p>berikan kami masukan:</p>
      <a href="">
<button>Massage</button>
      </a>
    </div>

     <div class="card">
      <h4>Call Us</h4>
      <img src="/public/favicon.ico" alt="logo" class="logo">
      <p>service</p>
      <a href="">
<button>Call</button>
      </a>
      
    </div>
    </div>
   </div>

</template>

<script>
export default {
  name: 'serviceComponent',
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: aliceblue;
}
.service{
  border-top: 2px solid whitesmoke;
  padding-top: 10em;
  text-align: center;
}
.title{
  font-size: xx-large;
}

.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.card{
  margin: 2em;
  min-height: 200px;
  background-color: black;
  box-shadow: 0px 2px 15px rgb(27, 26, 26);
  transition: 0.5s;
}
.card:hover{
  transform: scale(1.1);
  box-shadow: 0px 2px 15px chocolate;
}

.card h4{
  margin-top: 1em;
}
.card img{
  margin-top: 1em;
  width: 50px;
  height: 50px;
}
.card p{
  text-align: center;
  margin-top: 10px;
  padding: 20px;
}
.card button{
  width: 100px;
  height: 30px;
  background-color: chocolate;
  color: aliceblue;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
}
@media (width > 600px){
  .card{
    min-height: 300px;
    min-width: 300px;
    border-radius: 15px;
  }
  .card h4{
    font-size: x-large;
  }
  .card img{
    width: 100px;
    height: 100px;
  }
  .card p{
    font-size: large;
  }
  .card button{
    font-size: large;
    width: 150px;
    height: 50px;
  }
  .card button:hover{
    background-color: rgb(240, 136, 61);
    cursor: pointer;
  }
}
</style>