const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('courses').count();

        const courses = await connection('courses')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');
    
        response.header('X-Total-Count', count['count(*)'])

        return response.json(courses);
    },

    async create(request, response)  {
        const { name, level, duration, usersEnrolled } = request.body;
        const id = crypto.randomBytes(4).toString('hex');

        await connection('courses').insert({
            id,
            name,
            level,
            duration,
            usersEnrolled
        })
        
        return response.json({id});
    }
}