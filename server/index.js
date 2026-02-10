import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST']
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

io.on('connection', (socket) => {
    // User connected, notify others
    socket.broadcast.emit('notification', 'User X has connected');

    // Handle incoming message
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    // Handle user leaving
    socket.on('disconnect', () => {
        socket.broadcast.emit('notification', 'User X has disconnected');
    });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});