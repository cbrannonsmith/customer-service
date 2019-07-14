/* eslint-disable require-jsdoc */
(function() {
  'use strict';
  module.exports = init;

  function init() {
    return {
      CustomerController: require('./customer.controller'),
      CustomerMiddleware: require('./customer.middleware'),
      CustomerService: require('./customer.service'),
    };
  };
})();
