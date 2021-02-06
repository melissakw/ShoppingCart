FROM node:12.20.1-alpine3.10

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@4.0.1 -g

COPY . ./

CMD ["npm", "start"]