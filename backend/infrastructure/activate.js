// TODO: Объединить это решение для frontendа и backendа
/** The script is responsible for rolling out the project on the servers */
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types');

const { decode } = require('./decodeSecrets');
const argv = process.argv.slice(2);

/** Parsing string with secrets */
const { accessKeyId, secretAccessKey, region, bucketName, folder, endpointUrl } = decode(
    argv.shift(),
);

const dist = path.resolve(__dirname, '../dist');
const endpoint = new AWS.Endpoint(endpointUrl);

const s3 = new AWS.S3({
    endpoint,
    region,
    accessKeyId,
    secretAccessKey,
});

const uploadFile = (localPath, remotePath) => {
    const fileContent = fs.readFileSync(localPath);

    /** Important set correct contentType */
    const contentType = mime.lookup(localPath);

    console.log(contentType);

    const params = {
        Bucket: bucketName,
        Key: remotePath,
        Body: fileContent,
        ContentType: contentType,
    };

    s3.upload(params, function(err, data) {
        if (err) throw err;
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

/** Upload all dist files */
fs.readdir(dist, function(err, files) {
    if (err) throw err;

    files.forEach(function(file) {
        const localPath = path.resolve(dist, file);
        const remotePath = `${folder}/${file}`;

        uploadFile(localPath, remotePath);
    });
});
