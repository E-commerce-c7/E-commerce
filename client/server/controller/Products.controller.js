
const db = require('../db/index');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const product = new db.Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read all products
const getProducts = async (req, res) => {
    try {
         await db.Product.findAll({}).then((products) => {

             res.json(products);
         })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  

 

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await db.Product.update(body, {
            where: {
              id:id
            }
          })
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await db.Product.destroy({
            where: {
              id: id
            }})
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
};

