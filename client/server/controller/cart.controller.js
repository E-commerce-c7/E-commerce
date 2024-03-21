
const db = require('../db/index');

// Create a new Cart
const createCart = async (req, res) => {
    try {
        const Cart = new db.Cart(req.body);
        await Cart.save();
        res.status(201).json(Cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read all Carts
const getCarts = async (req, res) => {
    try {
         await db.Cart.findAll({}).then((Carts) => {

             res.json(Carts);
         })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  

 

// Update a Cart
const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const Cart = await db.Cart.update(body, {
            where: {
              id:id
            }
          })
        res.json(Cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a Cart
const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        await db.Cart.destroy({
            where: {
              id: id
            }})
        res.json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCart,
    getCarts,
    updateCart,
    deleteCart,
};

