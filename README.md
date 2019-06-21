# grpc simple sample

The purpose of this application is to show the basic features and implementation details for a simple *gRPC* client and server. 

## Structure

To keep things simple, you know the KISS principle, we have stuffed all the code into one git repository that now contains multiple projects. The projects are:

### Server

The sample gRPC server implementation

### jsClient

A collection of simple nodejs applications to show various gRPC scenarios

## Showcases

* A simple cros client chat
* A client displaying an endless stream of numbers
* A todo list
* A simple echo service

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


