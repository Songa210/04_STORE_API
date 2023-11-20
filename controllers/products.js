const product = require('../models/product')
const Product = require('../models/product')
const getAllProductsStatic = async (req, res) => {
   const product = await product.find({})
    res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
    const products = await product.find(req.query)
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}