import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from "@rollup/plugin-image";
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

export default {
    input: "src/index.js",
    output: {
        // file: "dist/main.js",
        dir: "dist",
        format: "es",
        sourcemap: false,
        // inlineDynamicImports: true,
        // preserveModules: true,
    },
    plugins: [
        del({ targets: 'dist/*' }),
        image(),
        postcss(),
        nodeResolve({
            extensions: [".js"],
        }),
        replace({
            // TODO this should be based on cmd args
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment:true,
        }),
        babel({
            presets: ["@babel/preset-react"],
            exclude: 'node_modules/**'
        }),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({ watch: "dist" }),
    ]
};