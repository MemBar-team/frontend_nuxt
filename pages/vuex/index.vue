<template>
  <div>
    <!-- $store.state経由で状態の取得 -->
    <p>{{ this.$store.state }}</p>
    <p>store: {{ this.$store.state.hogeFromStore }}</p>
    <!-- $store.dispatch経由でactionを呼び出す -->
    <button @click="$store.dispatch('writeHoge', '値を書き換えます')">
      Test
    </button>
    <!-- コンポーネントのScript経由で利用することも可能 -->
    <button @click="testMethod()">Test2</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('writeHoge', 'mountedからも利用できる')
  },
  methods: {
    // Scriptからも参照可能
    testMethod() {
      /* eslint-disable no-console */
      console.log(this.$store.state)
      this.$store.dispatch('writeHoge', 'メソッドからの書き換え')
      console.log(this.$store.state.hogeFromStore)
    }
  }
}
</script>
