let onLoadTime = new Date().getTime();

const emojis = ['🐱', '🐶', '🍷', '🍕', '🖼']

mobilenet.load().then(model => {
    for(let i = 0; i < 4; i++) {
        let time = new Date().getTime();

        const img = document.querySelector(`.image-${i}`);

        time = (time - onLoadTime) / 2000;

        model.classify(img).then(predictions => {
            document.querySelector(`.name-${i}`).innerHTML = `${emojis[i]} ${predictions[0].className} <span class='time'>in ${time} seconds</span>`;
            document.querySelector(`.probability-${i}`).innerHTML = `probability: ${(predictions[0].probability * 100).toFixed(2)}%`;
        });
    }
});

document.querySelector('.file').onchange = (evt) => {
    var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.querySelector('.uploaded-image').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }

    const img = document.querySelector('.uploaded-image');

    mobilenet.load().then(model => {
        model.classify(img).then(predictions => {
            document.querySelector(`.name-4`).innerHTML = `${emojis[4]} ${predictions[0].className}`;
            document.querySelector(`.probability-4`).innerHTML = `probability ${(predictions[0].probability * 100).toFixed(2)}%`
        })
    })
}
