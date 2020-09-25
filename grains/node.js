export default function (version, framework, database) {
  let payload = {
    files: {
      "package.json": {
        content: {
          scripts: {
            start:
              "./node_modules/node/node_modules/.bin/node ./node_modules/nodemon/bin/nodemon.js ./src/index.js"
          },
          dependencies: {
            node: version.toString()
          },
          devDependencies: {
            nodemon: "^1.18.4"
          }
        }
      },
      "src/index.js": {
        content: `const http = require("http");
http.createServer(function(req, res) {
  res.write(\`Hello World! (node version: \${process.version})\`);
  res.end();
}).listen(8080);`
      },
      "sandbox.config.json": {
        content: `{"template": "node"}`
      }
    }
  };
  if (framework) {
    let dependencies;
    let index;
    switch (framework) {
      case "express":
        dependencies = {
          express: "^4.17.1"
        };
        index = `const express = require('express')
const app = express()
const port = 3000
        
app.get('/', (req, res) => {
  res.send('Hello World!')
})
        
app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`)
})`;
        break;

      case "koa":
        dependencies = {
          koa: "^2.13.0"
        };
        index = `const Koa = require('koa');
const app = new Koa();
       
app.use(async ctx => {
  ctx.body = 'Hello World';
});
       
app.listen(3000);`;
        break;

      case "fastify":
        dependencies = {
          fastify: "^3.4.1"
        };
        index = `const fastify = require('fastify')({
  logger: true
})
        
fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})
        
fastify.listen(3000, (err, address) => {
  if (err) throw err
    fastify.log.info(\`server listening on \${address}\`)
})`;
        break;
      default:
        break;
    }
    payload.files["package.json"].content.dependencies = Object.assign(
      payload.files["package.json"].content.dependencies,
      dependencies
    );
    if (index) payload.files["src/index.js"].content = index;
  }
  if (database) {
    let dependencies;
    switch (database) {
      case "sqlite3":
        dependencies = {
          sqlite3: "^4.0.14"
        };
        break;
      default:
        break;
    }
    payload.files["package.json"].content.dependencies = Object.assign(
      payload.files["package.json"].content.dependencies,
      dependencies
    );
  }
  return payload;
}
