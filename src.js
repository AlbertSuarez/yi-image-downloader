const yi = require('yi-action-camera');
 

yi.connect()
    .then(function () {
        console.log('connected');
        return yi.takePhoto();
    })
    .then(function (filePath) {
        console.log('photo', filePath);
        return yi.downloadFile(filePath);
    })
    .then(function (filePath) {
        console.log('photo downloaded', filePath);
        return yi.disconnect();
    })
    .then(function () {
        console.log('disconnected');
    })
    .catch(function (err) {
        console.error(err);
    });
