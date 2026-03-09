FROM node:18

# create
WORKDIR /app

# copy
COPY package*.json ./

# run
RUN npm install

# copy project files
COPY . .

# expose port
EXPOSE 3000

# start server
CMD ["npm", "start"]
