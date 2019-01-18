<template>
  <div>
<p>{{this.test}}</p>
<button @click="back">返回</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
name:'Detail',
computed:{
    ...mapGetters("List", [
    "test"
    ])
},
methods:{
back(){
this.$router.go(-1)
}
}
}
</script>
<style lang="">

</style>
