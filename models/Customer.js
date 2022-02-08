module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: DataTypes.STRING,
        phoneNumber: DataTypes.STRING
    },
        {
            underscored: true
        }
    );

    return Customer;
};