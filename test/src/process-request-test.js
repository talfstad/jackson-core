// import { expect } from 'chai';
// import JacksonCore from '../../src';
//
// describe('processRequest', () => {
//   // example input:
//   const validInputs = {
//     uuid: '994c3823-aff6-f548-ce9b-1b5df2ac267c',
//     ip: '2602:304:ce3e:27f0:1e:abc8:9568:8b1',
//     url: 'https://some-lander.com/landingpage.html',
//     geo: { country: 'US' },
//   };
//
//   // if we don't have necessary inputs we fail
//   it('fails if empty input object', (done) => {
//     JacksonCore.processRequest({})
//       .catch((err) => {
//         try {
//           expect(err).to.not.equal(null);
//           done();
//         } catch (e) {
//           done(e);
//         }
//       });
//   });
//
//   it('fails if no uuid passed in input object', (done) => {
//     JacksonCore.processRequest({ ...validInputs, uuid: undefined })
//       .catch((err) => {
//         try {
//           expect(err).to.not.equal(null);
//           done();
//         } catch (e) {
//           done(e);
//         }
//       });
//   });
//
//   it('fails if no url passed in input object', (done) => {
//     JacksonCore.processRequest({ ...validInputs, url: undefined })
//       .catch((err) => {
//         try {
//           expect(err).to.not.equal(null);
//           done();
//         } catch (e) {
//           done(e);
//         }
//       });
//   });
//
//   it('fails if no IP Address passed in input object', (done) => {
//     JacksonCore.processRequest({ ...validInputs, ip: undefined })
//       .catch((err) => {
//         try {
//           expect(err).to.not.equal(null);
//           done();
//         } catch (e) {
//           done(e);
//         }
//       });
//   });
// });
