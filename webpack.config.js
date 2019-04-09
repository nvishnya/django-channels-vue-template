const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    context: __dirname,
    entry: {
        room_input: './templates/components/room_input_component/index.js',
        chat_room: './templates/components/chat_room_component/index.js',
    },
    output: {
        path: path.resolve('./static/bundles/'),
        filename: "[name]-[hash].js"
    },
    // devtool: 'source-map',
    plugins: [
        new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader",],
            },
        ]    
    }
}