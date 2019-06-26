<template>
  <div class="c-search">
    <div class="c-search_input">
      <el-input placeholder="Please input" v-model="input3" size="medium">
        <el-select v-model="select" slot="prepend" placeholder="Select">
          <el-option label="Restaurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <button class="c-layouts--btn">
      <!-- <i class="el-icon-menu"></i> -->
      <i class="material-icons">view_quilt</i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: '',
      select: ''
    }
  }
}
</script>

<style lang="scss">
.c-search {
  padding: 32px;

  &_input {
    max-width: 800px;
    margin: auto;
    flex: 1;
  }
}

.c-layouts {
  &--btn {
    padding: 4px;
    border: solid 1px $color_border;
    font-size: 20px;
    cursor: pointer;

    .material-icons {
      font-size: 2.8rem;
    }
  }
}
</style>
