<template>
  <div>
    <div class="status" v-for="(type, index) in getStatus.types" :key="index">
     <span>{{type[0].toUpperCase() + type.slice(1)}}</span>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width:'+ getStatus.values[index]+'%'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{getStatus.values[index]+'%'}}</div>
         </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:'LeftStatus',
    data:()=>{
       return{
         status:""
       }
    },
    computed:{
      ...mapGetters(['getStatus'])
    }
}
</script>

<style scoped>

.status{
  display:flex;
  flex-direction: column;
  margin-bottom: 10px;
}

span{
  align-self: flex-start;
  color:var(--color-font-pokemon);
}



</style>
