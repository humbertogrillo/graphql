const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {schema} = require('./schemas')


const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});