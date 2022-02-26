const uppercase = require('./uppercase')
const assert = require('assert');

describe('Uppercase', () => {
    test('Should uppercase letter', () => {
        expect(uppercase('a')).toEqual('A')
    })

    test('should throw Error', () => {
        const res = () => uppercase(9)
        assert.throws(res, Error)
    })
});