var express = require('express');
var expressHealthcheck = require('express-healthcheck');
var catalogController = require('./controllers/CatalogController');

/* Initialize router */
const router = express.Router();

router.use('/up', expressHealthcheck());
router.use(catalogController.enableCors);
router.get('/api/products', catalogController.listAllProducts);
router.post('/api/products/add', catalogController.createProduct);
router.get('/api/products/:id', catalogController.getProductById);

module.exports = router;