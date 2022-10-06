const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const swaggerDocument = require("./swagger.json");
const bodyParser = require("body-parser");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const router = require("./router");

const { getPayload } = require("./util");
require("./db");
const config = require("./config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use(loggingMiddleware);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  context: ({ req }) => {
    const bearerHeader = req.headers.authorization || "";
    const token = bearerHeader.replace("Bearer ", "");
    const payload = getPayload(token);
    return payload;
  },
});

server.start().then(() => {
  server.applyMiddleware({
    app,
    cors: true,
  });
});

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
  console.log(
    `GraphQL endpoint and playground accessible at http://localhost:${config.port}${server.graphqlPath}`
  );
});

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
///app.use("/", (_, res) => res.send("/graphql"));
