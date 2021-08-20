const express = require('express');
const productRouter = express.Router();

const Product = require('../models/Product');

productRouter.post('/create',(req,res)=>{
  const newProduct = req.body;
  console.log(newProduct);
  Product.create(newProduct)
    .then(async save => {
        if(save){
            res.status(200).json({save});
        } else {
            res.status(500).json(null);
        }

    });
});

productRouter.get('/get', (req,res)=>{
    Product.find().exec((err,document)=>{
        if(err){
          return next(error);
        }
        else{
            res.json(document);
        }
    });
});

productRouter.route('/update').put((req, res, next) => {
  const product = req.body;
  Product.updateOne(
    {
      _id: product._id
    }, 
    {
      $set: product
    }, 
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
  })
});

productRouter.route('/comment').put((req, res) => {
  const productId = req.body._id;
  const comment = req.body.comment;

  Product.updateOne(
    {
      _id: productId
    }, 
    {
      $push: {
        productReviews : {review:comment}
      }
    }, 
    (error, data) => {
      if (error) {
        res.json(error);
      } else {
        res.json(data);
      }
  })
});

productRouter.delete('/delete/:productId',(req, res, next) => {
  const productId = req.params.productId;
  Product.deleteOne({_id:productId}, (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(201).json(data);
    }
  })
});


productRouter.get('/getById/:productId', (req,res)=>{
  const productId = req.params.productId;
 Product.find({_id:productId}).exec((err,document)=>{
     if(err){
      res.json(error);;
     }
     else{
         res.json(document);
     }
 });
});

module.exports = productRouter;