// Server Express App
const express = require('express');
const mongoose = require('mongoose');
const Project = require('./models/project');
const Task = require('./models/task');
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

app.use(express.json());

// Mongoose Connection
mongoose.connect("mongodb+srv://jtownokie:mSSiw5pzzIamgYzq@files-manager-cluster.rqhsejc.mongodb.net/?retryWrites=true&w=majority&appName=Files-Manager-Cluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));
