<template>
  <div>
<p>{{this.test}}</p>
<end :message="message"></end>
<button @click="back">返回</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import End from '@/components/End'

export default {
name:'Detail',
computed:{
    ...mapGetters("List", [
    "test"
    ])
},
components:{
  End
},
data:()=>({
  message:[{title:312,id:321321},{title:312,id:1},{title:312,id:32}]
}),
methods:{
back(){
this.$router.go(-1)
}
}
}
</script>
<style lang="">

</style>
