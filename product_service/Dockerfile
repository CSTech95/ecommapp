FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY ./product_service/package*.json .

RUN npm install



COPY ./product_service .


EXPOSE 3000
CMD [ "npm", "start" ]