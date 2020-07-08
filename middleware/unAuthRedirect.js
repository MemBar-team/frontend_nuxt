export default ({ store, redirect }) => {
  console.log('unAuthRedirect')
  console.log(store.state)
  if (!store.state.authUser) {
    return redirect('/top')
  }
}
