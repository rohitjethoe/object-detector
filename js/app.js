let onLoadTime = new Date().getTime();

let emojis = ['🐱', '🐶', '🍷', '🍕']

mobilenet.load().then(model => {
    for(let i = 0; i < 4; i++) {
        let time = new Date().getTime();

        const img = document.querySelector(`.image-${i}`);

        time = (time - onLoadTime) / 2000;

        model.classify(img).then(predictions => {
            document.querySelector(`.name-${i}`).innerHTML = `${emojis[i]} ${predictions[0].className} in ${time} seconds`;
            document.querySelector(`.probability-${i}`).innerHTML = `probability: ${(predictions[0].probability * 100).toFixed(2)}%`;
        });
    }
});