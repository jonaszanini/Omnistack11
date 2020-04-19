const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { email, password } = request.body;

        const user = await connection('users').where('email', email).select('*').first();

        if (!user){
            return response.status(400).json({error: 'User not found'});
        }

        if (password != user.password){
            return response.status(400).json({error: 'Incorrect password'});
        }

        return response.json(user);
    }
}