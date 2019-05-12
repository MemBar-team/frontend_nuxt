<template>
  <div>
    <h1>Super secret page</h1>
    <router-link to="/">Back to the home page</router-link>
  </div>
</template>

<script>
export default {
  // データをこのコンポーネントにセットする必要がないため fetch() を使う
  // fetch({ store, redirect }) {
  //   if (!store.state.auth.login) {
  //     return redirect('/top')
  //   }
  // }
  middleware: 'auth'
}
</script>
