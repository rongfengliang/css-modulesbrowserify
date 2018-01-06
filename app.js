var b = require('browserify');
var fs = require("fs")
var bundler = b('./src/main.js')
bundler.plugin(require('css-modulesify'), {
  rootDir: __dirname,
  output: 'dist/bundle.css'
});
bundler.transform('uglifyify', { global: true  })
bundler.bundle()
.pipe(fs.createWriteStream(__dirname + '/dist/app.js'))