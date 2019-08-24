<template>
  <div
    id="app"
    class="app-box"
    :class="{'iphone-top':isIphoneType,'iphoneX-top':isInphoneXType}"
    v-cloak
  >
    <div class="app-top-bg" :class="{'normal-height':isIphoneType,'high-height':isInphoneXType}"></div>
    <!-- <transition name="router-fade" mode="out-in"> -->
    <div class="view-box">
      <router-view />
    </div>
    <!-- </transition> -->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" to="/test" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">合作</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            isInphoneXType: false,
            isIphoneType: false,
            active: 'home'
        }
    },
    mounted() {
        this.getPhoneType()
    },
    methods: {
        isIphonex() {
            let platform = navigator.userAgent.toLowerCase()
            const isIPhoneX = /iphone/.test(platform) && screen.width === 375 && screen.height === 812
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
                this.isInphoneXType = true
            } else {
                if (this.isIphone()) {
                    this.isIphoneType = true
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
    display: flex;
}
#app.iphone-top {
    padding-top: 0.533333rem;
}
#app.iphoneX-top {
    padding-top: 0;
}
.app-top-bg {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 990;
}
.view-box {
    flex: 1;
    padding-bottom: 50px;
}
.navbar-box {
    width: 375px;
    height: 100px;
    background-color: pink;
}
.high-height {
    height: 0;
    // background-color: pink;
}
.normal-height {
    height: 0.533333rem;
    background-color: #fff;
}
</style>
