FROM node:current-slim

RUN ln -fs /usr/share/zoneinfo/Europe/Madrid /etc/localtime
RUN npm install pm2 -g

WORKDIR /app
COPY package.json .
RUN npm install

COPY . /app

CMD npm run dev