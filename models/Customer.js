module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define(
        'Customer',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            address: DataTypes.STRING,
            phoneNumber: DataTypes.STRING
        },
        {
            underscored: true
        }
    );

    Customer.associate = models => {


        Customer.hasMany(models.Order, {
            foreignKey: {
                name: 'customerId',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        })
    }

    return Customer;
};