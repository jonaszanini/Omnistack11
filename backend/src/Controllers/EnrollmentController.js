const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const enrollment = await connection('enrollment').select('*');
    
        return response.json(enrollment);
    },

    async create(request, response)  {
        const { courseId, paid } = request.body;

        const userId = request.headers.authorization;

        const [id] = await connection('enrollment').insert({
            userId,
            courseId,
            paid
        })
        
        return response.json({id});
    },

    async delete(request, response) {
        const {id} = request.params;
        const userId = request.headers.authorization;

        await connection('enrollment').delete({id})
    }
}