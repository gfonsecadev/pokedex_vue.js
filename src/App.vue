<template>
  <Pokedex v-if="1"/>

</template>

<script>
import Pokedex from './components/Home/Pokedex.vue'

export default {
  name: 'App',
  components: {
    Pokedex
  }
}
</script>

<style>
.row>*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0;
}

body{
  background: #870202;
  filter: saturate();
  filter: brightness(1.5);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
