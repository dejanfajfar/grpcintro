const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const ECHO_PROTO_PATH = __dirname + '/../proto/echo.proto'

var packageDefinition = protoLoader.loadSync(
    ECHO_PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var echoDefinition = grpc.loadPackageDefinition(packageDefinition).echo;
var client = new echoDefinition.Echo('localhost:50051', grpc.credentials.createInsecure());

client.Hello({
    name: 'Thomson',
    greeting: 'Mr'
}, (err, greeting) => {
    if (err) {
        console.error(err);
    }
    console.log(greeting.message);
})