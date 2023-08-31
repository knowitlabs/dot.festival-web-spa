/* global process */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import typescript from 'typescript';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import externals from 'rollup-plugin-node-externals';

export default [
  {
    input: './src/index.ts',

    output: {
      dir: './dist',
      format: 'es'
    },
    plugins: [
      externals({
        deps: false
      }),
      json(),
      nodeResolve({ exportConditions: ['node'] }),
      commonjs(),
      ts({
        useTsconfigDeclarationDir: false,
        sourceMap: false,
        clean: true,
        // verbosity: 3,
        typescript,
        tsconfig: './tsconfig.json'
      }),
      terser()
    ]
  },
  {
    input: './dist/src/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
