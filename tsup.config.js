import { defineConfig } from 'tsup'

export default defineConfig((opts) => ({
  name: 'use-pubsub',
  platform: 'browser',
  sourcemap: true,
  minify: !opts.watch,
  format: ['esm', 'cjs'],
  entry: ['./src/index.ts'],
  clean: true,
  dts: {
    resolve: true,
    entry: './src/index.ts',
  },
}))
