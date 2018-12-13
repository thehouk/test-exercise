FROM node:8.14.0-jessie-slim

RUN mkdir services

WORKDIR /services

COPY ./ ./

EXPOSE 80

RUN npm install

ENTRYPOINT [ "npm", "run", "start"]
