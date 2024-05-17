async function getPizza(fastify, options) {
  fastify.get("/pizza", async function (request, reply) {
    const pizza = this.mongo.client.db("food").collection("pizza");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await pizza.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await pizza.find({}).toArray();
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

export default getPizza;
