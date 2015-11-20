'use strict';

var should        = require('chai').should();
var moment        = require('moment');

require('../');

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

  describe('italianDayOfWeek', function () {

    it('should return the correct day name for monday', function (done) {
      var dayName = moment().day(1).italianDayOfWeek();
      dayName.should.equal('lunedi');
      done();
    });

    it('should return the correct day name for sunday', function (done) {
      var dayName = moment().day(0).italianDayOfWeek();
      dayName.should.equal('domenica');
      done();
    });

    it('should return the correct day name for wednesday', function (done) {
      var dayName = moment().day(3).italianDayOfWeek();
      dayName.should.equal('mercoledi');
      done();
    });
  });

});
