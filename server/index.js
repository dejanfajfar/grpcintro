const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const helloHandler = require('./handler/hello');
const numbersHandler = require('./handler/numbers');
const chatHandler = require('./handler/chat');

const PROTO_PATH = __dirname + '/../proto/intro.proto';

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const introPackage = protoDescriptor.intropackage;

const server = new grpc.Server();
server.addService(introPackage.IntroService.service, {
    Hello: helloHandler,
    Numbers: numbersHandler
});
server.addService(introPackage.ChatService.service, {
    join: chatHandler.join,
    send: chatHandler.send
});

server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start();