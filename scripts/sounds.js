const pod_cursor_move = new Audio("/assets/audio/pod_cursor_move.wav");
const pod_select = new Audio("/assets/audio/pod_select.wav");
const pod_pop = new Audio("/assets/audio/pod_pop.wav");
const podcomputerenter = new Audio("/assets/audio/podcomputerenter.ogg");
const guinotify = new Audio("/assets/audio/guinotify.wav");
const pod_back = new Audio("/assets/audio/pod_back.wav");


function playsound(sound = pod_select, volume = 1) {
    if (!sound) {
        console.error("Audio element could not be found!");
        return;
    }

    const instance = new Audio(sound.src);
    instance.volume = volume;

    instance.play().catch(err => {
        console.error("Failed to play sound:", err);
    });
}