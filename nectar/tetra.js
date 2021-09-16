const http = require("http");
const fs = require("fs");
const url = require("url");
const { URL, URLSearchParams } = url;
const { spawn } = require("child_process"); 

const PORT = process.argv[2] 
const HTML_DIR = process.cwd;
const HOOKS_DIR = process.cwd;
const SERVER_IP = "0.0.0.0";

const server = http.createServer( function(req, res) {
    // IP:PORT/json?min=20&max=40
    const baseUrl = `http://${SERVER_IP}:${PORT}`;
    const parsedUrl = new URL(req.url, baseUrl);
    const queryString = parsedUrl.search;
    
    const path = parsedUrl.pathname;
    
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(`${HTML_DIR}/index.html`, function(err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        }); 
    }
    // /json?min=0&max=20
    if (req.method === 'GET' && path === '/heartbeat') {
        res.writeHead(200, {"Content-Type": "application/json"});

        const pipeline = spawn(
            `${HOOKS_DIR}/heartbeat`, [ queryString ]);

        pipeline.stderr.on("data",
             (err) => console.error(Buffer.from(err).toString()));

        pipeline.stdout.pipe(res);
    }

    // Not sure we want CI/CD in the stock server.js file.
    // Better to have tetra handle this.

    // CI/CD build trigger:  https://app.nodeholder/build 
    // This is useful if you want to serve a fresh build.
    // A push on GitHub,GitLab etc will call this and we do our thing.
    if (req.method === 'GET' && path === '/build') {
        res.writeHead(200, {"Content-Type": "application/json"});
        const pipeline = spawn(
            `${HOOKS_DIR}/build`, [ queryString ]);

        pipeline.stderr.on("data",
             (err) => console.error(Buffer.from(err).toString()));
        pipeline.stdout.pipe(res);
    }

   return true;
});

server.listen(PORT, SERVER_IP);
console.log(`Node application running on ${SERVER_IP}:${PORT}`);
const hostname = spawn("hostname", ["-I"]);
hostname.stdout.on("data", function(data) {
    const { HTML_PORT } = process.env;
    console.log(
        `Dashboard on IP: ${data.toString().split(" ")[0]}:${PORT}/`
    );
});
