# 1. For build React app
FROM node:lts AS development

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

# Copy source code
COPY . /app

# Set environment variables
ENV CI=true
ENV PORT=3000

# Start development server
CMD ["npm", "start"]

# Build stage
FROM development AS build
RUN npm run build

# 2. For Nginx setup
FROM nginx:alpine

# Copy nginx configuration
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory for nginx
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets and copy built app
RUN rm -rf ./*
COPY --from=build /app/build .

# Start nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]
