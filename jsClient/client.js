const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../proto/intro.proto'

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
let serviceDefinition = grpc.loadPackageDefinition(packageDefinition).intropackage;

module.exports.IntroService = () => {
    return new serviceDefinition.IntroService('localhost:50051', grpc.credentials.createInsecure());
};

module.exports.ChatService = () => {
    return new serviceDefinition.ChatService('localhost:50051', grpc.credentials.createInsecure());
}