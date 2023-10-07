const chai = require('chai');

const encrypt = require('./index');

describe('encrypt', function()
{
    it('Test Case 1: should return correct encrypted message', function()
    {
        const key = 'ab c';
        const message = 'abc ab';
        const expected = 'ba cba';

        const encryptedMessage = encrypt(key, message);

        chai.expect(encryptedMessage).to.equal(expected);
    });

    it('Test Case 2: should return correct encrypted message', function()
    {
        const key = 'otorhinolaryngological';
        const message = 'My name is Paul';
        const expected = 'Mr olme hs Plua';

        const encryptedMessage = encrypt(key, message);

        chai.expect(encryptedMessage).to.equal(expected);
    });

    it('Test Case 3: should return correct encrypted message', function()
    {
        const key = 'gaderypoluki';
        const message = 'This is an encrypted message';
        const expected = 'Thks ks gn dncyrotde mdssgad';

        const encryptedMessage = encrypt(key, message);

        chai.expect(encryptedMessage).to.equal(expected);
    });
});