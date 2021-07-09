const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

const { Client } = require("pg");
const db = new Client({user: "kylegilbert", database: "todo"});
db.connect();
// db.query("SELECT NOW()", (err, res) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(res);
//     };
// });

const getTodos = async () => {
    const todos = await db.query(`SELECT * FROM todos`);
    return todos.rows;
};

server.get('/todos', async (req, res) => {
    res.send({todos: await getTodos()});
});

server.post('/todos', async (req, res) => {
    await db.query(`INSERT INTO todos (done, name, timestamp) VALUES (
        false,
        '${req.body.name}',
        NOW() 
    )`);
    res.send({todos: await getTodos()});
    // BEFORE getTodos FUNCTION ADDED
    // const todos = await db.query(`SELECT * FROM todos`);
    // // res.send({todos: todos}); // our data is in the row object within the results.
    // res.send({todos: todos.rows});
});

server.put('/todos', async (req, res) => {
    await db.query(`UPDATE todos SET name = '${req.body.name}' WHERE id = ${req.body.id}`)
    res.send({todos: await getTodos()});
});

server.delete('/todos', async (req, res) => {
    await db.query(`DELETE FROM todos WHERE id = ${req.body.id}`)
    res.send({todos: await getTodos()});
});

server.get('/', (req, res) => {
    res.send("Bonjour, monde!");
});

server.listen(3001, () => {
    console.log("server is running on port 3001");
});