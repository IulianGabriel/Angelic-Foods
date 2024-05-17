async function getPasta(fastify, options) {
  fastify.get("/pasta", async function (request, reply) {
    const pasta = this.mongo.client.db("food").collection("pasta");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await pasta.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await pasta.find({}).toArray();
      }
      if (result.length === 0) {
        throw new Error("No documents found");
      }
      return result;
    } catch (err) {
      reply.status(500).send(err.message);
    }
  });
}

export default getPasta;
