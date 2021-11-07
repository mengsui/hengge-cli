const fs = require('fs');

exports.run = function (name) {
  const dirName = name.substring(0, 1).toLowerCase() + name.substring(1);
  const dirNameToUpperCase = name.substring(0, 1).toUpperCase() + name.substring(1);

  if (fs.existsSync(`./${dirName}`)) {
    console.log('安装失败！该路径已存在');
    process.exit(0);
  }

  // 创建页面模版
  const indexTep = `<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class ${dirNameToUpperCase} extends Vue {
  
}
</script>

<style lang="less" scoped>
</style>
`;


  // 创建文件夹
  fs.mkdirSync(`./${dirName}`); // mkdir $1

  // 主页面
  process.chdir(`./${dirName}`); // cd 到主页面
  fs.writeFileSync('index.vue', indexTep);
  console.log('安装成功！');
  process.exit(0);
};
