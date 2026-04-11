# Build stage
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# Production stage
FROM node:24-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --legacy-peer-deps

RUN adduser -D app
USER app

EXPOSE 4000

CMD ["node", "dist/src/main"]

