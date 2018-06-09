const Eos = require('eosjs');
const eos = Eos({
    keyProvider: ['5HrjhATTaw7dsYT6j7Tp49zErBKSXX3ygcv8YCALAqLz3CFyCEt'],
    httpEndpoint: 'http://127.0.0.1:8888'
});

describe('Blockchain Smoke Tests', () => {

    it('Can call the create user action on MR BLOCKCHAIN', async () => {
        const contract = await eos.contract('addressbook2');

        const options = { authorization: 'serg' };
        const response = await contract.create('serg', 123456, 'Angus Cheng', 30, options);
    });
});