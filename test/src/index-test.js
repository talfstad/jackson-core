// import { expect } from 'chai';
import {
  processRequest,
} from '../../src';

describe('Jackson Core -> index.js', () => {
  it('processRequest runs', () => {
    processRequest({})
      .then(() => {
        console.log('request is processed');
      })
      .catch(() => {
        console.log('request is error');
      });
  });
});
