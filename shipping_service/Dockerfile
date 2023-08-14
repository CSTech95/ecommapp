FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY package*.json ./

RUN npm install

RUN npm install amqplib
RUN npm install @types/amqplib

COPY . .


EXPOSE 3777
CMD [ "npm", "start" ]