var b = require('browserify');
var fs = require("fs")
var cssModulesify = require("css-modulesify")
var bundler = b('./src/main.js')
bundler.plugin(require('css-modulesify'), {
  rootDir: __dirname,
  output: 'dist/bundle.css',
  generateScopedName: cssModulesify.generateShortName
});
bundler.transform('uglifyify', { global: true  })
bundler.bundle()
.pipe(fs.createWriteStream(__dirname + '/dist/app.js'))