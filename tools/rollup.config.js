/* eslint-disable @typescript-eslint/explicit-function-return-type */
import typescript from '@rollup/plugin-typescript';
import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';
import inputFiles from './files';

const banner = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
    html,
    body {
      margin: 0px;
      overflow: hidden;
      height: 100%;
    }
  </style>
</head>
<body>
  <script type="module">`;
const footer = `  </script>
</body>
</html>`;

export default (commandLineArgs) => ({
  input: inputFiles,
  output: {
    dir: 'docs',
    format: 'es',
    entryFileNames: '[name].html',
    banner,
    footer,
    paths: (id) => {
      if (id.endsWith('three')) {
        return './js/vendor/three.js';
      }
      if (id.endsWith('dat.gui')) {
        return './js/vendor/dat.gui.js';
      }
      if (id.endsWith('test')) {
        return './js/vendor/test.js';
      }
      return id;
    },
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts'],
    }),
    commandLineArgs.configFast ? sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript'],
    }) : typescript(),
  ],
  external: (id) => /(three)|(dat.gui)|(test)/.test(id),
});
