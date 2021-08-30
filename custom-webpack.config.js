const webpack = require('webpack');
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: '[name]-[hash].js',
        chunkFilename: '[id]-[chunkhash].js',
        publicPath: '/',
    },
    plugins: [
        new WebpackAssetsManifest({
            publicPath: true,
            output: "asset-manifest.json",
            transform: (assets) => {
                const entrypoints = [];
                for (let file in assets) {
                    if(assets[file].endsWith(".js") || assets[file].endsWith(".css")) {
                        entrypoints.push(assets[file]);
                    }
                }
                assets["entrypoints"] = entrypoints;
            }
        }),
    ]
};
