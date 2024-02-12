<template>
  <div class="detail">
    <ul class="nav nav-sm-justifie nav-fill">
      <li class="nav-item">
        <router-link
          active-class="link_active"
          class="nav-link"
          :to="{ name: 'about' }"
          >Sobre</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          active-class="link_active"
          class="nav-link"
          :to="{ name: 'abilities' }"
          >Habilidades</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          active-class="link_active"
          class="nav-link"
          :to="{ name: 'status' }"
          >Status</router-link
        >
      </li>
    </ul>

    <div class="router">
      <router-view
        v-if="this.$store.state.pokemon_click.id"
        v-slot="{ Component }">
        <transition enter-active-class="animate__animated animate__backInDown">
          <component :is="Component" />
        </transition>
      </router-view>

      <div v-else>Selecione um pokemon</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftDetail",
};
</script>

<style scoped>
.router {
  height: 60%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0.5rem;
}

.nav {
  max-height: 40%;
}
.nav-link {
  color: beige;
  height: 1.8rem;
  padding: 0.1rem;
}
.nav-item {
  border-radius: 5px;
  box-shadow: var(--shadow-custom-buttom);
  background: var(--background-buttom);
}
.link_active {
  box-shadow: inset 0 0 5px 5px black;
  background: linear-gradient(rgb(196, 196, 46), rgb(132, 13, 13));
}
.detail {
  width: 100%;
  height: 70%;
  background-color: rgb(10, 9, 9);
  position: relative;
  border-radius: 0 0 5px 5px;
  box-shadow: var(--shadow-custom-inner);
}


@media (min-width: 575.98px) {
  .router {
    height: 90%;
  }

}
</style>
