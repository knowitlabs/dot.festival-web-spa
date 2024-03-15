import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import typescript from 'typescript';
import styles from '@ironkinoko/rollup-plugin-styles';
import terser from '@rollup/plugin-terser';
import svg from 'rollup-plugin-svg-import';
import commonjs from '@rollup/plugin-commonjs';
// import { generateImageSizes } from 'rollup-plugin-generate-image-sizes';
import analyze from 'rollup-plugin-analyzer';

export default [
  {
    input: ['src/main.ts'],
    external: (id) => {
      if (id.includes('history')) return true;

      return false;
    },
    output: {
      format: 'es',
      sourcemap: true,
      exports: 'named',
      dir: 'dist',
      assetFileNames: '[name][extname]'
    },

    plugins: [
      // generateImageSizes({
      //   size: [1400, 1024, 640, 320],
      //   dir: 'public/images/editorial',
      //   maxParallel: 1
      // }),
      svg({
        // process SVG to DOM Node or String. Default: false
        stringify: true
      }),
      styles({
        mode: ['extract', './css/dot.festival.css'],
        url: false,
        minimize: true
      }),
      json(),
      nodeResolve(),
      commonjs(),
      ts({
        useTsconfigDeclarationDir: true,
        sourceMap: false,
        typescript
      }),
      terser()
      // analyze({
      //   summaryOnly: true
      // })
    ]
  }
];
