# Dockerfile para desplegar una app Vite + React en Render
# Usa una imagen oficial de Node.js como base
FROM node:18-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* yarn.lock* ./

# Instala las dependencias
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build || yarn build

# --- Etapa de producción ---
FROM nginx:alpine

# Copia los archivos estáticos generados al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuración personalizada de Nginx para SPA (React Router DOM)
COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
