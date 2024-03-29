const path = require('path')

module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    publicPath: process.env.NODE_ENV === 'production' ? '/asset/salesman/' : '/', //开发环境
    // publicPath: process.env.NODE_ENV === 'production' ? 'https://res.cmfspay.com/static/hujin/salesman/' : '/', //预发布和线上

    css: {
        // 是否开启支持 foo.module.css 样式
        modules: false,
        // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: false,
        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false,
        loaderOptions: {
            css: {
                // 给 css-loader 传递选项
            },
            sass: {
                // 给 sass-loader 传递选项
                data: `@import "@/styles/mixin.scss";@import "@/styles/common.scss";`
            },
            postcss: {
                // 给 postcss-loader 传递选项
                plugins: [require('postcss-px2rem')({ remUnit: 37.5 }), require('autoprefixer')(['iOS >= 7', 'Android >= 4.1'])]
            }
        }
    },
    // Source Maps 打包编译时,是否需要在生产环境中生成对应的sourceMap,关闭提高构建速度
    productionSourceMap: false,

    // 通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: ['webpack-dev-server/client'],

    // eslint-loader 是否在保存的时候检查
    // lintOnSave: true,
    
    // 调整内部的 webpack 配置  分别包括了:添加别名, html取消压缩, 打包分析等
    chainWebpack: config => {
        // 添加别名
        // config.resolve.alias
        //     .set('@', resolve('src'))
        //     .set('@components', resolve('src/components'))
        
        // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        // types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },

    configureWebpack: config => {
        // config.entry = ['babel-polyfill', './src/main.js'];
    },

    // 配置 webpack-dev-server 行为
    devServer: {
        host: '10.8.0.116',
        port: 90,
        disableHostCheck: true,
        // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
		// proxy: {
		// 	"/rest/*": {
		// 		target: "http://172.16.1.12:7071",
		// 		changeOrigin: true,
		// 		// ws: true,//websocket支持
		// 		secure: false
		// 	},
		// 	"/pbsevice/*": {
		// 		target: "http://172.16.1.12:2018",
		// 		changeOrigin: true,
		// 		//ws: true,//websocket支持
		// 		secure: false
		// 	},
		// }
    }
}

// function addStyleResource(rule) {
//   rule
//     .use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/styles/mixin.scss'),
//         path.resolve(__dirname, './src/styles/common.scss')
//       ]
//     })
// }
