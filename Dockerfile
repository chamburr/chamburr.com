FROM node:18-alpine AS builder

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY nuxt.config.js ./
COPY assets ./assets
COPY layouts ./layouts
COPY pages ./pages
COPY static ./static

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile --prod

COPY --from=builder /build/.nuxt ./.nuxt
COPY --from=builder /build/nuxt.config.js ./

EXPOSE 3000

CMD ["yarn", "start"]
