
FROM node:18.18.0
# Installing libvips-dev for sharp Compatibility
RUN apt-get update
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
RUN chown  node:node /opt
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
USER node
RUN yarn install
RUN mkdir /opt/app
RUN chown  node:node /opt/app
WORKDIR /opt/app
COPY ./ .
USER root
RUN chmod 777 -R ./public/uploads
RUN chown -R node:node /opt/app/.strapi
USER node
RUN yarn build
EXPOSE 8021
CMD ["yarn", "develop"]
