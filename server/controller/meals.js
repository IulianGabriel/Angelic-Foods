async function getMeals(fastify, options) {
  fastify.get("/meals", async function (request, reply) {
    const meals = this.mongo.client.db("food").collection("meals");
    const result = await meals.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getMeals;
