<template>
      <div  id="front_back">
         <side-right />
         <back-pokedex /> 
      </div>
</template>

<script>
import SideRight from './SideRight.vue'
import BackPokedex from '../Others/BackPokedex.vue'
export default {
  name:'SideMainRight',
  components:{
    SideRight,
    BackPokedex
  }
}
</script>

<style scoped>
     #front_back{  
        position:relative;
        transform-style: preserve-3d;
        cursor: pointer;  
    }


</style>
