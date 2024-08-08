import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setupTests.js'],
    reporters: ['verbose'],
    restoreMocks: true
  },
  server: {
    fs: {
      allow: ['static']
    }
  },
  resolve: {
    alias: {
      $routes: path.resolve(__dirname, 'src/routes'),
      $style: path.resolve(__dirname, 'src/style')
    }
  }
});
