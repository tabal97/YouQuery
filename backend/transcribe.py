import sys
from pytube import YouTube
import speech_recognition as sr
import os
from os import path
from pydub import AudioSegment
import ffmpeg

def progress(stream, chunk, bytes_remaining):
    total_size = stream.filesize
    bytes_downloaded = total_size - bytes_remaining
    percentage_of_completion = bytes_downloaded / total_size * 100

def download_mp3(video_url, output_path):
    yt = YouTube(video_url)
    yt.register_on_progress_callback(progress)
    yt.title = "audio"
    audio_stream = yt.streams.filter(only_audio=True).first()
    audio_stream.download(output_path)

video_url = sys.argv[1]
output_path = ""
download_mp3(video_url, output_path)

command2mp3 = "ffmpeg -i audio.mp4 audio.mp3"
os.system(command2mp3)

# convert mp3 file to wav                                                       
sound = AudioSegment.from_mp3("audio.mp3")
sound.export("transcript.wav", format="wav")

# transcribe audio file                                                         
AUDIO_FILE = "transcript.wav"

# use the audio file as the audio source                                        
r = sr.Recognizer()
with sr.AudioFile(AUDIO_FILE) as source:
    audio = r.record(source, duration=60)  # reads the first 60 seconds                  
    transcript = r.recognize_google(audio)
    print(transcript)
    os.remove('audio.mp4')
    os.remove('audio.mp3')
    os.remove('transcript.wav')
    sys.stdout.flush()
