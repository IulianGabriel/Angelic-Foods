async function getBeverages(fastify, options) {
  fastify.get("/beverages", async function (request, reply) {
    const beverages = this.mongo.client.db("food").collection("beverages");
    const result = await beverages.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getBeverages;
