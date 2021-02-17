import * as fs from 'fs';
import { AddressInfo, Server } from 'net';

const HANDLE = '/socket_dir/file.sock';

const server = new Server({});

server.on('close', () => { console.info(`Unix Domain Socket Server is closed`) });
server.on('error', (err) => console.error(`Error: ${err}`));
server.on('listening', () => console.info(`listening on ${HANDLE}`));

server.on('connection', (client) => {
    console.log(`Buffer size : ${client.writableLength}`);

    console.log('--------------- server details ---------------');

    let { port, family, address } = server.address() as AddressInfo;

    console.log(`Server is listening at port ${port}`);
    console.log(`Server ip ${address}`);
    console.log(`Server is IP4/IP6 : ${family}`);

    let lport = client.localPort;
    let laddr = client.localAddress;
    console.log(`Server is listening at LOCAL port ${lport}`);
    console.log(`Server LOCAL ip ${laddr}`);
    
    console.log('------------ remote client info --------------');

    let rport = client.remotePort;
    let raddr = client.remoteAddress;
    let rfamily = client.remoteFamily;

    console.log(`REMOTE Socket is listening at port' ${rport}`);
    console.log(`REMOTE Socket ip : ${raddr}`);
    console.log(`REMOTE Socket is IP4/IP6 : ${rfamily}`);

    console.log('----------------------------------------------');
    //let no_of_connections =  server.getConnections(); // sychronous version
    server.getConnections((error, count) => {
        console.log(`Number of concurrent connections to the server :  ${count}`);
    });

    client.setEncoding('utf8');

    client.setTimeout(800000, () => {
        // called after timeout -> same as client.on('timeout')
        // it just tells that soket timed out => its ur job to end or destroy the client.
        // client.end() vs client.destroy() => end allows us to send final data and allows some i/o activity to finish before destroying the socket
        // whereas destroy kills the socket immediately irrespective of whether any i/o operation is goin on or not...force destry takes place
        console.log('Socket timed out');
    });


    client.on('data', (data) => {
        let bread = client.bytesRead;
        let bwrite = client.bytesWritten;
        console.log(`Bytes read : ${bread}`);
        console.log(`Bytes written : ${bwrite}`);
        console.log(`Data sent to server : ${data}`);

        //echo data
        let is_kernel_buffer_full = client.write(`Data :: ${data} was recieved`);
        if (is_kernel_buffer_full) {
            console.log('Data was flushed successfully from kernel buffer i.e written successfully!');
        } else {
            client.pause();
        }
    });

    client.on('drain', () => {
        console.log('write buffer is empty now ... you can resume the writable stream');
        client.resume();
    });

    client.on('error', (error) => {
        console.log(`${error}`);
    });

    client.on('timeout', () => {
        console.log('Socket timed out !');
        client.end('Timed out!');
        // can call client.destroy() here too.
    });

    client.on('end', (data:String) => {
        console.log('Socket ended from other end!');
        console.log(`End data : ${data}`);
    });

    client.on('close', (error) => {
        var bread = client.bytesRead;
        var bwrite = client.bytesWritten;
        console.log(`Bytes read : ${bread}`);
        console.log(`Bytes written :  ${bwrite}`);
        console.log(`Socket closed!`);
        if (error) {
            console.log('Socket was closed due to a transmission error');
        }
    });

    setTimeout(() => {
        var isdestroyed = client.destroyed;
        console.log(`Socket destroyed: ${isdestroyed}`);
        client.destroy();
    }, 1200000);
});

server.maxConnections = 10;
setTimeout(function () {
    server.close();
}, 5000000);





server.listen(HANDLE);