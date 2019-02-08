FROM node:current-slim

RUN ln -fs /usr/share/zoneinfo/Europe/Madrid /etc/localtime
RUN npm install pm2 -g

WORKDIR /app
ADD package.json .
RUN npm install

ADD . /app

CMD ["pm2-runtime", "start", "--", "dev"]