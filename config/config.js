const publicPath = process.env.NODE_ENV === 'development' ? {
    js: '/',
    css: '/',
    img: '/',
    font: '/'
} : {
    js: '//j1.58cdn.com.cn/git/jianzhi-project/react-hooks-study/',
    css: '//c.58cdn.com.cn/git/jianzhi-project/react-hooks-study/',
    img: '//img.58cdn.com.cn/git/jianzhi-project/react-hooks-study/',
    font: '//img.58cdn.com.cn/git/jianzhi-project/react-hooks-study/'
}
module.exports.publicPath = publicPath