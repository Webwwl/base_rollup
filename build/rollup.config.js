import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
const path = require('path')

function resolvePath(filePath) {
  return path.join(__dirname, '..', filePath)
}

export default {
  input: resolvePath('src/index.js'),
  output: {
    file: resolvePath('dist/boundle.js'),
    format: 'es',
    name: 'boundle'
  },
  plugins: [
    commonjs(),
    resolve({
      preferBuiltins: false
    }),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
}