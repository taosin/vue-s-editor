<template>
  <div class="vue-s-editor">
    <div class="vue-s-editor-main" id="vue-editor">
      <p>请输入内容...</p>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    attached(){
      var editor = new wangEditor('vue-editor');
      editor.create();
    },  
    data(){
      return{
      };
    },
    methods:{
    },
    watch:{
    }
  };
</script>
<style scoped lang='less'>
  .wangEditor-container{
    height: 100% !important;
  }
  .vue-s-editor{
    height: 100%;
    .vue-s-editor-main{
      height: 100%;
    }
  }
</style>

