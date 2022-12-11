const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //process.exit();
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Form</title></head><body><h1>fill in form</h1>');
    res.write(
      ' <form action="/message" method="POST"><input type="text" name="message"/>  <button type="submit">submit</button></form>'
    );
    res.write('</body></html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html lang="en">');
  res.write(
    '<head><title>Document my</title></head><body><h1>this is from default node server</h1></body>'
  );
  res.write('</head>');
  res.end();
  //   console.log(res);
});

server.listen(3000);
