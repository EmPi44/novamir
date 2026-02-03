import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function htmlRewrite(): Plugin {
  return {
    name: 'html-rewrite',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const cleanPages = ['/privacy', '/privacy-policy', '/terms-conditions'];
        if (req.url && cleanPages.includes(req.url.split('?')[0])) {
          req.url = req.url.split('?')[0] + '.html' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        }
        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
        },
      },
      plugins: [htmlRewrite(), react()],
      envPrefix: 'VITE_',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
