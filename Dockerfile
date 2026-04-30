# ---- Build Stage ----
FROM node:25.8.1-alpine as build

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

COPY . .
RUN npm run build || yarn build

# ---- Production Stage ----
FROM nginx:alpine

# Copiar template en vez de nginx.conf
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Copiar build de Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Render usa $PORT (por defecto 10000)
ENV PORT=8080
EXPOSE 8080

# ---- Command line ----
CMD ["nginx", "-g", "daemon off;"]