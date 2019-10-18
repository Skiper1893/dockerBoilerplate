FROM node:10
# Create app directory
WORKDIR /home/node
# Add package.json, package.lock.json and yarn.lock
COPY package*.json yarn.lock ./
RUN yarn install
# Copy app
COPY . /home/node
# Expose port
EXPOSE 3000
# Run app
CMD ["yarn", "start:dev"]
