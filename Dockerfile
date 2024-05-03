FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./src ./src

COPY ./public ./public

COPY .env.production.local ./

RUN npm run build

FROM nginx:alpine

COPY ./nginx/default.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

ENV API_URL 'https://backend.example.com'

CMD ["nginx", "-g", "daemon off;"]