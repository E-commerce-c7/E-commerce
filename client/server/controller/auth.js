const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/index');

const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            accountType,
            picture
        } = req.body;

        const saltRounds =await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            name,
            email,
            password: passwordHash,
            accountType,
            picture
        });
        const savedUser = newUser.toJSON();
        res.status(201).json(savedUser);
    } catch (error) {
       throw error
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        const userData = user.toJSON();
        delete userData.password;
        res.status(200).json({ token, user: userData });
    } catch (error) {
       throw error
    }
};

module.exports = { register, login };