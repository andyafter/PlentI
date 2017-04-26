(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        'rxjs':                       'libs/rxjs',
        '@angular':                   'libs/@angular',
        '@angular/core': 'libs/@angular/core/bundles/core.umd.js',
        '@angular/common': 'libs/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'libs/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'libs/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'libs/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'libs/@angular/http/bundles/http.umd.js',
        '@angular/router': 'libs/@angular/router/bundles/router.umd.js',
        '@angular/router-deprecated': 'libs/@angular/router-deprecated/bundles/router-deprecated.umd.js',
        '@angular/forms': 'libs/@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'libs/@angular/upgrade/bundles/upgrade.umd.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' }
    };

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
