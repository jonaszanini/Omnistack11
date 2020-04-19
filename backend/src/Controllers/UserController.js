const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response) {
        const {password, name, lastName, birthday, phone, email, street, number, complement, district, cep, city, state, profile, lastAccess } = request.body;

        const [id] = await connection('users').insert({
            password,
            name,
            lastName,
            birthday,
            phone,
            email,
            street,
            number,
            complement,
            district,
            cep,
            city,
            state,
            profile,
            lastAccess
        });

        return response.json({id})
    }
}