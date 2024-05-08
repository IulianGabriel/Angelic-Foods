async function getPasta(fastify, options) {
  fastify.get("/pasta", async function (request, reply) {
    const pasta = this.mongo.client.db("food").collection("pasta");
    const result = await pasta.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getPasta;
