const chai = require('chai');
const expect = chai.expect;

// eslint-disable-next-line max-len
const MongoDBUtil = require('../../../modules/mongodb/mongodb.module').MongoDBUtil;

describe('MongoDBUtil', function() {
  describe('mongodb.util file', function() {
    it('should read the mongodb.module file', function() {
      expect(MongoDBUtil).to.be.a('object');
    });
  });
});
