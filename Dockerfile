FROM node:current-alpine

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app
RUN yarn
COPY . .
RUN yarn build

CMD [ "node", "dist/app.js" ]
