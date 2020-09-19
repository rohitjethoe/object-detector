mobilenet.load().then(model => {
    for(let i = 0; i < 3; i++) {
        const img = document.querySelector(`.image-${i}`);

        model.classify(img).then(predictions => {
            console.log('Predictions: ');
            console.log(predictions);
            document.querySelector(`.type-${i}`).innerHTML = predictions[0].className;
        });
    }
});
