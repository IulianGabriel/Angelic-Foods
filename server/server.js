import Fastify from "fastify";
import fastifyMongo from "@fastify/mongodb";
import getBeverages from "./controller/beverages.js";
import getBurgers from "./controller/burgers.js";
import getDesserts from "./controller/desserts.js";
import getPasta from "./controller/pasta.js";
import getPizza from "./controller/pizza.js";
import getSauces from "./controller/sauces.js";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyMongo, {
  forceClose: true,
  url: process.env.PASSWORD,
});

fastify.register(getBeverages);
fastify.register(getBurgers);
fastify.register(getDesserts);
fastify.register(getPasta);
fastify.register(getPizza);
fastify.register(getSauces);

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
