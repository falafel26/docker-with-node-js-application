FROM node:13-alpine
RUN mkdir -p /home/docker-application/
COPY . /home/docker-application/
WORKDIR /home/docker-application/
RUN npm install
CMD ["node","app.js"]
