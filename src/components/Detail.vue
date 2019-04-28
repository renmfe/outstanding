<template>
  <div>
<p>{{this.test}}</p>
<end :message="message"></end>
<button @click="back">返回</button>
<div class="triangle_border_up">
    <span></span>
</div>
<!-- 向下的三角形 -->
<div class="triangle_border_down">
    <span></span>
</div>
<!-- 向左的三角形 -->
<div class="triangle_border_left">
    <span></span>
</div>
                                                      
<!-- 向右的三角形 -->
<div class="triangle_border_right">
    <span></span>
</div>
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
<style lang="" scoped="">
.triangle_border_up{
    width:0;
    height:0;
    border-width:0 30px 30px;
    border-style:solid;
    border-color:transparent transparent #333;/*透明 透明  灰*/
    margin:40px auto;
    position:relative;
}
.triangle_border_up span{
    display:block;
    width:0;
    height:0;
    border-width:0 28px 28px;
    border-style:solid;
    border-color:transparent transparent #fc0;/*透明 透明  黄*/
    position:absolute;
    top:1px;
    left:-28px;
}
.triangle_border_down{
    width:0;
    height:0;
    border-width:30px 30px 0;
    border-style:solid;
    border-color:#333 transparent transparent;/*灰 透明 透明 */
    margin:40px auto;
    position:relative;
}
.triangle_border_down span{
    display:block;
    width:0;
    height:0;
    border-width:28px 28px 0;
    border-style:solid;
    border-color:#fc0 transparent transparent;/*黄 透明 透明 */
    position:absolute;
    top:-29px;
    left:-28px;
}
/*向左*/
.triangle_border_left{
    width:0;
    height:0;
    border-width:30px 30px 30px 0;
    border-style:solid;
    border-color:transparent #333 transparent transparent;/*透明 灰 透明 透明 */
    margin:40px auto;
    position:relative;
}
.triangle_border_left span{
    display:block;
    width:0;
    height:0;
    border-width:28px 28px 28px 0;
    border-style:solid;
    border-color:transparent #fc0 transparent transparent;/*透明 黄 透明 透明 */
    position:absolute;
    top:-28px;
    left:1px;
}
/*向右*/
.triangle_border_right{
    width:0;
    height:0;
    border-width:30px 0 30px 30px;
    border-style:solid;
    border-color:transparent transparent transparent #333;/*透明 透明 透明 灰*/
    margin:40px auto;
    position:relative;
}
.triangle_border_right span{
    display:block;
    width:0;
    height:0;
    border-width:28px 0 28px 28px;
    border-style:solid;
    border-color:transparent transparent transparent #fc0;/*透明 透明 透明 黄*/
    position:absolute;
    top:-28px;
    left:-29px;
}

</style>
