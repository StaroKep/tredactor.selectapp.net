const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types');

const { decode } = require('./decodeSecrets');

/** The script is responsible for rolling out the project on the servers */
const argv = process.argv.slice(2);

const activationData = argv.shift();
const { accessKeyId, secretAccessKey, region, bucketName, folder, endpointUrl } = decode(
    activationData,
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

    const params = {
        Bucket: bucketName,
        Key: remotePath,
        Body: fileContent,
        ContentType: mime.contentType(localPath),
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) throw err;
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

fs.readdir(dist, function(err, files) {
    if (err) throw err;

    files.forEach(function(file) {
        const localPath = path.resolve(dist, file);
        const remotePath = `${folder}/${file}`;

        uploadFile(localPath, remotePath);
    });
});
