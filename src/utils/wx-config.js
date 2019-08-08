import { getWechatConfig } from '../api/config.js'
import wx from 'weixin-js-sdk'

//获取jssdk需要的签名等参数
export default {
    initConfig: (reqUrl, callback) => {
        getWechatConfig(reqUrl).then(res => {
            if (res.data.code === 200) {
                const wxconfig = res.data.data.wxcfg
                wx.config({
                    signature: wxconfig.signature,
                    appId: wxconfig.appId,
                    nonceStr: wxconfig.nonceStr,
                    timestamp: wxconfig.timestamp,
                    debug: true,
                    jsApiList: [
                        'chooseWXPay',
                        'chooseImage',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'getLocalImgData',
                        'updateAppMessageShareData',
                        'scanQRCode', //
                        'closeWindow'
                    ]
                })
                wx.error(res => {
                    if (callback) callback(res)
                })
                wx.ready(() => {
                    wx.scanQRCode({
                        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
                        success: function(res) {
                            callback(res.resultStr) // 当needResult 为 1 时，扫码返回的结果
                        }
                    })
                })
            }
        })
    },
    setShare: openId => {
        const origin = location.origin
        wx.ready(function() {
            //“分享给朋友”
            wx.onMenuShareAppMessage(
                {
                    title: '中原首届国学文化艺术节',
                    desc: '为国学打call 为少年加油 国学少年成长路期待您的参与',
                    imgUrl: 'http://h5.ztuo.cn/img/shareimg.jpg',
                    link: origin + '?openId=' + openId
                },
                function() {
                    //这里是回调函数
                }
            )
            //“分享到朋友圈”
            wx.onMenuShareTimeline(
                {
                    title: '中原首届国学文化艺术节',
                    desc: '为国学打call 为少年加油 国学少年成长路期待您的参与',
                    imgUrl: 'http://h5.ztuo.cn/img/shareimg.jpg',
                    link: origin + '?openId' + openId
                },
                function() {
                    //这里是回调函数
                }
            )
        })
    },
    wxScanQRCode: callback => {
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            success: function(res) {
                callback(res.resultStr) // 当needResult 为 1 时，扫码返回的结果
            }
        })
    }
}
