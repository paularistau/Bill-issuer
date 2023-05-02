FROM node:16.0.0
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3434
CMD ["yarn", "start"]`