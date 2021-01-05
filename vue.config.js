module.exports = {
    configureWebpack: {
        resolve: {
            // extensions:[], 配置扩展名 默认配置好了
            alias: {
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}
