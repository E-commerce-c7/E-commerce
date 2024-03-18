const Sequelize = require('sequelize');

const db = {}


// Create a new Sequelize instance
const sequelize = new Sequelize('ecommerce', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

// connection check :
sequelize.authenticate()
.then(() => {console.log('Connection has been established successfully.')})
.catch((error) => {console.error('Unable to connect to the database: ', error)})

// Define the User model
 db.User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    accountType: {
        type: Sequelize.ENUM('user', 'seller'),
        allowNull: false,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

// Define the Product model
db.Product = sequelize.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    sizes: {
        type: Sequelize.TEXT,
        get: function() {
            return JSON.parse(this.getDataValue('sizes'));
        }, 
        set: function(val) {
            return this.setDataValue('sizes', JSON.stringify(val));
        }
    },
    color: {
        type: Sequelize.TEXT,
        get: function() {
            return JSON.parse(this.getDataValue('color'));
        }, 
        set: function(val) {
            return this.setDataValue('color', JSON.stringify(val));
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    pictures: {
        type: Sequelize.TEXT,
        get: function() {
            return JSON.parse(this.getDataValue('pictures'));
        }, 
        set: function(val) {
            return this.setDataValue('pictures', JSON.stringify(val));
        }
    },
    sex: {
        type: Sequelize.ENUM('women', 'men', 'kid'),
        allowNull: true,
    },
});

// Define the Operation model
db.Operation = sequelize.define('operation', {
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dataType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

// Define the relationships between the models
db.User.hasMany(db.Product, { as: 'products', foreignKey: 'userId' });
db.Product.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });

db.User.hasMany(db.Operation, { as: 'operations', foreignKey: 'userId' });
db.Operation.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });

db.Product.belongsToMany(db.Operation, { through: 'ProductOperation', foreignKey: 'productId' });
db.Operation.belongsToMany(db.Product, { through: 'ProductOperation', foreignKey: 'operationId' });




// Create the tables in the database
// sequelize.sync({force : true})
//     .then(() => {
//         console.log('Database and tables created!');
//     })
//     .catch((error) => {
//         console.error('Error creating database:', error);
//     });

module.exports = db
