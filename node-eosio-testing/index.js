const Eos = require('eosjs');
const eos = Eos({
    keyProvider: ['5JqoT7tEwVG8M1joTE97dBjQ8ZSy1XvbA6CKVtRAvN1hfVMQQJX'],
    httpEndpoint: 'http://127.0.0.1:8888'
});

async function main() {
    eos.getBlock();

    // let result;
    // result = await eos.getBlock(1);
    // console.log(result);
    //
    // result = await eos.getBlock({block_num_or_id: 1});
    // console.log(result);
    //
    // result = await eos.getInfo({});
    // console.log(result);

    try {
        const contract = await eos.contract('addressbook2');
        // console.log(contract);

        const options = { authorization: ['serg'] };
        const response = await contract.create('serg', 123456, 'Angus Cheng', 30, options);
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }



}

main();