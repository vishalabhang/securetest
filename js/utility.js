function checkcall() {
    console.log("Hi this is call from JS")
 html2canvas(document.body).then(canvas => {
        console.log("clicked");
        var imgString = canvas.toDataURL("image/png");
        fetch(imgString)
            .then(function (response) {
                //return response.blob();
                downloadURI(response.blob(), "share.png");
            })

    });

}

function downloadURI(file, name) {
    const files = [file]
    if (navigator.canShare && navigator.canShare({ files: files })) {
        navigator.share({
            files: files,
            title: 'Pictures',
            text: 'Our Pictures.',
        })
            .then(() => console.log('Share was successful.'))
            .catch((error) => console.log('Sharing failed', error));
    } else {
        console.log(`Your system doesn't support sharing files.`);
    }
    /*
    navigator.share({
        files: files,
        title: 'Pictures',
        text: 'Our Pictures.',
    }).then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
        */
     
}
