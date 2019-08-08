<template>
  <div id="app" class="app-box" :class="{'iphone-top':isIphoneType,'iphoneX-top':isInphoneXType}" v-cloak>
      <div class="app-top-bg" :class="{'normal-height':isIphoneType,'high-height':isInphoneXType}"></div>
    <!-- <transition name="router-fade" mode="out-in"> -->
    <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            isInphoneXType: false,
            isIphoneType: false
        }
    },
    mounted() {
        this.getPhoneType();
    },
    methods: {
        isIphonex() {
            let platform = navigator.userAgent.toLowerCase()
            const isIPhoneX =  /iphone/.test(platform) && screen.width === 375 && screen.height === 812
            // iPhone XS Max
            const isIPhoneXSMax = /iphone/.test(platform) && screen.width === 414 && screen.height === 896
            // iPhone XR
            const isIPhoneXR = /iphone/.test(platform) && screen.width === 414 && screen.height === 896
            return isIPhoneX || isIPhoneXR || isIPhoneXSMax
        },
        isIphone() {
            let platform = navigator.userAgent.toLowerCase()
            const isIp = /iphone/.test(platform)
            return isIp
        },
        // 判断ios版本号是否大于1
        getPhoneType() {
            if (this.isIphonex()) {
                this.isInphoneXType = true;
            } else {
                if (this.isIphone()) {
                    this.isIphoneType = true;
                }
            }
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #36383a;
}
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}
[v-cloak] {
    display: none;
}
#app.app-box {
    box-sizing: border-box;
    overflow-y: hidden;
}
#app.iphone-top {
    padding-top: .533333rem;
}
#app.iphoneX-top {
    padding-top: 0 
}
.app-top-bg {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 990;
}
.high-height {
    height: 0;
    // background-color: pink;
}
.normal-height{
    height: .533333rem;
    background-color: #fff;
}
</style>
