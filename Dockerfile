FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./

COPY craco.config.js ./

RUN npm install

COPY ./src ./src

COPY ./public ./public

RUN npm run build

FROM nginx:alpine

COPY ./nginx/default.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]