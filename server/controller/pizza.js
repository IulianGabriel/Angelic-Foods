async function getPizza(fastify, options) {
  fastify.get("/pizza", async function (request, reply) {
    const pizza = this.mongo.client.db("food").collection("pizza");
    const result = await pizza.find({}).toArray();
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });
}

export default getPizza;
