import sys
import os
import ffmpeg
import speech_recognition as sr
from pytube import YouTube

def progress(stream, chunk, bytes_remaining):
    total_size = stream.filesize
    bytes_downloaded = total_size - bytes_remaining
    percentage_of_completion = bytes_downloaded / total_size * 100

def download_mp3(video_url, output_path):
    yt = YouTube(video_url)
    yt.register_on_progress_callback(progress)
    yt.title = "transcript"
    audio_stream = yt.streams.filter(mime_type="audio/webm").first()
    audio_stream.download(output_path)

video_url = sys.argv[1]
output_path = ""
download_mp3(video_url, output_path)

command2mp3 = "ffmpeg -i transcript.webm transcript.wav"
os.system(command2mp3)

# use the audio file as the audio source                                        
r = sr.Recognizer()
with sr.AudioFile("transcript.wav") as source:
    # The second arg is 30 second to stick with the free tier
    # for transcribing longer videos a paid tier is required
    audio = r.record(source, 30)  # reads the first 30 seconds
    transcript = r.recognize_google(audio)
    print(transcript)
    os.remove('transcript.webm')
    os.remove('transcript.wav')
    sys.stdout.flush()
