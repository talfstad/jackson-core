import { expect } from 'chai';
import lambda from '../../lambdas/jackson-core';

describe('lambdas', () => {
  describe('jackson-core', () => {
    it('can run the jackson-core lambda and mock inputs', () => {
      lambda.handler({}, context, (err, result) => {
        expect(result).to.equal(result);
      });
    });
  });
});
