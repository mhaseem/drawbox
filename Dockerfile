FROM node:12
WORKDIR /app
COPY . .
CMD ["node", "app.js"]
