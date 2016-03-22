"use strict";

module.exports = {
    entry: "./ts/app/app.js",
    output: {
        filename: "./dist/bundle.js"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter"
    }
};