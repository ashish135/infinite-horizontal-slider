const path = require("path");
module.exports =  (env, argv)  => {
    return {
    entry:{
        style: './src/css/style.css',
        slider: './src/js/slider.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                    }
                  },
                ],
              }
        ]
    },
    devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
  },
}
}