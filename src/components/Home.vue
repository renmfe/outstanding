<template>
  <div class="hello">
<img src="../img/logo.png" alt="">
<img src="../img/test.png" alt="">

    <button @click="jump">{{msg}}</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  data () {
    return {
      msg: '修改test'
    }
  },
  computed:{
    ...mapGetters("List", [
    "test"
    ])
  },
  methods:{
jump(){
alert(this.test)
// alert(1,...[2,3,4],5)

if(this.test===true){
this.$store.commit('List/setTest',false)
}else{
this.$store.commit('List/setTest',true)
}

this.$router.push('/detail')
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
