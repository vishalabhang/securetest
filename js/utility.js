function checkcall() {
    console.log("Hi this is call from JS")

    html2canvas(document.body).then(canvas => {
        console.log("clicked");
        var imgString = canvas.toDataURL("image/png");
        downloadURI(imgString, "helloWorld.png");
    });


}

function downloadURI(uri, name) {
/*
    if (navigator.canShare && navigator.canShare({ files: uri })) {
        navigator.share({
            files: uri,
            title: 'Pictures',
            text: 'Our Pictures.',
        })
            .then(() => console.log('Share was successful.'))
            .catch((error) => console.log('Sharing failed', error));
    } else {
        console.log(`Your system doesn't support sharing files.`);
    }
    */
    navigator.share({
        files: uri,
        title: 'Pictures',
        text: 'Our Pictures.',
    }).then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
     
}
