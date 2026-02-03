import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function htmlRewrite(): Plugin {
  return {
    name: 'html-rewrite',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';

        // Redirect /privacy to /privacy-policy (301)
        if (url === '/privacy') {
          res.writeHead(301, { Location: '/privacy-policy' });
          res.end();
          return;
        }

        // Return 404 for non-existent sitemap probes
        if (url.endsWith('.xml') && url !== '/sitemap.xml') {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }

        const cleanPages = ['/privacy-policy', '/terms-conditions'];
        if (cleanPages.includes(url)) {
          req.url = url + '.html' + (req.url!.includes('?') ? '?' + req.url!.split('?')[1] : '');
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
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
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
