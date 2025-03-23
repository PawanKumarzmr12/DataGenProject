# Base image
FROM node:18

# Work directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build Nuxt app
RUN npm run build

# Start server
CMD ["npm", "start"]
