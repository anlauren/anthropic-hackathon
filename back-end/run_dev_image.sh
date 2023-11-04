#!/usr/bin/env bash

DOCKER_IMAGE=hackaton-api-dev:latest

# Build image with tag
docker build -f Dockerfile-dev -t $DOCKER_IMAGE .

# Build image with tag
docker run -it -p 5000:8008 $DOCKER_IMAGE