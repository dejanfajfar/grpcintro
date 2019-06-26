# grpc simple sample

The purpose of this application is to show the basic features and implementation details for a simple *gRPC* client and server. 

## Structure

To keep things simple, you know the KISS principle, we have stuffed all the code into one git repository that now contains multiple projects. The projects are:

### Server

The sample gRPC server implementation

### jsClient

A collection of simple nodejs applications to show various gRPC scenarios

## Showcases

* A simple chat
* A stream of generated numbers
* A simple echo service

### Simple echo service

First we have to start the server locally.

```bash
node server/index.js
```

In another shell start the client:

```bash
node jsClient/hello.js
```

### Stream of generated numbers

First we have to start the server locally.

```bash
node server/index.js
```

In another shell start the client:

```bash
node jsClient/cointoss.js
```

## gRPC concerns

|Concern|Software|
|---|---|
|Server side load balancing|Lyn Envoy, NGinx|
|Client side load balancing|With central registry|
|Service registry|Consul, Zookeper, Eureka, gRPC LB|
|Health Checking|gRPC health check protocol, custom endpoints|
|Security|TLS, token headers|
|Authorization|token headers|
|Distributed tracing|Zipkin, Brave|
|Monitoring|Prometheus|
|Transcoding (gRPC <-> REST)|gRPC Gateway|

