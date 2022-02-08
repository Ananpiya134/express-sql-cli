const db = require('./models');
const { Customer } = require('./models');

const run = async () => {
    try {
        // const customer = await Customer.create({ name: 'john' })
        // const customer = await db.Customer.create({ name: 'john' })
        await Customer.update({ address: 'Bangkok' }, { where: { id: 1 } });
    } catch (err) {
        console.log(err);
    }
};

run();