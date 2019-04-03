<template>
  <section class="container">
    <!-- <transition name="fade"> -->
    <h1 class="title">
      ホーム
    </h1>
    <nuxt-link to="/">
      <el-button type="primary" icon="el-icon-arrow-left">戻る</el-button>
    </nuxt-link>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">aaaaaaaaaaaaaaaaaaaa</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">bbbb</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">cccccccccccccc</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">ddddddddd</div>
      </el-col>
    </el-row>
    <div class="Contents">
      <div class="Contents_item">
        <h2>ああああああああ</h2>
      </div>
      <div class="Contents_item">
        <h2>iiiiiiiiiiiii</h2>
      </div>
      <div class="Contents_item">
        <h2>うううううううううううううううううう</h2>
      </div>
      <div class="Contents_item">
        <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
      </div>
      <div class="Contents_item">
        <h2>ああああああ</h2>
      </div>
    </div>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  components: {},
  layout: 'contents',
  data() {
    return {
      value: null
    }
  }
}
</script>

<style scoped>
.Contents {
  display: flex;
  &_item {
    width: 25%;
  }
}
</style>
