"use strict";

module.exports = {
    entry: "./Scripts/app/app.js",
    output: {
        filename: "./Scripts/dist/bundle.js"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "flux": "Flux",
        "jquery": "$",
        "object-assign": "assign",
        "eventemitter3": "EventEmitter"
    }
};