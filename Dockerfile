# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Copy the .env file
COPY .env .env

# Expose the port the app runs on
EXPOSE 3004

# Command to run the app
CMD ["node", "index.js"]
