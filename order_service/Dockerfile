FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY ./order_service/package*.json .

RUN npm install

RUN npm install amqplib
RUN npm install @types/amqplib

COPY ./order_service .


EXPOSE 3130
CMD [ "npm", "start" ]