FROM node:18-alpine AS builder

ENV NODE_OPTIONS --openssl-legacy-provider

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY nuxt.config.js ./
COPY assets ./assets
COPY layouts ./layouts
COPY pages ./pages
COPY static ./static

RUN yarn generate

FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /build/dist ./dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
