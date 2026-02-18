FROM node:18-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm install --production

COPY app/ .

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

CMD ["node", "server.js"]
