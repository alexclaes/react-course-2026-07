const crypto = require('crypto');
const express = require('express');
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'database.sqlite');

// Middleware
app.use(express.json());

// CORS - allow requests from Vite dev server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

async function startServer() {
  const SQL = await initSqlJs();

  // Load existing database or create a new one
  let db;
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  // Save database to file
  function saveDb() {
    const data = db.export();
    fs.writeFileSync(DB_PATH, Buffer.from(data));
  }

  // Create table
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      date TEXT NOT NULL,
      message TEXT NOT NULL,
      votes INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Seed with initial data if table is empty
  const [{ values }] = db.exec('SELECT COUNT(*) as count FROM posts');
  if (values[0][0] === 0) {
    const stmt = db.prepare(
      'INSERT INTO posts (id, title, author, date, message, votes) VALUES (?, ?, ?, ?, ?, ?)'
    );
    stmt.run([crypto.randomUUID(), 'Production Deployment am Freitagabend', 'Nina', '2026-06-01', 'No risk, no Risiko!', 0]);
    stmt.run([crypto.randomUUID(), 'Nur kurz ein kleines Refactoring', 'Sophie', '2026-06-07', 'Jetzt ist der Code sauberer, aber nichts geht mehr.', 0]);
    stmt.run([crypto.randomUUID(), 'TypeScript hat wieder recht gehabt', 'Felix', '2026-06-13', 'Ich war kurz beleidigt, dann war ich dankbar.', 0]);
    stmt.run([crypto.randomUUID(), 'Kurz das Build fixen', 'Tim', '2026-06-27', 'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Groesse.', 0]);
    stmt.free();
    saveDb();
    console.log('Database seeded with initial posts.');
  }

  // Helper: run a SELECT and return all rows as objects
  function allRows(sql, params = []) {
    const stmt = db.prepare(sql);
    stmt.bind(params);
    const rows = [];
    while (stmt.step()) {
      rows.push(stmt.getAsObject());
    }
    stmt.free();
    return rows;
  }

  // Helper: run a SELECT and return a single row as object (or null)
  function getRow(sql, params = []) {
    const stmt = db.prepare(sql);
    stmt.bind(params);
    const row = stmt.step() ? stmt.getAsObject() : null;
    stmt.free();
    return row;
  }

  // GET all posts (ordered by created_at)
  app.get('/api/posts', (req, res) => {
    try {
      const rows = allRows('SELECT * FROM posts ORDER BY created_at');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET single post by id
  app.get('/api/posts/:id', (req, res) => {
    try {
      const row = getRow('SELECT * FROM posts WHERE id = ?', [req.params.id]);
      if (!row) return res.status(404).json({ error: 'Post not found' });
      res.json(row);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // POST create a new post
  app.post('/api/posts', (req, res) => {
    try {
      const { title, author, date, message, votes } = req.body;
      const id = crypto.randomUUID();
      db.run(
        'INSERT INTO posts (id, title, author, date, message, votes) VALUES (?, ?, ?, ?, ?, ?)',
        [id, title, author, date, message, votes || 0]
      );
      saveDb();
      const row = getRow('SELECT * FROM posts WHERE id = ?', [id]);
      res.status(201).json(row);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // PUT update a post
  app.put('/api/posts/:id', (req, res) => {
    try {
      const { title, author, date, message, votes } = req.body;
      // sql.js requires null (not undefined) for COALESCE to work
      db.run(
        'UPDATE posts SET title = COALESCE(?, title), author = COALESCE(?, author), date = COALESCE(?, date), message = COALESCE(?, message), votes = COALESCE(?, votes) WHERE id = ?',
        [title ?? null, author ?? null, date ?? null, message ?? null, votes ?? null, req.params.id]
      );
      if (db.getRowsModified() === 0) return res.status(404).json({ error: 'Post not found' });
      saveDb();
      const row = getRow('SELECT * FROM posts WHERE id = ?', [req.params.id]);
      res.json(row);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE a post
  app.delete('/api/posts/:id', (req, res) => {
    try {
      db.run('DELETE FROM posts WHERE id = ?', [req.params.id]);
      if (db.getRowsModified() === 0) return res.status(404).json({ error: 'Post not found' });
      saveDb();
      res.json({ deleted: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
