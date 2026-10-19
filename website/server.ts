import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 8080;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API endpoints and form handling for inquiries
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', project: 'Shopno Chitra' });
  });

  app.post(['/api/contact', '/api/book-a-call'], (req, res) => {
    console.log('Inquiry received:', req.body);
    res.json({
      success: true,
      message: 'Thank you for your interest in Shopno Chitra. A private sales advisor will contact you shortly.'
    });
  });

  const getPagesDir = () => {
    return process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'dist', 'pages')
      : path.join(process.cwd(), 'public', 'pages');
  };

  // Specific routes for Shopno Chitra multi-page architecture
  app.get('/packages', (_req, res) => {
    const file = path.join(getPagesDir(), 'packages.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/');
  });

  app.get('/apartments', (_req, res) => {
    res.redirect('/packages');
  });

  app.get('/contact', (_req, res) => {
    const file = path.join(getPagesDir(), 'contact.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/');
  });

  app.get('/coming-soon', (_req, res) => {
    const file = path.join(getPagesDir(), 'coming-soon.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/');
  });

  app.get('/apartments/:id', (_req, res) => {
    res.redirect('/packages');
  });

  // Vite development middleware or production static server
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Shopno Chitra server running on port ${PORT}`);
  });
}

startServer();
