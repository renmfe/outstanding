<template>
  <div class="hello">
    <end :message="message" v-on:testFun='getEmit'></end>
    <!-- <img src="../img/logo.png" alt="">
    <img src="../img/test.png" alt=""> -->
    <button @click="jump">{{msg}}</button>
    <p v-for="tab in tabs" :key="tab.id">
      编号{{tab.id}}
      {{tab.name}}
      {{tab.age}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import qs from "qs";
import End from '@/components/End'

export default {
  name: "Home",
  data() {
    return {
      msg: "修改test",
      tabs: [],
      message:[{id:1,title:2},{id:2,title:2},{id:3,title:3},{id:4,title:4}]
    };
  },
  components:{
    End
  },
  created() {
    let that = this;
    // axios.get('http://localhost:3000/123')
    axios
      .get("http://192.168.199.118:3000/123")

      .then(function(response) {
        console.log(JSON.stringify(response));
        that.tabs = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    // let params={
    //   id:"666",
    //   name:"777"
    // };
    axios({
      url: "http://192.168.199.118:3000/users/addUser",
      method: "post",
      data: qs.stringify({
        id: "666",
        name: "777"
      })
    })
      .then(function(response) {
        console.log(JSON.stringify(response));
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    ...mapGetters("List", ["test"])
  },
  methods: {
    getEmit(params){
      alert(params)
    },
    jump() {
      alert(this.test);
      if (this.test === true) {
        this.$store.commit("List/setTest", false);
      } else {
        this.$store.commit("List/setTest", true);
      }

      this.$router.push("/detail");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
span {
  font-size: 0.8rem;
}
</style>
