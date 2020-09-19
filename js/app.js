
mobilenet.load().then(model => {
    for(let i = 0; i < 1; i++) {
        const img = document.querySelector(`.image-${i}`);

        model.classify(img).then(predictions => {
            console.log('Predictions: ');
            console.log(predictions[0]);
            document.querySelector(`.type-${i}`).innerHTML = predictions[0].className;
        });
    }
});
