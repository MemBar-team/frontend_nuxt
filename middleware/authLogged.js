export default ({ store, redirect }) => {
  console.log('authLogged')
  console.log(store.state.authUser)
  console.log(store)
  if (store.state.authUser) {
    console.log('authLogged True')
    return redirect('/')
  }
}
