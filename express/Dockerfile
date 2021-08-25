FROM node:alpine

RUN mkdir /app

COPY app.js /app
COPY package.json /app

WORKDIR /app

RUN yarn 

EXPOSE 3000

CMD ["node", "app"]