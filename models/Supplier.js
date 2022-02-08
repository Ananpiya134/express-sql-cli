module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: DataTypes.STRING,
        phoneNumber: DataTypes.STRING
    }, {
        underscored: true
    }
    )
    return Supplier;
};