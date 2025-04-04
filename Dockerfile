
# # Stage 1: Build the Next.js app
# # FROM node:18-alpine AS builder
# FROM node:20 AS builder

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all source files
# COPY . .

# # Build the Next.js app
# # RUN npm run build
# RUN npx next build

# Stage 2: Running environment
# FROM node:18-alpine
FROM node:20-alpine

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

COPY .next ./.next
COPY node_modules ./node_modules
COPY package.json ./package.json
COPY public ./public

# Install only production dependencies
# RUN npm install --only=production
# RUN npm install

# Expose port 3000
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]
# CMD ["npx", "next", "start"]