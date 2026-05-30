function playsound(path, volume = 1){
    const audio = new Audio(path);
    audio.volume = volume
    audio.play()
}