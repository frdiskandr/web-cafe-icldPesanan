<script setup>
import homeComponent from '../component/homeComponent.vue'
import subHomeComponent from '../component/subHomeComponent.vue'
import serviceComponent from '../component/serviceComponent.vue'
</script>
<template>
  <div class="main1-container">
    <homeComponent />
  </div>

  <div class="main2-container">
    <subHomeComponent />
    <new>
      <serviceComponent />
    </new>

    <div class="footer">
      <div class="about">
        <div class="about-content">
          <h5>about</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab ullam, quod provident
            molestias dicta ipsum. Ipsum, nisi corrupti quos ut neque eum porro iure voluptatibus
            exercitationem commodi sint placeat.
          </p>
        </div>

        <div class="about-content">
          <h6>development</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi quibusdam
            rem ratione corrupti ipsum fugit consequuntur distinctio est nesciunt? Neque tempore
            velit asperiores nulla recusandae illo? Nisi, est distinctio?
          </p>
        </div>

        <div class="about-content">
          <h6>contack</h6>
          <p>fariditn159@gmail.com.</p>
          <p>0813-8315-6812</p>
        </div>
      </div>

      <div class="mediaSosial-contain">
        <div class="mediaSosial"><a href="" target="blanck">Instagram</a></div>
        <div class="mediaSosial"><a href="/services/Is_admin">Linkdln</a></div>
        <div class="mediaSosial"><a href="https://github.com/frdiskandr" target="blanck">Github</a></div>
      </div>

      <div class="copyright">
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main1-container {
  padding: 10px;
  padding-top: 7rem;
  width: 100%;
  min-height: 60vh;
  color: aliceblue;
}

.main2-container {
  width: 100%;
  min-height: 100vh;
  color: aliceblue;
  box-sizing: border-box;
}
.main2-container::before {
  content: '';
  position: absolute;
  /* background-image: url('/public/photocafe.jpeg'); */
  background-color: black;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  width: 80%;
  min-height: 260vh;
  z-index: -1;
  box-shadow: 0px 2px 15px chocolate;
}
@media (width < 600px) {
  .main2-container::before {
    width: 100%;
    min-height: 355vh;
  }
}

.footer {
  width: 80%;
  margin: auto;
  border-top: 1px solid whitesmoke;
  text-align: center;
}
.about {
  font-size: xx-large;
  padding-top: 2em;
  text-align: center;
}
.about p {
  font-size: medium;
}
.about-content {
  margin: auto;
  padding: 10px;
  max-width: 500px;
}
.mediaSosial-contain {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1em;
}
.mediaSosial a {
  width: 100px;
  height: 100px;
  color: aliceblue;
  
}

.copyright {
  border-top: 2px solid whitesmoke;
  margin-top: 3em;
  padding-top: 3em;
}
</style>
