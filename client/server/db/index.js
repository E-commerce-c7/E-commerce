const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('ecommerce', 'root', 'Yeesou.33', {
    host: 'localhost',
    dialect: 'mysql',
});

// connection check :
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error)
    })

// Define the User model
const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('user', 'seller'),
        allowNull: false
    }
});

// Define the Product model
const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    color: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    sizes: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.ENUM('men', 'women', 'kids'),
        allowNull: false
    },
    brand: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    }
});

// Establish the association between User and Product
User.hasMany(Product);
Product.belongsTo(User);


// Sync the models with the database
// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Models synced with the database.')
//     })
//     .catch((error) => {
//         console.error('Unable to sync models with the database: ', error)
//     });
 


module.exports.Product=Product;
module.exports.User=User;


