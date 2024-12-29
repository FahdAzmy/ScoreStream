const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers/resolver");
const typeDefs = require("./typeDefs/typeDefs");
const { GlobalErrorHandler } = require("./middlewares/errorHandling");
require("dotenv").config();
//GraphQL
let apolloServer;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const port = process.env.PORT || 4000;
//Error handling
app.use(GlobalErrorHandler);
//expres Server
app.listen(port, () => {
  console.log(`Server Listing on port ${port}`);
});
