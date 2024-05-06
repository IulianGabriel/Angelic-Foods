import Fastify from "fastify";
import fastifyMongo from "@fastify/mongodb";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyMongo, {
  forceClose: true,
  url: process.env.PASSWORD,
});

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.get("/pizza", async function (request, reply) {
  const pizza = this.mongo.client.db("food").collection("pizza");
  const result = await pizza.find({}).toArray();
  if (result.length === 0) {
    throw new Error("No documents found");
  }
  return result;
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
