<template>
    
     <transition-group name="list_anime" >
        <div class="list row" v-if="this.$store.state.isOpen==true" >
             <side-right-pokemon class="col-auto" :name=pokemon.nome :image=pokemon.imagem v-for="pokemon in this.$store.state.pokemons" :key=pokemon.id />      
        </div>
    </transition-group>  
    

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
        padding:0.5rem;
        margin: auto;
        overflow:auto;
        box-shadow: var(--shadow-custom-inner);
       
    }

    .list_anime-leave-active{
        animation: shutDown 1s;
    }
    .list_anime-enter-active{
        animation:shutDown 0.5s reverse
    }

    @keyframes shutDown{
        from{
            transform:scale(1)
        }
  to{
    transform:scale(1) perspective(800px)
  }
}

</style>
