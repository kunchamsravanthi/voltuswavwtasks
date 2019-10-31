
FROM node:10-alpine

Run mkdir -p/home/node/app/node-modules && chown -R node:node/home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

Run npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
