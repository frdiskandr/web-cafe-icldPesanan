<script setup>
import { RouterView } from 'vue-router';
import navBar from '../src/component/navbarComponent.vue'
</script>

<template>
  <div class="main-body">
      <navBar/>
    <div class="content">
<RouterView />
    </div>
     
  </div>
</template>

