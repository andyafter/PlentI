var historyApiFallback = require('connect-history-api-fallback');

module.exports = function(){
    var root = '';
    var app = root + 'angular/src/app/';
    var index = root + 'angular/src/index.html';

    var build = {
        path: 'dist/',
        app: 'build/app/',
        fonts: 'build/fonts',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };

    var browserSync = {
        dev: {
            injectChanges: true,
            port: 3000,
            server: {
                baseDir: './dist',
                middleware: [historyApiFallback()]
            }
        },
        prod: {
            port: 3001,
            server: {
                baseDir: './' + build.path,
                middleware: [historyApiFallback()]
            }
        }
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            globalDefs: { DEBUG: false }
        }
    };
    
    var config = {
        root: root,
        app: app,
        //fonts: fonts,
        //bootstrapSass: bootstrapSass,
        //sass: sass,
        browserSync: browserSync,
        systemJs: systemJs
    };

    return config;
};
