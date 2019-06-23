export default ({ store, redirect }) => {
  console.log('unAuthRedirect')
  console.log(store)
  console.log(redirect)
  if (!store.state.authUser) {
    return redirect('/top')
  }
}
