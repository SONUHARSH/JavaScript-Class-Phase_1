

function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            reject(content); //resolve(content) 
        }, 6000);
    });
}

 async function steps() {
    try {
            console.log("starting start");
            const downloadedData =await download("www.xyz.com");
            console.log("data downloaded is", downloadedData);
            return uploadResponse;
    } catch (error) {
        console.log("we can hendled the error", error);   
    }
    finally{
        console.log("ending");
    }
}

steps();