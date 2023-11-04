#!/usr/bin/env bash

DOCKER_IMAGE=hackaton-api-dev:latest

# Build image with tag
docker build -f Dockerfile-dev -t $DOCKER_IMAGE .

# Build image with tag
docker run -it -e ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY}" -p 5001:8008 -v $(pwd):/code $DOCKER_IMAGE
