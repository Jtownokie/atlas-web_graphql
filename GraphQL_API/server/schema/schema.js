// GraphQL Schema
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require('graphql');
const _ = require('lodash');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

const tasks = [
  {
    id: '1',
    title: 'Create your first webpage',
    weight: 1,
    description: `Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)`
  },
  {
    id: '2',
    title: 'Structure your webpage',
    weight: 1,
    description: `Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order`
  }
]

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: { 
      type: TaskType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return _.find(tasks, { id: args.id });
      }
    }
  }
});

module.exports = {
  TaskType,
  RootQuery
};

