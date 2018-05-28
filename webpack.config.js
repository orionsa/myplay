module.exports = {
  entry: './app/app.module.js',
  output: {
    path: __dirname + '/bin',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.html$/, use: 'html-loader'},
      { test: /\.scss$/, 
        use: ['style-loader','css-loader','sass-loader']
            
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  devtool: '#inline-source-map'
}