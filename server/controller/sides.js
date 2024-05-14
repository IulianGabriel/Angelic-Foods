async function getSides(fastify, options) {
  fastify.get("/sides", async function (request, reply) {
    const sides = this.mongo.client.db("food").collection("sides");
    const result = await sides.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getSides;
