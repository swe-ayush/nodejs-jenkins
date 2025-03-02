# Use the official Node.js 22 image
FROM node:22

# Set the working directory in the container
WORKDIR /app

RUN sudo chown -R node:node /home/node/.npm
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

USER node
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]