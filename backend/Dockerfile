FROM node:16

RUN apt-get update || : && apt-get install python -y

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
