const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const enrollment = await connection('enrollment').select('*');
    
        return response.json(enrollment);
    },

    async selectCoursesByUser (request, response){
        const enrollment = await connection('enrollment')
        .join('courses', 'courses.id', '=', 'enrollment.courseId')
        .select(['courses.*'])

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

        const enrollment = await connection('enrollment').where('id', id).select('userId').first();

        if (enrollment.userId != userId) {
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('enrollment').where('id', id).delete();

        return response.status(204).send();
    }
}