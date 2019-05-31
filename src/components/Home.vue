<template id="test">
  <div class="hello">
    <!-- <house/> -->
     <input type="text" style="height:50px;width:200px;background-color:white" v-model="inputName">
     <button @click="insert">插入数据库</button>
    <end :message="message" v-on:testFun="getEmit" :level="level">hello world</end>

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
import End from "@/components/End";
import House from "@/components/House";
import Decrypt from '../utils/aes.js'

export default {
  name: "Home",
  data() {
    return {
      inputName:'佚名',
      msg: "修改test",
      tabs: [],
      message: [
        { id: 1, title: 2 },
        { id: 2, title: 2 },
        { id: 3, title: 3 },
        { id: 4, title: 4 }
      ],
      level:1
    };
  },
  components: {
    End,
    House

  },
  mounted() {
    console.log(this.$el.id);
  },
  created() {
    alert(Decrypt);
      this.getList();
    // let params={
    //   id:"666",
    //   name:"777"
    // };
    // axios({
    //   url: "http://localhost:3000/456",
    //   // url: "http://106.12.27.117:3000/users/addUser",
    //   method: "post",
    //   data: qs.stringify(
    //     {
    //     id: "668",
    //     name: "777"
    //   }
    //   )
    // })
    //   .then(function(response) {
    //     console.log(JSON.stringify('456'+JSON.stringify(response)));
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  computed: {
    ...mapGetters("List", ["test"])
  },
  methods: {
    getList(){
         let that = this;
    // axios.get('https://localhost:18081/123')
    axios
      .get("https://106.12.27.117:18081/123")
      .then(function(response) {
        console.log('123'+JSON.stringify(response));
        that.tabs = response.data;
        that.$forceUpdate();
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    insert(){
      // alert(this.inputName);
      let that = this;
      axios({
      // url: "https://localhost:18081/456",
      url: "https://106.12.27.117:18081/456",
      method: "post",
      data: qs.stringify(
        {
        name: this.inputName
      }
      )
    })
      .then(function(response) {
        console.log(JSON.stringify('456'+JSON.stringify(response)));
        // alert('插入成功'+JSON.stringify(response))
        alert('插入成功');
        that.getList();
      })
      .catch(function(error) {
        console.log(error);
      });
     
    },
    getEmit(params) {
      alert(params);
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
h2,h3,h4,h5,h6 {
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
