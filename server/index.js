const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const port = 3003;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(cors());

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
};

app.get('/:dp', sendIndex);
app.get('*/dp/:productId', sendIndex);

//Create
app.post('/images', (req, res) => {
  console.log('SERVER REQ BODY:', req.body);

  db.models.ProductImages.countDocuments({}, (err, size) => {
    if (err) {
      res.status(400).send(err);
    } else {
      db.models.ProductImages.create({productId: size + 1, images: req.body.images}, (err, data) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).json(data);
        }
      });
    }
  });

  // db.models.ProductImages.insert({productId}, (err, product) => {
  //   if (product !== null) {
  //     res.json(product);
  //   } else {
  //     res
  //       .status(404)
  //       .json({
  //         productId,
  //         images: [],
  //       });
  //   }
  // });
});

//Read
app.get('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  db.models.ProductImages.findOne({productId}, (err, product) => {
    if (product !== null) {
      console.log(product);
      res.json(product);
    } else {
      res
        .status(404)
        .json({
          productId,
          images: [],
        });
    }
  });
});

//Update
app.put('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  db.models.ProductImages.update({productId}, (err, product) => {
    console.log('SERVER UPDATE PROD:', product);
  //   if (product !== null) {
  //     res.json(product);
  //   } else {
  //     res
  //       .status(404)
  //       .json({
  //         productId,
  //         images: [],
  //       });
  //   }
  // options: set overwrite to false, upsert true, new true
  });
});

//Delete
app.delete('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  db.models.ProductImages.deleteOne({productId}, (err, product) => {
    console.log('SERVER DELETE PROD:', product);
    // if (product !== null) {
    //   res.json(product);
    // } else {
    //   res
    //     .status(404)
    //     .json({
    //       productId,
    //       images: [],
    //     });
    // }
  });
});

app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});