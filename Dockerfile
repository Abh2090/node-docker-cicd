FROM node:18

WORKDIR /app

COPY . .

ARG VERSION
ENV VERSION=$VERSION

CMD ["node", "app.js"]

