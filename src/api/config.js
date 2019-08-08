import fetch from '../utils/fetch'

// const getFetch = (url, method, params) => {
//   return {
//     url,
//     method,
//     params
//   }
// }

// get
export const getWechatConfig = params =>
    fetch({
        url: '/index/wxcfg',
        method: 'get',
        params: params
    })

// post
export const post = params =>
    fetch({
        url: 'path',
        method: 'post',
        data: params
    })
