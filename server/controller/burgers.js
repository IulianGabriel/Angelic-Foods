async function getBurgers(fastify, options) {
  fastify.get("/burgers", async function (request, reply) {
    const burgers = this.mongo.client.db("food").collection("burgers");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await burgers.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await burgers.find({}).toArray();
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

export default getBurgers;
