FROM node:18-alpine3.16 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.template /app/.env.template

RUN apk add --no-cache gettext

RUN envsubst < /app/.env.template > /app/.env

EXPOSE 3000

CMD [ "npm", "start" ]
