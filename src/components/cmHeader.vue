<template>
  <div class="header-box">
    <div
      class="loan-header"
      :class="{ 'iphone-header': isIphoneType, 'iphoneX-header': isInphoneXType, 'no-bg': titleData.imgType == 0 }"
    >
      <img
        src="../assets/img/ic_back_white.png"
        class="back-btn"
        v-if="titleData.imgType == 0"
        @click="backClick"
      />
      <img src="../assets/img/ic_back_black.png" class="back-btn" v-else @click="backClick" />
      {{ titleData.title }}
      <div class="header-right" @click="headerRightClick">{{ titleData.rightData }}</div>
    </div>
  </div>
</template>

<script>
import windowStorage from '../utils/storage'
export default {
    name: 'loanHeader',
    data() {
        return {
            isInphoneXType: false,
            isIphoneType: false
        }
    },
    components: {},
    created() {
        console.log(this.titleData)
    },
    mounted() {
        this.getPhoneType()
    },
    props: {
        titleData: {
            type: Object,
            default() {
                return {
                    title: '首页',
                    imgType: 1,
                    rightData: ''
                }
            }
        }
    },
    watch: {},
    methods: {
        toSalesMan() {
            this.$emit('toSalesMan', '')
        },
        headerRightClick() {
            this.$emit('headerRightClick', '')
        },
        backClick() {
            this.$emit('backClick', '')
        },
        isIphonex() {
            let platform = navigator.userAgent.toLowerCase()
            const isIPhoneX = /iphone/.test(platform) && screen.width === 375 && screen.height === 812
            // iPhone XS Max
            const isIPhoneXSMax = /iphone/.test(platform) && screen.width === 414 && screen.height === 896
            // iPhone XR
            const isIPhoneXR = /iphone/.test(platform) && screen.width === 414 && screen.height === 896
            console.log(isIPhoneX || isIPhoneXR || isIPhoneXSMax)
            return isIPhoneX || isIPhoneXR || isIPhoneXSMax
        },
        isIphone() {
            let platform = navigator.userAgent.toLowerCase()
            const isIp = /iphone/.test(platform)
            console.log(isIp)
            return isIp
        },
        // 判断ios版本号是否大于11
        gtIos10() {
            // 判断是否 iPhone 或者 iPod
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
                // 判断系统版本号是否大于 4
                console.log(Boolean(navigator.userAgent.match(/OS [1-9]{1}[1-5]{1}/i)))
                return Boolean(navigator.userAgent.match(/OS [1-9]{1}[1-5]{1}/i))
            } else {
                return false
            }
        },
        getPhoneType() {
            if (this.isIphonex()) {
                this.isInphoneXType = true
                // this.$toast("苹果X系列")
            } else {
                if (this.isIphone()) {
                    this.isIphoneType = true
                    // this.$toast("苹果，不是X系列")
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-box {
    height: 1.2rem /* 90/75 */;
    .loan-header {
        height: 1.2rem /* 90/75 */;
        background-color: #fff;
        text-align: center;
        font-size: 0.48rem /* 36/75 */;
        color: #454545;
        width: 100%;
        font-weight: 700;
        line-height: 1.2rem /* 90/75 */;
        position: fixed;
        top: 0;
        z-index: 99;
        .back-btn {
            padding: 0.307rem /* 23/75 */ 0.187rem /* 14/75 */;
            width: 0.587rem /* 44/75 */;
            height: 0.587rem /* 44/75 */;
            position: absolute;
            left: 0;
            top: 0;
        }
        .header-right {
            line-height: 90rpx;
            font-size: 0.4rem;
            color: #454545;
            font-weight: 700;
            padding: 0 0.293rem;
            position: absolute;
            right: 0;
            top: 0;
            &.sales-man {
                font-weight: 500;
                font-size: 26px;
                color: #ed2617;
            }
        }
    }
    .iphone-header {
        top: 0.533333rem;
    }
    .iphoneX-header {
        top: 0;
    }
    .no-bg {
        background-color: transparent;
        color: #fff;
    }
}
</style>
