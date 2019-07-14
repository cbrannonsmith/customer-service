/* eslint-disable new-cap */
const chai = require('chai');
const expect = chai.expect;

const CustomerModule = require('../../../modules/customer/customer.module');

describe('CustomerModule', function() {
  describe('customer.module file', function() {
    it('should confirm CustomerModule exist', function() {
      expect(CustomerModule).to.be.a('function');
    });
    it('should confirm CustomerModule function returns an object', function() {
      expect(CustomerModule()).to.be.a('object');
    });
    it('should confirm CustomerController function exists', function() {
      expect(CustomerModule().CustomerController).to.be.a('function');
    });
    it('should confirm CustomerModule.Middleware object exists', function() {
      expect(CustomerModule().CustomerMiddleware).to.be.a('object');
    });
    it('should confirm CustomerService object exist', function() {
      expect(CustomerModule().CustomerService).to.be.a('object');
    });
  });
});
