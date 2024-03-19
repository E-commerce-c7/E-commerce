
const db = require('../db/index');

// Create a new User
const createUser = async (req, res) => {
    try {
        const User = new db.User(req.body);
        await User.save();
        res.status(201).json(User);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read all Users
const getUsers = async (req, res) => {
    try {
         await db.User.findAll({}).then((Users) => {

             res.json(Users);
         })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  

 

// Update a User
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const User = await db.User.update(body, {
            where: {
              id:id
            }
          })
        res.json(User);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a User
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await db.User.destroy({
            where: {
              id: id
            }})
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
};

