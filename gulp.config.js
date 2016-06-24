module.exports = function () {
    var base = 'wwwroot/';

    var config = {
        base: base,
        compiledTs: 'app/**/*.js',
        dist: 'dist',
        index: base + 'index.html',
        ngTemplates: 'app/**/*.html',
        sourceMaps: 'app/**/*.map',
        tsFiles: 'app/**/*.ts',
        tsConfig: 'tsconfig.json',
        vendors: base + 'vendors'
    };

    return config;
};
