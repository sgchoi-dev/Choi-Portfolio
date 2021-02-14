module.exports = {
publicPath: process.env.NODE_ENV === 'production'
    ? '/todo-output/'
    : 'docs'
}