'use strict';

var
  should        = require('chai').should(),
  moment        = require('moment'),
  moorea_moment = require('../');

describe('moorea-moment', function () {

  describe('minutesFromMidnight', function () {

    it('should return the correct number of minutes', function (done) {
      var time = moment().hours(8).minutes(0).seconds(0).milliseconds(0);
      time.minutesFromMidnight().should.equal(480);
      done();
    });

  });

  describe('secondsFromMidnight', function () {

    it('should return the correct number of seconds', function (done) {
      var time = moment().hours(8).minutes(0).seconds(0).milliseconds(0);
      time.secondsFromMidnight().should.equal(28800);
      done();
    });

  });

});
