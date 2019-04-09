<template>
  <section class="container">
    <!-- <transition name="fade"> -->
    <h1 class="title">
      ホーム
    </h1>
    <div class="Contents">
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>iiiiiiiiiiiii</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>うううううううううううううううううう</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>iiiiiiiiiiiii</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>うううううううううううううううううう</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>iiiiiiiiiiiii</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>うううううううううううううううううう</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>ああああああああ</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>iiiiiiiiiiiii</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>うううううううううううううううううう</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
        <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
      </div>
      <div class="Contents_item">
        <div class="Contents_item-thumb"></div>
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

<style lang="scss" scoped>
.Contents {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  &_item {
    width: 25%;
    // height: calc();
    margin: 8px;
    padding: 4px;
    @include boxShadow_spread(0.1);
    flex-grow: 1;
    overflow: hidden;

    &-thumb {
      background-color: rgba($color_black, 0.2);
      height: 100px;
    }
  }
}
</style>
