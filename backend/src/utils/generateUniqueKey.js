const crypto = require('crypto')

module.exports = {
    generateUniqueKey() {
        return crypto.randomBytes(4).toString('HEX')
    },

    generateUniqueKey8() {
        return crypto.randomBytes(8).toString('HEX')
    },
}


