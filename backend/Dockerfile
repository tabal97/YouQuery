FROM nikolaik/python-nodejs:latest

WORKDIR /app
COPY . /app

RUN apt-get -y update && apt-get -y upgrade && apt-get install -y --no-install-recommends ffmpeg

RUN npm ci
RUN pip install pytube ffmpeg-python SpeechRecognition pydub

EXPOSE 3000

# ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD ["npm", "start"]
