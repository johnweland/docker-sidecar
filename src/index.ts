import * as fs from 'fs';
import { Server } from 'net';

const HANDLE = '/tmp/some-file.sock';

try {
    fs.unlinkSync(HANDLE)
} catch(err) {
    if (err.code !== 'ENOENT') throw err
}


const server = new Server({});
const chunks:Uint8Array[] = [];
server.on('error', (err) => console.error(err));
server.on('listening', () => console.info('listening'));
server.on('connection', (client) => {
    client.on('error', (err) => console.error(err));
    client.on('data', chunk => chunks.push(chunk));
    client.on('end', () => {
        const payload = Buffer.concat(chunks)
        console.info('end');
    });
});

server.listen(HANDLE);