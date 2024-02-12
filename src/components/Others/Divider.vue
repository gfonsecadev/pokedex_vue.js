<template>
  <div class="divider"></div>
</template>

<script>
export default {
    name: 'OtherDivider'

}
</script>

<style scoped>
    .divider{
        height: 1.5rem;
        background-color: rgb(48, 8, 8);
        box-shadow:inset 0 0 10px 10px rgb(44, 17, 1), inset  0 0 4px 10px rgb(221, 86, 86);
        clip-path: polygon(2% 0%, 98% 0%, 97% 50%, 98% 100%, 2% 100%, 3% 50%);
    }

    @media(min-width:575.98px){
        .divider{
           height: 100%;
           clip-path: polygon(50% 5%, 100% 1%, 100% 3%, 100% 70%, 100% 99%, 50% 96%, 0% 99%, 0% 70%, 0 36%, 1% 1%);
        }
    }

</style>
