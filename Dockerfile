FROM node:22-alpine AS builder

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY nuxt.config.js ./
COPY assets ./assets
COPY layouts ./layouts
COPY pages ./pages
COPY static ./static

RUN yarn generate

FROM nginx:1.28-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /build/dist ./

RUN sed -i 's/txt;/txt gpg;/' /etc/nginx/mime.types
RUN sed -i 's/#error_page.*/error_page   404              \/404.html; \
    location = \/404.html { \
        root   \/usr\/share\/nginx\/html; \
    }/' /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
