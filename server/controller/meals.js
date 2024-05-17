async function getMeals(fastify, options) {
  fastify.get("/meals", async function (request, reply) {
    const meals = this.mongo.client.db("food").collection("meals");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await meals.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await meals.find({}).toArray();
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

export default getMeals;
