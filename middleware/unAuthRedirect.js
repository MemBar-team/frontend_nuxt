export default ({ store, redirect }) => {
  if (!store.state.authUser) {
    return redirect('/top')
  }
}
