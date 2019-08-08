module.exports = {
  presets: [
    '@vue/app',
    {
      // polyfills: [
      //   'es6.promise',
      //   'es6.symbol'
      // ]
    },
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
