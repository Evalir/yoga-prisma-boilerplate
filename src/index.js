require('dotenv').config({ path: 'variables.env' });

const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Mutation,
    Query
  }
});

server.start(() => console.log(`The server is running on http://localhost:4000`));

/*
HOW TO EFFECTIVELY USE THIS BOILERPLATE:
  - GraphQL Yoga works best with prisma, so
  - Install the prisma CLI
  - To test it with a demo, just use the demo server with prisma init
  - magic
*/
