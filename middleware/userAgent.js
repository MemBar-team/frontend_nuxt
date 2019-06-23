export default context => {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent

  const ua = context.userAgent.toLowerCase()
  // iPhone
  const iphone = ua.indexOf('iphone') > -1
  // Android
  const android = ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1

  // PC or SP 判定
  if (iphone || android) {
    // スマホ（iPhone, Android）の時
    context.store.commit('setDeviceType', 'sp')
  } else {
    // それ以外はPC
    context.store.commit('setDeviceType', 'pc')
  }
}
