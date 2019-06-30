<template>
  <div class="l-options">
    <div class="c-search">
      <el-input placeholder="Please input" v-model="input3" size="medium">
        <el-select v-model="select" slot="prepend" placeholder="Select">
          <el-option label="Restaurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="c-changeLayoutBtn">
      <!-- <i class="el-icon-menu"></i> -->
      <i class="material-icons" @click="changeLayout">{{ btnText }}</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: '',
      select: '',
      layoutMode: 'module',
      btnText: 'view_module'
    }
  },
  methods: {
    changeLayout() {
      console.log('クリック')
      if (this.layoutMode === 'module') {
        this.btnText = 'view_stream'
        this.layoutMode = 'list'
      } else {
        this.btnText = 'view_module'
        this.layoutMode = 'module'
      }
    }
  }
}
</script>

<style lang="scss">
.l-options {
  padding: 32px 16px;
  display: flex;
}

.c-search {
  max-width: 800px;
  margin: auto;
  flex: 1;
}

.c-changeLayoutBtn {
  padding: 4px;
  border: solid 1px $color_border;
  font-size: 20px;
  cursor: pointer;

  .material-icons {
    font-size: 2.8rem;
  }
}
</style>
