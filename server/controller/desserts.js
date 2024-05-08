async function getDesserts(fastify, options) {
  fastify.get("/desserts", async function (request, reply) {
    const desserts = this.mongo.client.db("food").collection("desserts");
    const result = await desserts.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getDesserts;
