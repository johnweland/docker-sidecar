import * as net from 'net';


const PATH = '/var/run/generic/unix.sock';

const server = net.createServer();
server.listen(PATH, () => {
    console.log(`unix domain socket server connected on  ${PATH}`);
});

server.on('connection', (s)=> {
    console.log(`connection made to unix domain socket server`);
    s.write('hello-world');
    s.end();
});