FROM node:18.20.5-alpine

WORKDIR /app

COPY package*.json ./

COPY src/backend_db/package*.json src/backend_db/

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]