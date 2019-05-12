export default ({ store, redirect }) => {
  console.log('authLogged')
  console.log(store.state.authUser)
  if (store.state.authUser) {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
    console.log('authLogged True')
    return redirect('/')
  }
}
