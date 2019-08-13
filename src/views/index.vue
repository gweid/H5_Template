<template>
  <div class="wrapper">
    <cm-header :titleData="titleData" @headerRightClick="headerRightClick" @backClick="backClick"></cm-header>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" to="/test" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">合作</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
    <div class="box"></div>
  </div>
</template>

<script>
import cmHeader from '../components/cmHeader';

export default {
    components: {
        cmHeader
    },
    data() {
        return {
            titleData: {
                title: '首页',
                imgType: 1,
                rightData: ''
            },
            active: 'home'
        }
    },
    methods: {
        showClick() {
            this.show = true
        },
        headerRightClick() {},
        backClick() {}
    },
    async created() {
        const data = await this.$http.post('/salesman/bdlist', {
            token_code: 'CxOxCJTn8S8wIAy2jBd-bgnPpZ8YZd6mYv5DSfngnK5-b9vioQyyPKkVZQO95CvrSNzn1nro3ud8zw3aBwuFVDOQ',
            limit: 20,
            page: 1
        })
        console.log(data)
    }
}
</script>

<style lang="scss" scoped>
.box {
    width: 315px;
    height: 40px;
    background-color: pink;
}
</style>
