module.exports = {

    devServer: {
        proxy: {
            '/login': {
                target: 'http://127.0.0.1:8081',

            },
            '/api': {
                target: 'http://127.0.0.1:8010'
            }
        }
    }
}