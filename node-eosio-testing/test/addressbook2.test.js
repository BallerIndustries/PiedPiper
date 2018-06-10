const Eos = require('eosjs');
const eos = Eos({
    keyProvider: ['5HrjhATTaw7dsYT6j7Tp49zErBKSXX3ygcv8YCALAqLz3CFyCEt'],
    httpEndpoint: 'http://127.0.0.1:8888'
});

describe('AddressBook2 Smoke Tests', () => {

    it('Can call the create user action on MR BLOCKCHAIN', async () => {
        const contract = await eos.contract('addressbook2');

        const options = { authorization: 'serg' };
        const ssn = getRandomInt(0, 100000000);
        const response = await contract.create('serg', ssn, 'Angus Cheng', 30, options);
        console.log(response);
    });

    it('Can read a user from the database', async() => {

    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}