const chai = require('chai');

const matrixRotation = require('./index');

describe('matrixRotation', function(){
    it('Test Case 1: Rotates matrix correctly', function()
    {
        let matrix = [
            [1,2,3,4],
            [12,1,2,5],
            [11,4,3,6],
            [10,9,8,7]
        ];

        const rotatedMatrix = matrixRotation(matrix, 2);

        const expected = [
            [3,4,5,6],
            [2,3,4,7],
            [1,2,1,8],
            [12,11,10,9]
        ];

        chai.expect(rotatedMatrix).to.eql(expected);
    })

    it('Test Case 2: Rotates matrix correctly', function()
    {
        let matrix = [
            [1,2,3,4,5,6],
            [16,1,2,3,4,7],
            [15,8,7,6,5,8],
            [14,13,12,11,10,9]
        ];

        const rotatedMatrix = matrixRotation(matrix, 7);

        const expected = [
            [8,9,10,11,12,13],
            [7,8,1,2,3,14],
            [6,7,6,5,4,15],
            [5,4,3,2,1,16]            
        ];

        chai.expect(rotatedMatrix).to.eql(expected);
    });

    it('Test Case 3: Rotates matrix correctly', function()
    {
        let matrix = [
            [1,2,3,4,5,6,7,8,9,10],
            [32,1,2,3,4,5,6,7,8,11],
            [31,24,1,2,3,4,5,6,9,12],
            [30,23,16,1,2,3,4,7,10,13],
            [29,22,15,8,7,6,5,8,11,14],
            [28,21,14,13,12,11,10,9,12,15],
            [27,20,19,18,17,16,15,14,13,16],
            [26,25,24,23,22,21,20,19,18,17]
        ];

        const rotatedMatrix = matrixRotation(matrix, 5);

        const expected = [
            [6,7,8,9,10,11,12,13,14,15],
            [5,6,7,8,9,10,11,12,13,16],
            [4,5,5,6,7,5,9,10,14,17],
            [3,4,4,6,7,8,1,11,15,18],
            [2,3,3,5,4,3,2,12,16,19],
            [1,2,2,1,16,15,14,13,17,20],
            [32,1,24,23,22,21,20,19,18,21],
            [31,30,29,28,27,26,25,24,23,22]
        ];

        chai.expect(rotatedMatrix).to.eql(expected);
    });
})