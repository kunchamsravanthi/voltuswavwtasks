// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  });
  
  // Declare a route
  fastify.get('/', (request, reply) => {
    reply.send({env:process.env.MY_MESSAGE ||'Defalt message'})
  })
  
  // Run the server!
  fastify.listen(3000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
  })