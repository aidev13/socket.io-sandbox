/*
you cannot run the sandbox without starting the node server first
*/

import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
const __dirname = dirname(fileURLToPath(import.meta.url));

// ✅ Serve static files from the "public" folder
app.use(express.static(join(__dirname, "public")));
const playerName = {
   firstName : 'David'
}

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
   socket.on('chat message', (msg) => {
     io.emit('chat message', `${playerName.firstName} says ${msg}`);
   });
 });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000'); // You have to point your browser to the URL
});

