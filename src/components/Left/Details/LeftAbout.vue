<template>
  <div class="about">
    <div>Identificador: {{pokemon.id}}</div>
    <div>Nome: {{pokemon.nome}}</div>
    <div>Tipo: {{pokemon.tipo}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'LeftAbout',
    computed:{
      ...mapState({pokemon:(state)=>state.pokemon_click})
    }
}
</script>

<style scoped>
  
  .about div{
    text-align: start;
    padding: 0 0.4rem 0.4rem 0;
    color: var(--color-font-pokemon)
  }
</style>
