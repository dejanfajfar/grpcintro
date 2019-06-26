const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const helloHandler = require('./handler/helloHandler');
const coinTossHandler = require('./handler/cointToss');
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

function hello(call, callback) {
    callback(null, helloHandler(call.request));
}

function coinToss(call) {
    coinTossHandler(call);
}

const server = new grpc.Server();
server.addService(introPackage.IntroService.service, {
    Hello: hello,
    CoinToss: coinToss
});
server.addService(introPackage.ChatService.service, {
    join: chatHandler.join,
    send: chatHandler.send
});

server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start();