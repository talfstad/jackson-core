// import { expect } from 'chai';
import JacksonCore from '../../src';

describe('Jackson Core -> index.js', () => {
  it('processRequest runs', () => {
    JacksonCore.processRequest({})
      .then(() => {
        console.log('request is processed');
      })
      .catch(() => {
        console.log('request is error');
      });
  });
});
