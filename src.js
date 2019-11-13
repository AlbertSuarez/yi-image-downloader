const yi = require('yi-action-camera');


const yiImagePath = '/tmp/fuse_d/DCIM/153MEDIA/';
const yiImagePattern = 'YDXJ';
const yiImageFormat = '.jpg';
const imageOutputFolder = 'images'
 

yi.connect()
    .then(function () {
        console.log('Connected to Yi Action Camera!');
        return yi.downloadFile(yiImagePath + yiImagePattern + '0085' + yiImageFormat, imageOutputFolder);
    })
    .then(function (filePath) {
        console.log('Downloaded:', filePath);
        return yi.disconnect();
    })
    .then(function () {
        console.log('Disconnected from Yi Action Camera!');
    })
    .catch(function (err) {
        console.error(err);
    });
