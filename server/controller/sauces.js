async function getSauces(fastify, options) {
  fastify.get("/sauces", async function (request, reply) {
    const sauces = this.mongo.client.db("food").collection("sauces");
    const result = await sauces.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getSauces;
