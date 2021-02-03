function checkcall() {
    console.log("Hi this is call from JS")

    let data = { files: [], text: 'Pictures', title: 'Pictures' };
    const options = { type: "image/png" };

    html2canvas(document.body,{windowHeight :'500px'}).then(canvas => {
        console.log("clicked");
        canvas.toBlob(function (blob) {
            console.log(blob);
            const f = new File([blob], "share.png", { type: "image/png" })
            data.files.push(f);
            downloadURI(data);
        });

        /*
        var imgString = canvas.toDataURL("image/png");

        fetch(imgString)
            .then(res => res.blob())
            .then(blob => {
                console.log(blob);
                const f = new File([blob], "share.png", { type: "image/png" })
                data.files.push(f);
                downloadURI(data);
            });
            ?*/

    });


}

function downloadURI(data) {
    console.log(data);
 
    if (navigator.canShare && navigator.canShare(data)) {
        navigator.share(data)
            .then(() => alert('Share was successful.'))
            .catch((error) => alert(error));
    } else {
        //alert(`Your system doesn't support sharing files.`);
navigator.share(data)
            .then(() => alert('Share was successful.'))
            .catch((error) => alert( error));
    }
    /*
    navigator.share({
        files: uri,
        title: 'Pictures',
        text: 'Our Pictures.',
    }).then(() => console.log('Share was successful.'))
        .catch((error) => console.log(error));
        */
}

function getExcel() {


    let data = { files: [], text: 'Pictures', title: 'Pictures' };
    const options = { type: "text/csv" };


    console.log("GET Excel & convert to file")
    var fetch_url = " URL"
    fetch(fetch_url)
        .then(response => response.blob())
        .then(function (myBlob) {
            console.log(myBlob);
            const f = new File([myBlob], "tpp.csv", { type: "text/csv" })
            data.files.push(f);
            downloadURI(data);
        });
}
