const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const ECHO_PROTO_PATH = __dirname + '/../proto/echo.proto';

let packageDefinition = protoLoader.loadSync(
    ECHO_PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const echo = protoDescriptor.echo;



function hello(call, callback) {
    function handleHello(parameters){
        return {
            message: `Hello ${parameters.greeting} ${parameters.name}`
        }
    }

    callback(null, handleHello(call.request));
    
}
const server = new grpc.Server();
server.addService(echo.Echo.service, {
    Hello: hello
});

server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start();