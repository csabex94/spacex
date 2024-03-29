const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = process.env.POR || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));