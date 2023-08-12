FROM node:20-alpine

WORKDIR /usr/src/app

# 
COPY package*.json ./

RUN npm install

#RUN apk add --no-cache --virtual .build-deps alpine-sdk python \
# && npm install \
# && npm rebuild bcrypt --build-from-source \
# && apk del .build-deps

COPY . .
#COPY ./init.sql /app/docker-entrypoint-initdb.d/
#COPY ./tsconfig.json /app/

#RUN rm -rf node_modules

# Same as npm install
#RUN npm install

EXPOSE 3101
#CMD [ "npm", "start" ]
#COPY ./auth_service /app
#CMD [ "pwd" ]

#CMD ts-node-dev src/index.ts
#CMD [ "tsnd", "--respawn", "./src/index.ts" ]
#EXPOSE 3101

#    RUN tsc
#CMD ["ts-node-dev" "src/index.ts"]
#WORKDIR /usr/src/app

#COPY package*.json .

#RUN npm install

#COPY . .


#END OF FILE

#FROM node:18.16.0-alpine as base

#WORKDIR /usr/src/app

## Add package file
#COPY package*.json .

## Install deps
#RUN npm install

## Copy source
#COPY . .
#COPY ./auth_service/src .
#COPY tsconfig.json ./tsconfig.json




## Build dist
##RUN yarn build

## Start production image build
#FROM node:18.16.0-alpine

## Copy node modules and build directory
#COPY --from=base ./node_modules ./node_modules
#COPY --from=base /dist /dist

## Copy static files
#COPY src/public dist/src/public

## Expose port 3000
#EXPOSE 3101
#CMD ["dist/src/server.js"]