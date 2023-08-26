FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY ./auth_service/package*.json .


RUN npm install



COPY ./auth_service .


EXPOSE 3101
CMD [ "npm", "start" ]