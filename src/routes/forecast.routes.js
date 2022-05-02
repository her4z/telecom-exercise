const forecast = (fastify, options, done)=>{
    
    fastify.get('/forecast', (req, res)=>{
        res.send({hello: "world"})
    })

    done();
};

module.exports = {forecast};