FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY ./shipping_service/package*.json .

RUN npm install

RUN npm install amqplib
RUN npm install @types/amqplib

COPY ./shipping_service .


EXPOSE 3777
CMD [ "npm", "start" ]