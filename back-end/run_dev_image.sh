#!/usr/bin/env bash

DOCKER_IMAGE=hackaton-api-dev:latest

# Build image with tag
docker build -f Dockerfile-dev -t $DOCKER_IMAGE .

# Build image with tag
docker run -it \
  -e ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY}" \
  -e OPENAI_API_KEY="${OPENAI_API_KEY}" \
  -e OPENAI_API_BASE="${OPENAI_API_BASE}" \
  -e PINECONE_API_KEY="${PINECONE_API_KEY}" \
  -e PINECONE_ENV="${PINECONE_ENV}" \
  -p 5001:8008 \
  -v $(pwd):/code \
  $DOCKER_IMAGE
