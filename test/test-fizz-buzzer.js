const expect = require('chai').expect;

const fizzBuzzer = require ('../fizzBuzzer');

describe('fizzBuzzer', () => {

	it('should return fizz, buzz or fizz-buzz', () => {
		const normalCases = [
			{num:15, expected: "fizz-buzz"},
			{num:5, expected: "buzz"},
			{num:3, expected: "fizz"}
		];
		normalCases.forEach(function(input) {
			//finish the line below
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise error if input is not a number', () => {
		const badInputs = [
			'a',
			'pikachu',
			false
		];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(); //something
			}).to.throw(Error);
		});
	});
});
