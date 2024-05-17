async function getSides(fastify, options) {
  fastify.get("/sides", async function (request, reply) {
    const sides = this.mongo.client.db("food").collection("sides");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await sides.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await sides.find({}).toArray();
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

export default getSides;
