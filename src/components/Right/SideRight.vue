<template>
    <div class="right"  >
        <side-right-list />
        <button class="button" @click="this.$store.commit('open_or_close')"></button>
    </div>
</template>

<script>
//Lado direito principal da pokedex
import SideRightList from './SideRightList.vue'

export default {
    name: "SideRight",
    components:{
        SideRightList,
       
    },
    data:()=>{
        return{
            isOpen:false
        }
    },

    methods:{
       
    },
    watch:{
      
    }
}
</script>

<style scoped>
 .right{
        background: linear-gradient( rgb(240, 95, 66),rgb(118, 1, 1));
        box-shadow:  0 0 5px 2px rgb(11, 0, 0), inset 0 5px 5px 5px rgb(19, 5, 5), inset 0 -5px 10px 10px  rgb(22, 6, 4);
        border-radius:8px 8px 5px 5px;
        height: 100%;
        width:100%;
        display: flex;
        flex-direction:column;
        align-content: center;
        position:absolute;
        padding: 1rem;
        backface-visibility: hidden;
        
    }
    .button{
        width:40px;
        height: 40px;
        margin: 6px auto;
        border-radius: 50%;
        background-color:rgb(221, 211, 23);
        box-shadow:0 2px 2px 5px rgb(42, 6, 6), inset 0 0 10px 2px rgb(93, 8, 8)
    }




     @media(min-width:575.98px){
        .right{
          box-sizing: 4px 0 0 40px black;
          border-radius:3px 5px 5px 3px;
          
        }

   
     }

</style>
