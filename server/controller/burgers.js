async function getBurgers(fastify, options) {
  fastify.get("/burgers", async function (request, reply) {
    const burgers = this.mongo.client.db("food").collection("burgers");
    const result = await burgers.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getBurgers;
