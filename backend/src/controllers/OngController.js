const crypto = require('crypto')
const connection = require('../database/connection')
const functions = require('../utils/generateUniqueKey')

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body

        const id = functions.generateUniqueKey()
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return res.json({ id });
    }
}