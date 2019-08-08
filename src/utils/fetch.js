import Axios from 'axios'
import { baseUrl } from './evn'
import Md5 from 'md5'
import Qs from 'qs'
import { Toast  } from 'vant';

const service = Axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: data => {
        data = Object.assign(data, { deviceid: sessionStorage.getItem('deviceid') })
        const arr = []
        for (const key in data) {
            arr.push(`${key}=${data[key]}`)
        }

        let str = arr.sort().join('&')
        str = Md5(`${str}&key=chaomeng`)
        data = Object.assign(data, { sign: str })

        return Qs.stringify(data)
    }
})

// axios 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// axios 响应拦截器
service.interceptors.response.use(
    res => {
        return res
    },
    err => {
        // Message.error('服务有事离开一下，马上就回来哦！');
        return Promise.reject(err)
    }
)

export default service
