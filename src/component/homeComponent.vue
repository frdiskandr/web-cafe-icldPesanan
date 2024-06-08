<template>
  <div class="home-container">
    <div class="title-content">
      <div class="title">Welcome!</div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam impedit eaque nostrum
        totam, inventore magnam odio? Maxime doloribus sed, dolores, animi omnis dolorum excepturi
        rerum facere fugiat ex dolorem cum.
      </div>
    </div>

    <div class="select">
<button id="button"><RouterLink to="/product">Get start &rarr;</RouterLink></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeComponent'
}
</script>

<style scoped>
.home-container {
  height: 100%;
  width: 60%;
  min-width: 400px;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title-content {
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title {
  font-size: 5rem;
  position: relative;
}
.content {
  font-size: small;
}
.select {
  margin-top: 10px;
  width: 100%;
  height: 4em;
  border-radius: 5px;
  box-sizing: border-box;
}
#button {
  width: 50%;
  height: 50%;
  max-width: 100px;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  transition: 1s;
}
#button:hover {
  background-color: aliceblue;
  color: black;
  box-shadow: 1px 1px 1200px 200px rgb(240, 136, 61);
}
#button a {
  text-decoration: none;
  color: black;
}
</style>
