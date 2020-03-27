const functions = require('../../src/utils/generateUniqueKey')

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = functions.generateUniqueKey()

        expect(id).toHaveLength(8)
    })
})