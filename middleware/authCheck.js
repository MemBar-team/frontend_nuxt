// export default context => {
//   console.log('aaaaa')
//   console.log(context)
//   console.log(context.app)
//   console.log(context.app.$auth)
//   console.log(context.app.$auth.$state)
// }

import { routeOption } from './utilities'

export default ctx => {
  console.log('aaaaaa-----')
  console.log(ctx.route)
  console.log(ctx.app.$auth.$state)
  // console.log(routeOption)
  // Disable middleware if options: { auth: false } is set on the route
  if (routeOption(ctx.route, 'auth', false)) {
    console.log('jjjjj')
    return false
  }

  // Disable middleware if no route was matched to allow 404/error page
  // const matches = []
  // const Components = getMatchedComponents(ctx.route, matches)
  // if (!Components.length) {
  //   return
  // }

  // const { login, callback } = ctx.app.$auth.options.redirect

  // if (ctx.app.$auth.$state.loggedIn) {
  //   // -- Authorized --
  //   // Redirect to home page if inside login page (or login page disabled)
  //   if (!login || normalizePath(ctx.route.path) === normalizePath(login)) {
  //     ctx.app.$auth.redirect('home')
  //   }
  // } else if (
  //   !callback ||
  //   normalizePath(ctx.route.path) !== normalizePath(callback)
  // ) {
  //   ctx.app.$auth.redirect('login')
  // }
}
