# Use the official Node.js image as base
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Sequelize CLI globally
RUN npm install -g sequelize-cli
RUN npm install -g nodemon
# Copy the rest of the application code to the working directory
COPY . .

# Run sequelize migrations
RUN npx sequelize-cli db:migrate

# Expose any ports the app is expecting
EXPOSE 5000

# Start the application
CMD ["npm", "start"]