const onLoadTime = new Date().getTime();

mobilenet.load().then(model => {
    for(let i = 0; i < 3; i++) {
        let time = new Date().getTime();

        const img = document.querySelector(`.image-${i}`);

        time = (time - onLoadTime) / 2000;

        model.classify(img).then(predictions => {
            document.querySelector(`.type-${i}`).innerHTML = `${predictions[0].className} in ${time} seconds`;
        });
    }
});