// const AWS = require('aws-sdk');
// const dotenv = require('dotenv').config({path: '.env.aws'});
// const fs = require('fs');

// const s3 = new AWS.S3({
//   accessKeyId: dotenv.parsed.AWS_ID,
//   secretAccessKey: dotenv.parsed.AWS_SECRET
// });

// const bundle = fs.readFileSync('./client/dist/gallery.js');

// const params = {
//   Bucket: dotenv.parsed.AWS_BUCKET,
//   Key: 'gallery.js',
//   Body: bundle
// };

// s3.upload(params, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`Bundle uploaded to S3 at URL ${data.Location}`);
//   }
// });