FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY ./shoppingcart_service/package*.json .

RUN npm install



COPY ./shoppingcart_service .


EXPOSE 3950
CMD [ "npm", "start" ]