const music_amb = new Audio("/assets/audio/music/pod_ambience.ogg");
music_amb.loop = true;
music_amb.volume = 0;
const music_earth = new Audio("/assets/audio/music/pod_earth.ogg");
music_earth.loop = true;
music_earth.volume = 0;
const music_moon = new Audio("/assets/audio/music/pod_moon.ogg");
music_moon.loop = true;
music_moon.volume = 0;

function preloadMusic() {
  music_amb.play();
  music_earth.play();
  music_moon.play();
}

let currently_playing = music_moon;

async function music(name = music_amb) {
  if (currently_playing !== name) {
    fadeAudio(currently_playing, 0.0, 500);
    fadeAudio(name, 1, 1500);
    currently_playing = name;
  }
}

function fadeAudio(mediaElement, targetVolume, durationMs) {
  if (mediaElement._fadeInterval) {
    clearInterval(mediaElement._fadeInterval);
  }

  return new Promise((resolve) => {
    const startVolume = mediaElement.volume;
    const stepTime = 50;
    const steps = durationMs / stepTime;
    const volumeStep = (targetVolume - startVolume) / steps;

    mediaElement._fadeInterval = setInterval(() => {
      const nextVolume = mediaElement.volume + volumeStep;
      if (
        (volumeStep > 0 && nextVolume >= targetVolume) ||
        (volumeStep < 0 && nextVolume <= targetVolume)
      ) {
        mediaElement.volume = targetVolume;
        clearInterval(mediaElement._fadeInterval);
        mediaElement._fadeInterval = null;
        resolve();
      } else {
        mediaElement.volume = nextVolume;
      }
    }, stepTime);
  });
}
