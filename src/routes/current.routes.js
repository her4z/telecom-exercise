const current = (fastify, options, done)=>{
    
    fastify.get('/current', (req, res)=>{
        res.send({hello: "world"})
    })

    done();
};

module.exports = {current};