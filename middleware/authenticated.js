export default ({ store, redirect }) => {
  /* eslint-disable no-console */
  console.log(store.state.auth.login)
  // ユーザーが認証されていないとき
  if (!store.state.auth.login) {
    return redirect('/login')
  }
}
