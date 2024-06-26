FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -y
COPY . .
EXPOSE 5173
CMD [ "npm","run","dev" ]

