const Eos = require('eosjs');
const expect = require('chai').expect;

const eos = Eos({
    keyProvider: ['5HrjhATTaw7dsYT6j7Tp49zErBKSXX3ygcv8YCALAqLz3CFyCEt'],
    httpEndpoint: 'http://127.0.0.1:8888'
});

describe('Todo Smoke Tests', () => {
    let contract = null;
    let options = {authorization: 'serg'};

    beforeEach(async() => {
        contract = await eos.contract('todo');
    });

    it('should be able to CREATE a todo', async() => {
        const result = await createTodo();
        expect(result.response).to.exist;
    });

    it('should be able to CREATE and then DESTROY a todo', async() => {
        // CREATE
        const result = await createTodo();
        const todoId = result.todoId;

        // DESTROY
        const response = await destroyTodo(todoId);
        expect(response).to.exist;
    });

    it('should be able to CREATE and then COMPLETE a todo', async() => {
        const result = await createTodo();
        const todoId = result.todoId;

        // COMPLETE
        const response = await completeTodo(todoId);
        expect(response).to.exist;
    });

    xit('should be able to CREATE and RETRIEVE a todo by ID', async() => {
        // CREATE
        const result = await createTodo();
        const todoId = result.todoId.toString();

        // RETRIEVE
        const todo = await eos.getTableRows(true, 'todo', 'todo', 'todos', todoId);
        expect(todo).to.be.an('object');
        expect(todo.rows).to.not.exist;
    });

    it('should be able to READ all todo', async() => {
        const result = await eos.getTableRows(true, 'todo', 'todo', 'todos');
        expect(result.rows).to.be.an('array');
        expect(result.rows.length).to.be.gt(0);
    });

    async function createTodo() {
        const randomId = getRandomInt(0, 4294967295);
        const response = await contract.create('serg', randomId, 'Win the blockchain hackathon', options);
        return { todoId: randomId, response: response };
    }

    async function destroyTodo(todoId) {
        return await contract.destroy('serg', todoId, options);
    }

    async function completeTodo(todoId) {
        return await contract.complete('serg', todoId, options);
    }


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

