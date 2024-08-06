import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
    globals: true,
    environments: 'jsdom',
    setupFiles: ['src/vitest/setupTests.js'],
    reports: ['verbose'],
    restoreMocks: true,
	},
  resolve: {
    alias: {
      $routes: path.resolve(__dirname, './src/routes'),
      $stores: path.resolve(__dirname, './src/stores')
    }
  }
});
