const CatalogService = require('../services/CatalogService');


//Cors Config
const enableCors = (req, res, next) => {
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
}

const createProduct = (req, res) => {
    const product = ({
        productId: req.body.productId,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productImageUrl: req.body.productImageUrl,
        productAdded: req.body.productAdded,
        productQuatity: req.body.productQuatity,
        productSeller: req.body.productSeller

    });

    CatalogService.createProduct(product).then(createdProd => {
        res.status(201).json({
            message: "Product created successfully",
            postId: createdProd._id
        });
    });
}

const listAllProducts = (req, res) => {
    CatalogService.getAllProducts()
        .then(products => res.send({
            products: products
        }))
        .catch(err => handleError(err, res));

}

const handleError = (err, res) => {
    console.error(err);
    return res.send(500);
}

const getProductById = (req, res) => {
   
    CatalogService.findProductById(req.params.id)
        .then(product => res.send({
            product: product
        }))
        .catch(err => handleError(err, res));

}

module.exports = {
    createProduct,
    enableCors,
    listAllProducts,
    getProductById

}