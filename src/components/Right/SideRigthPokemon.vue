<template>
  <transition appear enter-active-class="animate__animated animate__backInDown">
    <div id="pokemon" class="card" @click="select(name)">
      <div class="card-body">
        <h6>{{ name }}</h6>
        <img
          class="card-img-top"
          :src="require(`@/assets/pokemons/${image}`)"
          alt="pokemon"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LeftPokemon",
  props: ["name", "image"],
  methods: {
    ...mapActions({ select: "selectPokemon" }),
  },
};
</script>


<style scoped>
#pokemon {
  cursor: pointer;
}

.card-body {
  padding: 0.4rem;
}

#pokemon img {
  animation: fly 2s infinite alternate;
}

@keyframes fly {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}

@media (max-width: 575.98px) {
  #pokemon {
    margin: 3px;
    width: 23%;
  }
  
  #pokemon h6 {
    font-size: 12px;
  }
}

@media (min-width: 576px) {
  #pokemon {
    margin: 2px;
    width: 31%;
  }

  #pokemon h6 {
    font-size: 10px;
  }
}

@media (min-width: 980px){
  #pokemon {
    margin: 2px;
    width: 31%;
  }

  #pokemon h6 {
    font-size: 15px;
  }
}
</style>
