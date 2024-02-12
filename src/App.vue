<template>
  <Pokedex/>
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
:root{
  --color-font-pokemon:  rgba(255, 255, 255, 0.735);
  --background-buttom: linear-gradient(rgb(159, 14, 16),rgb(173, 173, 37));
  --shadow-custom-buttom: inset 0 0 0.3rem 0.2rem rgb(27, 1, 1);
  --shadow-custom-inner: 0 0 5px 2px black;
}

::-webkit-scrollbar{
  width: 8px;
}
::-webkit-scrollbar-thumb{
  background: red;
  box-shadow: var(--shadow-custom-buttom);
}


.row>*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0;
}

body{
  background: #870202;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media(min-width: 575.98px) and (max-width:780px) {
  *{
  font-size: 12px;
 
}
}

</style>
