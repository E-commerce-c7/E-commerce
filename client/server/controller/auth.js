const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/index');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secretfdfdsqf785897TIHFHKLVMHIFY-key'; // Provide a default value if process.env.JWT_SECRET is not set

// ... existing code ...

const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            role,
            image
        } = req.body;

        const saltRounds = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            name,
            password: passwordHash,
            email,
            role,
            image
        });
        const savedUser = newUser.toJSON();
        res.status(201).json(savedUser);
    } catch (error) {
        throw error;
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
        const token = jwt.sign({ id: user.id }, '$2b$10$FTam.ebOkfHvCnJO.MAcsOo1Sc4XpJx.e0IwsoOTHYXBKCFpPXwtC');
        const userData = user.toJSON();
        delete userData.password;
        res.status(200).json({ token, user: userData });
    } catch (error) {
        throw error;
    }
};

module.exports = { register, login };
 

