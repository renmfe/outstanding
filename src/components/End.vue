<template>
    <div >
      <li v-for="(item,index) in message" :key="index" @click="show(item,index)">
          <!-- {{item.id}}___{{item.title}} -->
          {{item.id}}&&&&&&{{item.title}}
      </li>
      <button @click="$emit('testFun',1)">按钮</button>
      </div>
</template>
<script>
export default {
  name: "End",
  data: () => ({
    // message: '我是页脚'
    testData:"测试数据"
  }),
  props:{
    message:Array
  },
  methods:{
    show(item){  
      if(item){
        alert(item.title)
      }else{
        alert("内容为空")
      }
    }
  }
  
};
</script>
<style lang="">
</style>