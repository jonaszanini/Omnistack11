const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {

    async index(req, res) {
        const courses = await connection('courses').select('*');
    
        return res.json(courses);
    },

    async create(req, res)  {
        const { name, level, duration, usersEnrolled } = req.body;
        const id = crypto.randomBytes(4).toString('hex');

        await connection('courses').insert({
            id,
            name,
            level,
            duration,
            usersEnrolled
        })
        
        return res.json({id});
    }
}