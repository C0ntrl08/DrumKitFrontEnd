document.addEventListener('DOMContentLoaded', function () {
    const images = [
        '../images/crash.png',
        '../images/kick.png',
        '../images/snare.png',
        '../images/tom1.png',
        '../images/tom2.png',
        '../images/tom3.png',
        '../images/tom4.png'
    ];

    const sounds = [
        '../sounds/crash.mp3',
        '../sounds/kick-bass.mp3',
        '../sounds/snare.mp3',
        '../sounds/tom-1.mp3',
        '../sounds/tom-2.mp3',
        '../sounds/tom-3.mp3',
        '../sounds/tom-4.mp3'
    ]

    const keyMap = {
        'a': 0,
        's': 1,
        'd': 2,
        'h': 3,
        'j': 4,
        'k': 5,
        'l': 6
    }

    for (let index = 1; index <= images.length; index++) {
        let drumDiv = document.getElementById(`drum${index}`);
        if (drumDiv) {
            let imgElement = document.createElement('img');
            imgElement.src = images[index - 1];
            drumDiv.appendChild(imgElement);

            drumDiv.addEventListener('click', function () {
                let audio = new Audio(sounds[index - 1]);
                audio.play();
            });
        }
    }

    document.addEventListener('keypress', function (event) {
        let key = event.key.toLowerCase();
        if (keyMap[key] !== undefined) {
            let audio = new Audio(sounds[keyMap[key]]);
            audio.play();

            let drumDiv = document.getElementById(`drum${keyMap[key] + 1}`);
            if (drumDiv) {
                drumDiv.classList.add('playing');
                setTimeout(() => drumDiv.classList.remove('playing'), 100);
            }
        }
    })
});