FROM node:14-alpine AS react_dev

WORKDIR /app
COPY package*.json ./
RUN npm ci -qy
COPY . .

EXPOSE 3000

CMD ["npm", "start"]