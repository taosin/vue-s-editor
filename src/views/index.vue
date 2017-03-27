<template>
  <div class="vue-s-editor">
    <div class="vue-s-editor-main" id="vue-editor">
      <p>请输入内容...</p>
    </div>
  </div>
</template>
<script>
  module.exports = {
    props:{
      content:{
        type:String,
        required: false,
        twoWay:true
      },
      text:{
        type:String,
        required: false,
        twoWay:true
      },
      formatText:{
        type:String,
        required: false,
        twoWay:true
      },
    },
    attached(){
      const self = this;
      const editor = new wangEditor('vue-editor');
      editor.onchange = function(){
        self.content = this.$txt.html();
        self.text = this.$txt.text();
        self.formatText = this.$txt.formatText();
      };
      editor.create();
    },  
    data(){
      return{
        editor:''
      };
    },
    methods:{
    },
    watch:{
    }
  };
</script>
<style scoped lang='less'>
  .vue-s-editor{
    height: 100%;
    width: 100%;
    .vue-s-editor-main{
      height: 100%;
      max-height: 100%;
    }
  }
</style>

