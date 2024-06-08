<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="navBar-container">
    <div class="title-container">
      <div class="logo"></div>
      <div class="title">Mooi. <span>Cafe</span></div>
    </div>
    <div class="navBar">
      <div class="mobile-contain">
        <h1 @click="navClick" :style="{ rotate: Rotate }">|||</h1>
      </div>
      <div class="content" :style="{ display: display  }">
        <ul>
          <li>
           <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
           <RouterLink to="/product">Menu</RouterLink>
          </li>
          <li class="Pesanan">
           <RouterLink to="/pesanan">Keranjang</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navBar',
  data() {
    return {
      display: 'block',
      Rotate: '90deg'
    }
  },

  methods: {
    navClick() {
      return (
        (this.display = this.display === 'none' ? 'block' : 'none'),
        (this.Rotate = this.Rotate === '0deg' ? '90deg' : '0deg')
      )
    }
  }
}
</script>

<style scoped>
.Pesanan{
 border-radius: 10px;
  border: 1px solid whitesmoke;
  box-shadow: 0px 2px 15px chocolate;
  background-color: black;
  position: relative;
  padding: 10px;
}

.navBar-container {
  display: flex;
  width: 80%;
  padding: 10px;
  border-bottom: 2px solid whitesmoke;
  border-left:1px solid whitesmoke;
  box-shadow: 0px 2px 10px chocolate;
  position: fixed;
  z-index: 1;
}

.title-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo {
  width: 40px;
  height: 40px;
  background-image: url('/public/1717725007344.png');
  background-size: 100%;
  background-repeat: no-repeat;
  filter: drop-shadow(1px 1px 1px whitesmoke);
}
.title {
  font-size: xx-large;
  color: whitesmoke;
  font-weight: bolder;
}
.title span {
  margin-left: -5px;
  font-size: large;
  color: rgb(138, 61, 7);
}
.navBar {
  flex-grow: 1;
}
.content{
  text-align: end;
}
.content ul {
  display: flex;
  list-style-type: none;
  text-align: end;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin-right: 0.2em;
}
.content li {
  margin-top: 0.5em;
}
.content a {
  padding: 10px;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.content a:hover {
  border-radius: 10px;
  border: 1px solid whitesmoke;
  box-shadow: 0px 2px 15px chocolate;
  background-color: black;
}

.mobile-contain h1 {
  color: antiquewhite;
  position: absolute;
  right: 40px;
  display: none;
  transition: 1s;
}

@media (width < 600px) {
  .mobile-contain h1 {
    cursor: pointer;
    color: antiquewhite;
    position: absolute;
    right: 40px;
    transform: rotate(90deg);
    display: block;
    transition: 1s;
  }

  .navBar-container {
    width: 100%;
  }
  .content {
    display: none;
    transition: 0.3s;
    position: fixed;
    left: 14em;
  }

  .content li {
    padding: 10px;
  }
  .content ul {
    text-align: center;
    top: 80px;
    right:-100px;
    position: absolute;
    display: block;
  }
  .content a{
    font-size: x-large;
  }
}
</style>
