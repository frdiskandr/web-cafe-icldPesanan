<template>
     <div class="cafe-container">
      <div class="main-cafe">
        <img src="/public/photocafe.jpeg" alt="image" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ad similique repudiandae
          atque assumenda omnis, laboriosam ratione modi animi possimus ut, inventore sunt, hic
          consequatur velit odit quos unde non?
        </p>
      </div>
      <div class="sub-cafe-container">
        <div class="child-cafe">
          <img src="/public/cafe/kasir.webp" alt="image" />
          <h5>title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore minima recusandae
            fugit quis. Ipsa sunt aperiam odio quo molestiae, dignissimos asperiores nisi possimus
            necessitatibus, quidem nam. Explicabo, enim tempora.
          </p>
        </div>

        <div class="child-cafe">
          <img src="/public/cafe/nuansa.jpeg" alt="image" />
          <h5>title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore minima recusandae
            fugit quis. Ipsa sunt aperiam odio quo molestiae, dignissimos asperiores nisi possimus
            necessitatibus, quidem nam. Explicabo, enim tempora.
          </p>
        </div>
        <div class="child-cafe">
          <img src="/public/cafe/ruangan.jpeg" alt="image" />
          <h5>title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore minima recusandae
            fugit quis. Ipsa sunt aperiam odio quo molestiae, dignissimos asperiores nisi possimus
            necessitatibus, quidem nam. Explicabo, enim tempora.
          </p>
        </div>
        <div class="child-cafe">
          <img src="/public/cafe/pexels-photo-1015568.jpeg" alt="image" />
          <h5>title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore minima recusandae
            fugit quis. Ipsa sunt aperiam odio quo molestiae, dignissimos asperiores nisi possimus
            necessitatibus, quidem nam. Explicabo, enim tempora.
          </p>
        </div>
      </div>
    </div>
</template>

<style scoped>
    .cafe-container {
  padding: 20px;
  display: flexbox;
  box-sizing: border-box;
  overflow: hidden;
}
.main-cafe {
  width: 100%;
  padding-right: 10px;
  text-align: center;
  margin-bottom: 2em;
  border-bottom: 1px solid white;
  padding-bottom: 2em;
}
.main-cafe img {
  width: 100%;
  background-color: black;
  max-width: 600px;
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  transition: 0.5s;
}
img:hover{
    transform: scale(1.1);
    
}
img{
    transition: 0.5s;
    border-radius: 10px;
}
.main-cafe p {
  max-width: 80%;
  margin: auto;
  margin-top: 1em;
}

.sub-cafe-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.child-cafe {
  flex-grow: 1;
  flex-basis: 250px;
  background-color: black;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
  color: aliceblue;
  text-align: center;
  max-width: 300px;
  margin: 20px;
  border-radius: 10px;
  transition: 0.5s;
}

.child-cafe:hover{
    transform: scale(1.1);
}
.child-cafe img {
  width: 100%;
  height: 150px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.child-cafe h5 {
  text-align: left;
  font-size: medium;
}
.child-cafe p {
  text-align: left;
  font-size: small;
}
</style>