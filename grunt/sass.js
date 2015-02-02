module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/MyProject.Chat.Web/Content/sass/',
            src: ['*.scss'],
            dest: 'src/MyProject.Chat.Web/Content/',
            ext: '.css'
        }]
    }
};