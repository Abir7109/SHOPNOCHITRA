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
    const inquiry = { receivedAt: new Date().toISOString(), ...req.body };
    console.log('Inquiry received:', inquiry);
    try {
      const dataDir = path.join(process.cwd(), 'data');
      fs.mkdirSync(dataDir, { recursive: true });
      fs.appendFileSync(path.join(dataDir, 'inquiries.jsonl'), JSON.stringify(inquiry) + '\n', 'utf8');
    } catch (err) {
      console.error('Failed to persist inquiry:', err);
    }
    res.json({
      success: true,
      message: 'Thank you for your interest in Shopno Chitra. Our studio team will contact you shortly.'
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

  app.get('/privacy', (_req, res) => {
    const file = path.join(getPagesDir(), 'privacy.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/');
  });

  app.get('/terms', (_req, res) => {
    const file = path.join(getPagesDir(), 'terms.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/');
  });

  app.get('/blog', (_req, res) => {
    const file = path.join(getPagesDir(), 'blog', 'index.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/');
  });

  app.get('/blog/:slug', (req, res) => {
    const slug = String(req.params.slug || '');
    if (!/^[a-z0-9-]+$/.test(slug)) return res.redirect('/blog');
    const file = path.join(getPagesDir(), 'blog', slug + '.html');
    if (fs.existsSync(file)) return res.sendFile(file);
    res.redirect('/blog');
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
