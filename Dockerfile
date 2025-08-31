# 1. Build stage
FROM node:18-alpine AS builder

# Set working dir
WORKDIR /app

# Install dependencies (only package.json + lock first for caching)
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy all source code
COPY . .

# Build Next.js app
RUN npm run build

# 2. Production stage
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Next.js runs on port 3000
EXPOSE 3000

CMD ["npm", "start"]