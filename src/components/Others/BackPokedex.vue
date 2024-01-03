<template>
  <div class="back">
    <img src="../../assets/pokedex_logo.svg" alt="Pokedex"/>
  </div>
</template>

<script>
export default {
    name:'BackRight'

}
</script>

<style scoped>
.back{
    height: 100%;
    width:100%;
    background: linear-gradient( rgb(240, 95, 66),rgb(118, 1, 1));
    box-shadow: 0 20px 20px 2px rgb(10, 2, 2), inset 0 9px 10px 10px  rgb(48, 2, 2), inset 0px -30px  40px 20px rgb(36, 4, 4);
    border-radius: 0 0 12px 12px;
    display:flex;
    align-items: center;
    justify-content:center;
    position:absolute;
    transform: rotate(180deg) rotateY(180deg) ;
    backface-visibility: hidden;
}
.back img{
  height: 5rem;
}

@media(min-width:575.98px){
  .back {
     transform: rotate(0deg) rotateY(180deg) ;

    
}
}

</style>
