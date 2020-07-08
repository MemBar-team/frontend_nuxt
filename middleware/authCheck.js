import { routeOption } from './utilities'

export default ctx => {
  console.log('authCheck-----')
  console.log(ctx)
  console.log(ctx.route)
  console.log(ctx.app.$auth.$state)

  if (routeOption(ctx.route, 'auth', false)) {
    console.log('auth False----')
    return false
  }
}
