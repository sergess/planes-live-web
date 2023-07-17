# Architecture Decision record template by Yury.S.

# Implement Multi page InApp campaigns
July, 2023

## Status

accepted, implemented

## Context

We want to use `https` localhost against of `http` for local development.
## Decision

Only way to integrate it is to add certificates and create small server.
Link for solution https://ilango.hashnode.dev/serving-a-nextjs-application-over-https-in-localhost

## Consequences

Now we are able to use both `https` and `http` connection.
We should install `http` node library as well as create `root/server.js`
