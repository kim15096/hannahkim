import numpy as np
from scipy.io import wavfile
from sklearn.decomposition import FastICA
import os

def convert_wav_to_data():
    # Load the WAV file
    file_path = 'voice_2_sample.wav'  # Replace with your WAV file's path

    sample_rate, audio_data = wavfile.read(file_path)
    print("Shape of audio_data:", audio_data.shape)
    print("Sample rate:", sample_rate)

    return audio_data, sample_rate

def main():
    audio_data, Fs = convert_wav_to_data()

    # Perform ICA using fastICA
    ica = FastICA(n_components=2)  # You can specify the number of sources/components here
    S = ica.fit_transform(audio_data)

    # Normalize the separated sources (optional)
    S = S / np.max(np.abs(S))

     # Adjust the volume of the separated sources (increase volume)
    volume_scaling_factor = pow(10, 4)  # Adjust this factor to control the volume
    S_scaled = S * volume_scaling_factor
    
    print(S_scaled)
    
    # Save the separated sources as WAV files
    for i in range(S_scaled.shape[1]):
        output_name = f'separated_source_{i}.wav'
        wavfile.write(output_name, Fs, S_scaled[:, i].astype(np.int16))

if __name__ == '__main__':
    main()