'use strict';

var moment = require('moment');

(function (moment) {

  /**
   * function minutesFromMidnight
   * returns the number of minutes since midnight
   *
   * @return Number
   **/
  moment.fn.minutesFromMidnight = function () {
    var
      hours = this.hours(),
      minutes = this.minutes();
    return (60 * hours) + minutes;
  };

  /**
   * function secondsFromMidnight
   * returns the number of seconds since midnight
   *
   * @return Number
   **/
  moment.fn.secondsFromMidnight = function () {
    var
      hours = this.hours(),
      minutes = this.minutes(),
      seconds = this.seconds();
    return (60 * 60 * hours) + (60 * minutes) + seconds;
  };

})(moment);
