# Go API client for rest

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: version not set
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.go.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```golang
import "./rest"
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ScribeServiceApi* | [**ScribeServiceCheck**](docs/ScribeServiceApi.md#scribeservicecheck) | **Post** /grpc/v1/health_check | see: https://github.com/grpc/grpc/blob/master/doc/health-checking.md
*ScribeServiceApi* | [**ScribeServiceFilterLogs**](docs/ScribeServiceApi.md#scribeservicefilterlogs) | **Post** /grpc/v1/filter_logs | 
*ScribeServiceApi* | [**ScribeServiceWatch**](docs/ScribeServiceApi.md#scribeservicewatch) | **Post** /grpc/v1/health_watch | 

## Documentation For Models

 - [HealthCheckResponseServingStatus](docs/HealthCheckResponseServingStatus.md)
 - [ProtobufNullValue](docs/ProtobufNullValue.md)
 - [RpcStatus](docs/RpcStatus.md)
 - [StreamResultOfV1HealthCheckResponse](docs/StreamResultOfV1HealthCheckResponse.md)
 - [V1Address](docs/V1Address.md)
 - [V1FilterLogsRequest](docs/V1FilterLogsRequest.md)
 - [V1FilterLogsResponse](docs/V1FilterLogsResponse.md)
 - [V1Hash](docs/V1Hash.md)
 - [V1HealthCheckRequest](docs/V1HealthCheckRequest.md)
 - [V1HealthCheckResponse](docs/V1HealthCheckResponse.md)
 - [V1Log](docs/V1Log.md)
 - [V1LogFilter](docs/V1LogFilter.md)
 - [V1NullableBool](docs/V1NullableBool.md)
 - [V1NullableString](docs/V1NullableString.md)
 - [V1NullableUint64](docs/V1NullableUint64.md)

## Documentation For Authorization
 Endpoints do not require authorization.


## Author

