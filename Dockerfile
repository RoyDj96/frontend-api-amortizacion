FROM node:23-bullseye
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npx", "serve", "-s", "build", "-l", "5173"]