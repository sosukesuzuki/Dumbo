"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
var MODE = process.env.NODE_ENV || "development";
var DEV = MODE === "development";
var copyRules = [
    {
        from: __dirname + "/src/index.html",
        to: __dirname + "/dist/index.html"
    }
];
var configuration = {
    mode: MODE,
    devtool: DEV ? "inline-source-map" : "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader/url"
                    },
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [new copy_webpack_plugin_1.default(copyRules)]
};
exports.default = configuration;
