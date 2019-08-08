// baseURl
// const urlArray = ['http://s0.ww.cmfspay.com', 'http://192.168.0.15']
// const urlArray = ['http://finance.3cuc.com', 'https://finance.cmfspay.com']

// 如果不是生产模式就是 baseURL
// const baseUrl = urlArray[1]
const baseUrl = 'http://finance.3cuc.com' //开发环境
// const baseUrl = 'http://finance.cmfspay.com' //预发布
// const baseUrl = 'https://finance.cmfspay.com' //线上
// const baseUrl = process.env.NODE_ENV !== 'production' ? urlArray[0] : urlArray[1]
// const baseUrl = process.env.NODE_ENV !== 'production' ? url Array[1] : ''
export { baseUrl }
