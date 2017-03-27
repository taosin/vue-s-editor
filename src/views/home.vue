<template>
  <div class="home">
    <div class="main">
      <editor :content.sync="content" :text.sync="text" :format-text.sync="formatText"></editor>
      <a @click="submit">submit</a>
    </div>
  </div>
</template>
<script>
  import editor from './index.vue';
  export default {
    components:{
      editor
    },
    attached(){
    },  
    data(){
      return{
        content:'',
        text:'',
        formatText:''
      };
    },
    methods:{
      submit(){
        console.info(this.content);
        console.info(this.text);
        console.info(this.formatText);
      }
    },
    watch:{
    }
  };
</script>
<style scoped lang='less'>
  .home{
      /*margin-top: 30px;*/
    .main{
      width: 90%;
      height: 500px;
      margin: 0 auto;
    }
  }
</style>

