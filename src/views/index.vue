<template>
  <div class="wrapper">
    <van-nav-bar title="首页" />
    <div class="content">
      <van-list>
          <p v-for="item in 100" :key="item">11111</p>
      </van-list>
    </div>
  </div>
</template>

<script>
import cmHeader from '../components/cmHeader'

export default {
    components: {
        cmHeader
    },
    data() {
        return {
            loading: false,
            finished: false
        }
    },
    methods: {},
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
.wrapper {
    width: 375px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.content {
    width: 375px;
    box-sizing: border-box;
    height: 100%;
    padding: 15px;
    overflow-y: scroll;
}
</style>
