async function getBeverages(fastify, options) {
  fastify.get("/beverages", async function (request, reply) {
    const beverages = this.mongo.client.db("food").collection("beverages");
    const { sort } = request.query;

    try {
      let result;
      if (sort === "desc" || sort === "asc") {
        const sortOrder = sort === "desc" ? -1 : 1;
        result = await beverages.find({}).sort({ price: sortOrder }).toArray();
      } else {
        result = await beverages.find({}).toArray();
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

export default getBeverages;
