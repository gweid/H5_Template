<template>
  <div>
    <div>
      <button @click="isShow=!isShow">点击</button>
    </div>
    <vertical-toggle>
      <ul v-show="isShow">
        <li v-for="(item,index) in bdList" :key="index">{{item.name}}</li>
      </ul>
    </vertical-toggle>
  </div>
</template>

<script>
import VerticalToggle from '../utils/vertical-toggle'
export default {
    components: {
        VerticalToggle
    },
    data() {
        return {
            isShow: false,
            bdList: []
        }
    },
    async created() {
        const data = await this.$http.post('/salesman/bdlist', {
            token_code: 'CxOxCJTn8S8wIAy2jBd-bgnPpZ8YZd6mYv5DSfngnK5-b9vioQyyPKkVZQO95CvrSNzn1nro3ud8zw3aBwuFVDOQ',
            limit: 20,
            page: 1
        })
        this.bdList = data.data.data.data
        console.log(this.bdList)
    }
}
</script>

<style>
</style>
