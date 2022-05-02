const location = (fastify, options, done)=>{
    
    fastify.get('/location', (req, res)=>{
        res.send({hello: "world"})
    })

    done();
};

module.exports = {location};