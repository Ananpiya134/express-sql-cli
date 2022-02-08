module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Supplier', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        description: DataTypes.STRING,
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isINT: true
            }
        }
    }, {
        underscored: true
    }
    )
    return Product;
};