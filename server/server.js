// ESM
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  return "Hello World";
});
/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
