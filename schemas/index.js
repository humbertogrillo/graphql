const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs =`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
};

exports.module = {
    schema: makeExecutableSchema({
        typeDefs,
        resolvers,
})};
