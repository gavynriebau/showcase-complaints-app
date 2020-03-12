# Multistage build to run frontend build tasks followed by
# actual container image build.
# See: https://docs.docker.com/develop/develop-images/multistage-build/

# Build frontend
FROM node:13.10 AS builder
WORKDIR /app
COPY package.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

# Build actual container
FROM nginx:1.17.9
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/ /usr/share/nginx/html/
