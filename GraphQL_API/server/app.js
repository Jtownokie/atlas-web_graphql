// Server Express App
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { RootQuery } = require('./schema/schema');

const app = express();

const schema = new GraphQLSchema({
  query: RootQuery
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
