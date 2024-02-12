<template>
  <div >
    <transition-group enter-active-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__backOutLeft"  >
      <div class="abilitie" v-for="(abilitie, index) in getAbilities" :key="abilitie">
        <div class="col-11 text-start">{{abilitie[0].toUpperCase()+abilitie.slice(1)}}</div>
        <button @click="deleteAbilitie(index)" class="col-1">x</button>
      </div>
    </transition-group>
    <input @keypress="saveAbilitie($event)" v-model="abilitie"  class="form-control" type="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'LeftAbilities',
    data:()=>{
        return{
          abilitie:''
        }
    },
    computed:{
      ...mapGetters(['getAbilities'])
    },
    methods:{
      saveAbilitie(key){
        if(key.charCode==13 & this.abilitie!=""){
          this.$store.commit("saveAbilitie",this.abilitie)
          this.abilitie=""
        }
      },

      deleteAbilitie(index){
        this.$store.commit("deleteAbilitie",index)
      }
      

      
    }
}
</script>

<style scoped>

.abilitie{
  display:flex;
  color: var(--color-font-pokemon);
  justify-content: space-between;
  padding-bottom: 5px;

}

button{
  width:1.2rem;
  text-align: center;
  background: var(--background-buttom);
  border-radius: 0.3rem;
  box-shadow:inset 0 0 5px 3px rgb(4, 1, 1);
  color: var(--color-font-pokemon);
  font-size: 0.5rem;
}

input{
  height: 1.5rem;
}

</style>
