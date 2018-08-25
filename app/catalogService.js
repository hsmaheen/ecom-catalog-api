const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Product = require("../src/models/product");
const app = express();

mongoose
    .connect(
        "mongodb+srv://hsmaheen:VxK40wZtx1MvyOoo@cluster0-nheri.gcp.mongodb.net/test?retryWrites=true"

    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/products", (req, res, next) => {
    const product = new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productImageUrl: req.body.productImageUrl,
        productAdded: req.body.productAdded,
        productQuatity: req.body.productQuatity,
        productSeller: req.body.productSeller

    })
    product.save().then(createdPost => {
        res.status(201).json({
            message: "Product created successfully",
            postId: createdPost._id
        });
    });
});

app.get("/api/products", (req, res, next) => {
    Product.find().then(documents => {
        res.status(200).json({
            message: "Products fetched successfully!",
            products: documents
        });
    });
});

app.get("/api/products/:id", (req, res, next) => {    
    Product.findById(req.params.id).then(prod => {
        res.status(200).json({
            message: "Product fetched successfully",
            product: prod
        });
    });
});

app.get("/api/test", (req, res, next) => {
    res.status(200).json("Connection works");
});


module.exports = app;