var express = require('express');
var expressHealthcheck = require('express-healthcheck');
var catalogController = require('./controllers/CatalogController');

/* Initialize router */
const router = express.Router();

router.use('/up', expressHealthcheck());
router.use(catalogController.enableCors);
router.get('/products', catalogController.listAllProducts);
router.post('/products', catalogController.createProduct);
router.get('/products/:id', catalogController.getProductById);

module.exports = router;