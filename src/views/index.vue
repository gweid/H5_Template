<template>
  <div>
    <cm-header :titleData="titleData" @headerRightClick="headerRightClick" @backClick="backClick"></cm-header>
    <div @click="showClick">点击</div>
    <van-action-sheet v-model="show" :actions="actions" />
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
                name: '首页',
                imgType: 1,
                rightData: '搜索'
            },
            show: false,
            actions: [{ name: '选项' }, { name: '选项' }, { name: '选项', subname: '描述信息' }]
        }
    },
    methods: {
        showClick() {
            this.show = true
        },
        headerRightClick() {

        },
        backClick() {

        }
    }
}
</script>

<style>
</style>
