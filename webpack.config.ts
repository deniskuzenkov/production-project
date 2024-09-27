import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";
import path from "node:path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    }

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    return buildWebpackConfig({
        mode,
        paths: paths,
        isDev,
        port: PORT
    });
}