FROM node:12-alpine

# Dockerize is needed to sync containers startup
ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# create app working directory and change ownership
RUN mkdir -p /usr/src/bookapi && chown -R node:node /usr/src/bookapi

# change working directory to app directory
WORKDIR /usr/src/bookapi

# copy package files into container
COPY package*.json ./

# switch to node user
USER node

# install dependancies
RUN npm install

# copy app source
COPY --chown=node:node . .

# Build typescript
RUN npm run build  

# Set port
EXPOSE 9595

CMD ["npm", "start"]