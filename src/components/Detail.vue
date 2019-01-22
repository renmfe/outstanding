<template>
  <div>
<p>{{this.test}}</p>
<p>测试一下提交</p>
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
