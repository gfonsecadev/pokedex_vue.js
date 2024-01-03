<template>
    <div class="list">
       <side-right-pokemon/>
    </div>
</template>

<script>
import SideRightPokemon from './SideRigthPokemon.vue'
export default {
    name: "RightList",
    components:{
        SideRightPokemon
    }
}
</script>

<style scoped>
    .list{
        width:100%;
        height:100%;
        background-color:black;
       
    }

</style>
