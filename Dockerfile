# #
# # NORMAL Dockerfile 
# #
# FROM node:17.6.0-buster as build

# WORKDIR /app

# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm ci --production

# COPY . .

# RUN npm run build

# # Nginx web server
# FROM nginx:1.21-alpine as prod

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


#
# Dockerfile for heroku
#
FROM node:17.6.0-buster as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

# Nginx web server
FROM node:17.6.0-alpine as prod

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build /app/build

CMD serve -p $PORT -s build