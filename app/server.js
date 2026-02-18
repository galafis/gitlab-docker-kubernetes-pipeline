const http = require('http');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Pipeline Deploy App</title></head>
      <body>
        <h1>Pipeline de Deploy - GitLab, Docker e Kubernetes</h1>
        <p>Aplicacao Node.js rodando com sucesso!</p>
        <p>Host: ${require('os').hostname()}</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
