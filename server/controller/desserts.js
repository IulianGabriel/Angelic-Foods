async function getDesserts(fastify, options) {
  fastify.get("/desserts", async function (request, reply) {
    const desserts = this.mongo.client.db("food").collection("desserts");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await desserts.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await desserts.find({}).toArray();
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

export default getDesserts;
