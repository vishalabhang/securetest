function checkcall() {
    console.log("Hi this is call from JS")

    let data = { files: [], text: 'Pictures', title: 'Pictures' };
    const options = { type: "image/png" };

    html2canvas(document.body).then(canvas => {
        console.log("clicked");
        var imgString = canvas.toDataURL("image/png");
        fetch(imgString)
            .then(function (response) {
            console.log(response)
            var f =new File([response],'Share.png',options);
                data.files.push(f);
                downloadURI(data);
            })

    });


}

function downloadURI(data) {
console.log(data);
    if (navigator.canShare && navigator.canShare(data)) {
        navigator.share(data)
            .then(() => console.log('Share was successful.'))
            .catch((error) => console.log('Sharing failed', error));
    } else {
        console.log(`Your system doesn't support sharing files.`);
    }
    /*
    navigator.share({
        files: uri,
        title: 'Pictures',
        text: 'Our Pictures.',
    }).then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
        */
}
