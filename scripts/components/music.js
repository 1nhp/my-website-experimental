// TODO: Use defineMusic instead of copy pasting music variables

function setupMusic(name) {
  const music = new Audio("/assets/audio/music/" + name + ".ogg");
  music.loop = true;
  music.volume = 0;
  return music;
}

const music_amb = setupMusic("pod_ambience");
const music_earth = setupMusic("pod_earth");
const music_moon = setupMusic("pod_moon");

let currently_playing = music_moon;

function preloadMusic() {
  music_amb.play();
  music_earth.play();
  music_moon.play();
}

async function music(name = music_amb) {
  if (currently_playing !== name) {
    if (music_toggle) {
      fadeAudio(currently_playing, 0.0, 500);
      fadeAudio(name, 1, 1500);
      currently_playing = name;
    }
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
