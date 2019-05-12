export default context => {
  // userAgent プロパティを context 内に追加します（context は `data` メソッドや `fetch` メソッド内で利用できます）
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
