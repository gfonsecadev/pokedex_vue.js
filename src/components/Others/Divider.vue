<template>
  <div class="divider">Divisor</div>
</template>

<script>
export default {
    name: 'OtherDivider'

}
</script>

<style scoped>
    .divider{
        background-color: rgb(48, 8, 8);
        box-shadow:inset 0 0 10px 10px rgb(44, 17, 1), inset  0 0 4px 10px rgb(196, 22, 138);
        clip-path: polygon(1% 0%, 99% 0%, 98% 50%, 99% 100%, 1% 100%, 2% 50%);

    }

    @media(min-width:575.98px){
        .divider{
           height: 100%;
           clip-path: polygon(50% 5%, 100% 1%, 100% 3%, 100% 70%, 100% 99%, 50% 96%, 0% 99%, 0% 70%, 0 36%, 1% 1%);
        }
    }

</style>
