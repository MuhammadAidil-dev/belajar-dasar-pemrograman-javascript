import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('Calculator', () => {
	it('should return sum of two numbers', () => {
		// Arrange
		const operandA = 1;
		const operandB = 1;

		// Action
		const actualValue = sum(operandA, operandB);

		// Assert
		const expectedValue = 2
		assert.equal(actualValue, expectedValue);
	});

	it('should return 0 if parameter a not number', () => {
		// Arrange
		const operandA = '1';
		const operandB = 1;

		// Action
		const actualValue = sum(operandA, operandB);

		// Assert
		const expectedValue = 0;
		assert.equal(actualValue, expectedValue);
	});

	it('should return 0 if parameter b not number', () => {
		// Arrange
		const operandA = 1;
		const operandB = '1';

		// Action
		const actualValue = sum(operandA, operandB);

		// Assert
		const expectedValue = 0;
		assert.equal(actualValue, expectedValue);
	});

	it('should return 0 if parameter a is negative', () => {
		// Arrange
		const operandA = -1;
		const operandB = 1;

		// Action
		const actualValue = sum(operandA, operandB);

		// Assert
		const expectedValue = 0;
		assert.equal(actualValue, expectedValue);
	});

	it('should return 0 if parameter b is negative', () => {
		// Arrange
		const operandA = 1;
		const operandB = -1;

		// Action
		const actualValue = sum(operandA, operandB);

		// Assert
		const expectedValue = 0;
		assert.equal(actualValue, expectedValue);
	});
});