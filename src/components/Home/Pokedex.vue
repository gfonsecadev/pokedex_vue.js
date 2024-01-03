<template>
        <div class="container pokedex row" >
            <side-left class="col"/>
            <divider class="col-12 col-sm-1 "/>
            <side-right-main :class="{col:true,open:true,close:isClose}" @click="isClose=!isClose"/>
        </div>
        
</template>

<script>
import SideLeft from '../Left/SideLeft.vue'
import Divider from '../Others/Divider.vue'
import SideRightMain from '../Right/SideRightMain.vue'
export default {
    name:"Pokedex-Home",
    components: {
        SideLeft,
        SideRightMain,
        Divider,
       
    },
    data(){
        return{
          isClose:false
        }
    },

    methods:{
        capturarScreen(v){
             console.log(v)
        }
    },
    watch:{
        isOpen(e){
            console.log(e)
        }
    }

    
}
</script>
    

<style  scoped>
    .pokedex{
        height: 80vh;
        width:100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        transform:rotate(0deg); 
        transition: transform 1s ease-in-out;
       
    }

    .open{
        transform:rotateX(180deg) ;
        transform-origin:top;
         transition:transform 1s 

    }

  .close{
            transform:rotateY(0deg);
            transform-origin:top;
            transition:transform 1s 
        }


    @media(min-width:575.98px){
        .pokedex{
            flex-direction: row;
            transform:rotate(-360deg); 
        }

        .open{
            transform:rotateY(180deg);
            transform-origin: left;
            transition:transform 1s
        }
        .close{
            transform:rotateY(0deg);
            transform-origin:left;
            transition:transform 1s 
        }
    }

    
    

   
   

    
    
</style>>


