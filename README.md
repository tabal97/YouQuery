# YouQuery
Tired of watching hour long lectures?

Wish there was a way you could quickly catch up on your favourite show?

Look no further, introducing <b>YouQuery</b> the web app for intelligently summarising YouTube videos
<br>

## Disclaimer
YouQuery integrates with OpenAI's API on the paid tier, so please be mindful of how many requests you're making.

## Backend

### Prerequesites
- [Docker CLI](https://docs.docker.com/engine/install/)

cd into the `backend` dir and install dependencies

```
npm ci
```
To build the container and start the backend
```
docker compose up
```

If everything is running correctly you should see 
```
Server running on port X
```
Indicating that the server is now listening out for requests


## Frontend

cd into the `frontend` dir and install dependencies

```
npm ci
```
To build your react app on PORT=3001
```
npm run start
```

If everything is running correctly, navigating to `localhost:3001` on your browser should display the app

## The Team

### [Mohamed El Tabal](github.com/tabal97) - Speech Recognition
### [Abdalraof Benaesha](github.com/Abenaesha) - ChatGPT Integration
### [Oaiss Kurdy](github.com/oaissnk) - Speech Recognition
### [Zak Tumi](github.com/zakt1) - Front End Integration
