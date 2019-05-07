export default ({ store, redirect }) => {
  // console.log(store.state.authUser)
  if (!store.state.authUser) {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
    return redirect('/top')
  }
  return redirect('/')
}
