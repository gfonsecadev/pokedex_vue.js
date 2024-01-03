<template>
    <div class="left">
        <side-left-show/>
        <side-left-detal/>
    </div>
</template>

<script>
import SideLeftDetal from './SideLeftDetal.vue'
import SideLeftShow from './SideLeftShow.vue'

export default {
    name:"SideLeft",
    components: {
        SideLeftShow,
        SideLeftDetal
        
    }
}
</script>

<style scoped>
    .left{
        background: linear-gradient(rgb(118, 1, 1), rgb(240, 95, 66));
        box-shadow: 0 0 5px 6px rgb(11, 0, 0), inset 0 -10px 10px 5px  rgb(16, 7, 7);
        border-radius:5px 5px 8px 8px;
        padding: 1rem;
        display: flex;
        max-height: 45%;
        flex-direction:column;
        align-content: center;
    }

    @media(min-width:575.98px){
        .left{
            border-radius:5px 0 0 5px;
            max-height: 100%;
            max-width:42%;
        }
    }

    
</style>
