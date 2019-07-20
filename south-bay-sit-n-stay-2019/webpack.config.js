var dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
var path = require("path");
const Dotenv = require("dotenv-webpack");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  // template: "./handlebars/index.handlebars",
  filename: "./index.html"
});

const dotEnv = new Dotenv({
  path: "./.env", // Path to .env file (this is the default)
  safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
});

//see example set up at : https://github.com/survivejs/webpack-merge/issues/58
//need to actually define the key 'process.env' to use in the front end.
const definePlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development"),
    GOOGLE_MAPS: JSON.stringify(process.env.googleAPIKey)
  }
});

const common = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },

          {
            loader: "css-loader",

            //THESE OPTIONS make CSS modular with webpack; class name scoped locally and specific to component
            options: {
              // modules: true, //this is what enables css modules
              importLoaders: 1,
              // localIdentName: "[name]_[local]_[hash:base64]", //[name] = component name , [local]= name of class or id, [hash]=makes a unique hash for every css component
              sourceMap: true
            }
          },

          "sass-loader"
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },


      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      }

    ]
  },

  plugins: [htmlPlugin, dotEnv, definePlugin], //see const definePlugin above for config to pass .env vars to the front end

  //enable recompile : https://stackoverflow.com/a/45655104
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};

const development = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api/*": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    },
    port: 3000
  }
};

module.exports = (env, argv) => {
  let config = common;

  if (argv.mode === "development") {
    config = merge([common, development]);
  }

  return config;
};
