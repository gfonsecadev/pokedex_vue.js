<template>
  <div class="show">
    <transition-group
      enter-active-class="animate__animated animate__fadeInRight"
    >
      <div class="evolution" v-if="this.$store.state.isClick">
        <div
          v-for="(item, index) in this.$store.state.pokemon_click.evolucoes"
          :key="index"
        >
          <img
            :src="
              require(`@/assets/pokemons/${item.toString().padStart(3, 0)}.png`)
            "
            alt=""
          />
        </div>
      </div>
    </transition-group>

    <transition
      leave-active-class="animate__animated animate__backOutLeft"
      enter-active-class="animate__animated animate__backInLeft"
    >
      <img
        class="h-100"
        :src="require(`@/assets/pokemons/${image}`)"
        alt="pokemon"
        v-if="this.$store.state.isClick"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "LeftShow",
  props: ["image"],
  data: () => {
    return {
      show_or_close: false,
    };
  },
  methods: {
    imagem() {
      if (this.image != null) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.evolution {
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
}

.evolution img {
  height: 30px;
}

.show {
  width: 100%;
  position: relative;
  background-color: black;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  box-shadow: var(--shadow-custom-inner);
}
</style>
